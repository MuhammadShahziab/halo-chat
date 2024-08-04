import React from "react";
import moment from "moment";
import { useRouter } from "next/navigation";

const ChatBox = ({ chat, index, currentUser, currentChatId }) => {
  const otherMembers = chat?.members.filter(
    (member) => member._id !== currentUser.id
  );

  const router = useRouter();
  const lastMessage =
    chat?.messages.length > 0 && chat?.messages[chat.messages.length - 1];

  const seen = lastMessage?.seenBy?.find(
    (member) => member._id === currentUser.id
  );

  return (
    <div
      onClick={() => router.push(`/chats/${chat._id}`)}
      className={`${
        chat?._id === currentChatId ? "bg-green-100" : ""
      }  md:px-4 gap-x-3  py-3 hover:bg-green-100 rounded cursor-pointer flex items-start justify-between `}
    >
      <div className="flex gap-x-4 items-center w-full">
        {chat?.isGroup ? (
          <img
            className="chat_profile"
            src={chat?.groupPhoto || "/assets/group.jpg"}
            alt="group_image"
          ></img>
        ) : (
          <img
            src={otherMembers[0].profileImage || "/assets/person.jpg"}
            className="chat_profile"
            alt="ProfileImage"
          ></img>
        )}
        <div className="flex flex-col  w-full ">
          <div className="flex justify-between items-center  w-full">
            {chat?.isGroup ? (
              <p>{chat?.name}</p>
            ) : (
              <p>{otherMembers[0].username}</p>
            )}
            {!lastMessage ? (
              <p className="text-sm ">{moment(chat.createdAt).format("LT")}</p>
            ) : (
              <p className="text-sm  ">
                {moment(chat.lastMessageAt).format("LT")}
              </p>
            )}
          </div>

          <div>
            {!lastMessage && (
              <p className="font-semibold text-sm">Started a chat</p>
            )}
          </div>

          {lastMessage.photo ? (
            lastMessage?.sender._id === currentUser.id ? (
              <p
                className={` ${
                  seen ? "text-[#8B8B8B] text-sm" : "font-medium text-sm"
                } `}
              >
                you sent a photo
              </p>
            ) : (
              <p
                className={` ${
                  seen ? "text-[#8B8B8B] text-sm" : "font-medium text-sm"
                } `}
              >
                Recevied a photo
              </p>
            )
          ) : (
            <p
              className={`  w-[120px] sm:w-[180px] truncate ${
                seen ? "text-[#8B8B8B] text-sm" : "font-semibold text-sm"
              }`}
            >
              {lastMessage?.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
