import React from "react";
import moment from "moment";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const MessageBox = ({ message, currentUser, isGroup, members }) => {
  return message?.sender._id !== currentUser.id ? (
    <div className="gap-3 pl-4 flex items-start">
      {isGroup && (
        <img
          className="w-8 h-8 rounded-full object-cover"
          alt="profile photo"
          src={message?.sender?.profileImage || "/assets/person.jpg"}
        ></img>
      )}
      <div className=" w-[40%] md:w-[80%]">
        {message.text ? (
          <div className="bg-white  px-2 pt-1  relative rounded-lg w-fit break-words">
            {isGroup && (
              <p className="text-[12px] font-semibold">
                {message.sender.username}
              </p>
            )}
            <p className="text-sm min-w-20">{message?.text}</p>
            <p className="text-[11px] font-medium w-full pb-1 text-end ">
              {" "}
              {moment(message.createdAt).format("LT")}
            </p>
          </div>
        ) : (
          <div className="bg-white relative p-1 rounded-lg w-48 h-[250px] md:w-56 md:h-[300px]">
            <img
              className="w-full h-full rounded-lg object-cover"
              alt="photo"
              src={message?.photo}
            ></img>
            <p className="text-[12px] absolute font-medium text-white right-2 bottom-1">
              {moment(message.createdAt).format("LT")}
            </p>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex justify-end pr-4 ">
      <div className=" w-[80%] flex justify-end ">
        {message.text ? (
          <div className="bg-[#D9FDD3]  px-2 pt-2 relative rounded-lg w-fit break-words">
            <p className="text-sm min-w-20">{message?.text}</p>
            <p className="text-[11px] font-medium w-full flex gap-x-2 justify-end pb-1 text-end ">
              {" "}
              {moment(message.createdAt).format("LT")}
              {message.seenBy.length === members.length ? (
                <DoneAllIcon sx={{ fontSize: 17, color: "blue" }}></DoneAllIcon>
              ) : (
                <DoneAllIcon
                  sx={{ fontSize: 17, color: "#8B8B8B" }}
                ></DoneAllIcon>
              )}
            </p>
          </div>
        ) : (
          <div className="bg-white relative p-1 rounded-lg w-48 h-[250px] md:w-56 md:h-[300px]">
            <img
              className="w-full h-full rounded-lg object-cover"
              alt="photo"
              src={message?.photo}
            ></img>
            <p className="text-[12px] absolute font-medium text-white right-2 bottom-1">
              {moment(message.createdAt).format("LT")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
