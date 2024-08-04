import BottomBar from "@app/components/BottomBar";
import ChatList from "@app/components/ChatList";
import Contacts from "@app/components/Contacts";
import TopBar from "@app/components/TopBar";
import React from "react";

const ChatsPage = () => {
  return (
    <>
      <TopBar />
      <div className="flex justify-between h-full  overflow-y-scroll   max-lg:gap-8">
        <div className="w-full md:w-1/2 lg:w-1/3  ">
          <ChatList></ChatList>
        </div>
        <div className=" max-md:hidden md:w-1/2 lg:w-2/3">
          <Contacts></Contacts>
        </div>
      </div>

      <BottomBar />
    </>
  );
};

export default ChatsPage;
