"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ChatBox from "./ChatBox";
import { pusherClient } from "@lib/pusher";

const ChatList = ({ currentChatId }) => {
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [search, setSearch] = useState("");
  const { data: session } = useSession();

  const currentUser = session?.user;

  const getChats = async () => {
    try {
      const res = await fetch(
        search !== ""
          ? `/api/users/${currentUser.id}/searchChat/${search}`
          : `/api/users/${currentUser.id}`
      );
      const data = await res.json();
      setLoading(false);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getChats();
    }
  }, [currentUser, search]);

  useEffect(() => {
    if (currentUser) {
      pusherClient.subscribe(currentUser.id);

      const handleChatUpdate = (updatedChat) => {
        setChats((allChats) => {
          const newChats = allChats.map((chat) => {
            if (chat._id === updatedChat.id) {
              return {
                ...chat,
                messages: updatedChat.message,
                lastMessageAt: new Date(updatedChat.message[0].createdAt),
              };
            } else {
              return chat;
            }
          });

          // Move the updated chat to the top
          const updatedChatIndex = newChats.findIndex(
            (chat) => chat._id === updatedChat.id
          );
          if (updatedChatIndex > -1) {
            const [updatedChatObj] = newChats.splice(updatedChatIndex, 1);
            newChats.unshift(updatedChatObj);
          }

          return newChats;
        });
      };

      const handleNewMessage = (newMessage) => {
        setChats((allChats) => {
          const chatIndex = allChats.findIndex(
            (chat) => chat._id === newMessage.id
          );
          if (chatIndex !== -1) {
            const updatedChat = {
              ...allChats[chatIndex],
              messages: [
                ...allChats[chatIndex].messages,
                newMessage.newMessage,
              ],
              lastMessageAt: new Date(newMessage.newMessage.createdAt),
            };

            const newChats = [...allChats];
            newChats[chatIndex] = updatedChat;

            // Move the updated chat to the top
            const [updatedChatObj] = newChats.splice(chatIndex, 1);
            newChats.unshift(updatedChatObj);

            return newChats;
          }
          return allChats;
        });
      };

      const handleNewChat = (newChat) => {
        setChats((prevChat) => [newChat, ...prevChat]);
      };

      pusherClient.bind("new-message", handleNewMessage);
      pusherClient.bind("update-chat", handleChatUpdate);
      pusherClient.bind("new-chat", handleNewChat);

      return () => {
        pusherClient.unsubscribe(currentUser.id);
        pusherClient.unbind("new-message", handleNewMessage);
        pusherClient.unbind("update-chat", handleChatUpdate);
        pusherClient.unbind("new-chat", handleNewChat);
      };
    }
  }, [currentUser]);

  return loading ? (
    <Loader />
  ) : (
    <div className="max-h-[90vh] max-sm:h-[80vh] max-sm:min-h-[80vh] h-[90vh] flex flex-col md:gap-5 md:px-5  md:bg-slate-50">
      <div className="mt-2 md:mt-4 max-md:px-3">
        <input
          className="outline-none px-3 py-2 bg-[#F0F2F5] rounded-full w-full"
          placeholder="Search Chat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="max-md:mt-3 w-full flex flex-col md:bg-white md:pr-1 max-md:px-4 md:max-h-[76vh] md:h-[76vh] h-full md:overflow-y-scroll">
        {chats?.length > 0 ? (
          chats.map((chat, index) => (
            <ChatBox
              chat={chat}
              currentUser={currentUser}
              key={index}
              currentChatId={currentChatId}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-full w-full">
            <p className="font-semibold">Empty Chat</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
