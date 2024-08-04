import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";

const AuthSideBar = ({ lable }) => {
  return (
    <div className=" hidden md:block  bg-green-400  rounded-tr-xl shadow-xl rounded-br-xl">
      <div className="px-6 mt-11 flex flex-col gap-y-4">
        <div className="w-full text-center">
          <WhatsAppIcon sx={{ fontSize: 130, color: "white" }}></WhatsAppIcon>
          <h1 className="text-white font-bold">Halo Chat</h1>
        </div>
        <h1 className="text-white text-4xl text-center font-semibold">
          {lable}
        </h1>
        <h2 className="text-3xl leading-9 text-white  text-center">
          Share Your Smile with <br></br> this World and your Friends
        </h2>
        <div className="flex flex-col items-center mt-3 gap-y-3">
          <img src="/assets/hot_tea.svg" className="w-20 " alt="tea"></img>
          <h1 className="text-white font-semibold mr-3">Enjoy</h1>
        </div>
      </div>
    </div>
  );
};

export default AuthSideBar;
