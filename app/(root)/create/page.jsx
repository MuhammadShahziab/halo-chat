import Contacts from "@app/components/Contacts";
import TopBar from "@app/components/TopBar";
import React from "react";

const CreateChatPage = () => {
  return (
    <>
      <div className=" hidden md:block w-full ">
        <TopBar></TopBar>
      </div>

      <div className="">
        <Contacts></Contacts>
      </div>
    </>
  );
};

export default CreateChatPage;
