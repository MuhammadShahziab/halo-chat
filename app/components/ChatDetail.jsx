"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import Link from "next/link";
import { AddPhotoAlternate } from "@mui/icons-material";
import { CldUploadButton } from "next-cloudinary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MessageBox from "./MessageBox";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { pusherClient } from "@lib/pusher";
import SendIcon from "@mui/icons-material/Send";
const ChatDetail = ({ chatId }) => {
  const [chat, setChat] = useState({});
  const [otherMembers, setOtherMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { data: session } = useSession();
  const currentUser = session?.user;

  const getChat = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`);
      const data = await res.json();
      setChat(data);
      setOtherMembers(
        data?.members?.filter((member) => member._id !== currentUser.id)
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getChat();
    }
  }, [currentUser]);

  const sendText = async (e) => {
    e.preventDefault();
    try {
      if (text !== "") {
        const res = await fetch("/api/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
            chatId,
            currentUserId: currentUser.id,
          }),
        });

        if (res.ok) {
          setText("");
          setShowPicker(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEmojiClick = (e) => {
    const emoji = e.native;
    setText((prevText) => prevText + emoji);
  };

  const sendPhoto = async (result) => {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          photo: result?.info?.secure_url,
          currentUserId: currentUser.id,
          chatId,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    pusherClient.subscribe(chatId);

    const handleMessage = async (newMessage) => {
      setChat((prevChat) => {
        return {
          ...prevChat,
          messages: [...prevChat.messages, newMessage.newMessage],
        };
      });
    };

    pusherClient.bind("new-message", handleMessage);

    return () => {
      pusherClient.unsubscribe(chatId);
      pusherClient.unbind("new-message", handleMessage);
    };
  }, [chatId]);
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat?.messages]);

  return loading ? (
    <Loader />
  ) : (
    <div className="max-h-[100vh] h-[100vh] md:max-h-[90vh] md:h-[90vh] flex flex-col">
      <div className="bg-gray-50 flex items-center gap-4 justify-between px-3 md:px-6 py-3 rounded-md ">
        {chat?.isGroup ? (
          <>
            <Link
              className="flex gap-x-3 items-center"
              href={`/chats/${chatId}/group-info`}
            >
              <img
                className="h-12 w-12 object-cover rounded-full cursor-pointer"
                src={chat?.groupPhoto || "/assets/group.jpg"}
                alt="group_photo"
              ></img>
              <p className="font-medium  max-md:text-sm">{chat?.name}</p>{" "}
            </Link>

            <div className="flex items-center">
              <p className="font-semibold">{chat?.members.length} </p>
              <span className="text-[12px] md:text-sm ml-1">Members</span>
            </div>
          </>
        ) : (
          <Link
            className="flex items-center gap-x-3"
            href={`/chats/${chatId}/chat-info`}
          >
            <img
              className="h-12 w-12 object-cover rounded-full cursor-pointer"
              src={otherMembers[0].profileImage || "/assets/person.jpg"}
              alt="profile_photo"
            ></img>
            <div className="flex gap-x-4 items-center">
              <p className="font-medium"> {otherMembers[0].username}</p>
            </div>
          </Link>
        )}
      </div>

      <div className="flex flex-1 flex-col overflow-y-scroll gap-5 py-5 bg-[#F1EDE6] ">
        {chat?.messages.map((message, index) => (
          <MessageBox
            key={index}
            message={message}
            currentUser={currentUser}
            isGroup={chat?.isGroup}
            members={chat?.members}
          ></MessageBox>
        ))}

        <div ref={bottomRef} />
      </div>
      {showPicker && (
        <div className="absolute bottom-16 ">
          <Picker
            style={{ height: "300px" }}
            data={data}
            onEmojiSelect={onEmojiClick}
          />
        </div>
      )}
      <div className="w-full py-3 pr-4 pl-3 rounded-md bg-gray-100">
        <div className="flex items-center gap-x-3 ">
          <div>
            <InsertEmoticonIcon
              onClick={() => setShowPicker((val) => !val)}
              sx={{
                fontSize: 30,
                cursor: "pointer",
                color: "#8B8B8B",
              }}
            ></InsertEmoticonIcon>
          </div>
          <CldUploadButton
            options={{ maxFiles: 1 }}
            uploadPreset="v3sbor11"
            onUpload={sendPhoto}
          >
            <AddPhotoAlternate
              sx={{
                fontSize: 30,
                color: "#8B8B8B",
                cursor: "pointer",
                "&:hover": { color: "#8CE069" },
              }}
            ></AddPhotoAlternate>
          </CldUploadButton>

          <form className="flex w-full gap-x-2" onSubmit={sendText}>
            <input
              type="text"
              className="w-full outline-none py-3 px-4 bg-white rounded-xl text-black"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a message"
              required
            ></input>
            <button type="submit">
              <SendIcon></SendIcon>
            </button>
          </form>

          {/* <img
            onClick={sendText}
            src="/assets/send.png"
            alt="send_button"
            className="w-11 h-11 rounded-full object-contain cursor-pointer hover:scale-105"
          ></img> */}
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
