"use client";
import ChatDetail from "@app/components/ChatDetail";
import ChatList from "@app/components/ChatList";
import TopBar from "@app/components/TopBar";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const ChatPage = () => {
  const { chatId } = useParams();
  const { data: session } = useSession();
  const currentUser = session?.user;

  const seenMessages = async () => {
    try {
      await fetch(`/api/chats/${chatId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentUserId: currentUser.id }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser && chatId) {
      seenMessages();
    }
  }, [chatId, currentUser]);

  return (
    <div className="max-h-screen min-h-screen">
      <div>
        <TopBar />
      </div>
      <div className="w-full h-full flex gap-5 ">
        <div className="max-md:hidden md:w-1/2 lg:w-1/3">
          <ChatList currentChatId={chatId}></ChatList>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3  h-full">
          <ChatDetail currentUser={currentUser} chatId={chatId}></ChatDetail>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
