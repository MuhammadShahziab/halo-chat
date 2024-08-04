"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Loader from "@app/components/Loader";
import { useSession } from "next-auth/react";

import ChatImages from "@app/components/ChatImages";
import TopBar from "@app/components/TopBar";
const ChatInfoPage = () => {
  const [loading, setLoading] = useState(true);
  const [otherMembers, setOtherMembers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { chatId } = useParams();

  const { data: session } = useSession();
  const currentUser = session?.user;

  const photosContainerRef = useRef();

  const getChat = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`);
      const data = await res.json();

      setOtherMembers(
        data?.members?.filter((member) => member._id !== currentUser.id)
      );
      const photosArray = [];
      data?.messages.forEach((message) => {
        if (message.photo && message.photo !== "") {
          photosArray.push(message.photo);
        }
      });
      setPhotos(photosArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getChat();
    }
  }, [currentUser]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <TopBar></TopBar>
      <div className="md:max-w-3xl mx-auto flex flex-col w-full h-full pt-12 ">
        <div className="flex justify-between md:flex-row flex-col    w-full  py-4  ">
          <div className="flex-1 ">
            <form className="flex justify-center  h-full items-center">
              <div className="relative ">
                <img
                  src={otherMembers[0]?.profileImage || "/assets/person.jpg"}
                  className="md:w-52 md:h-52  w-28 h-28 rounded-full object-cover cursor-pointer"
                ></img>
              </div>
            </form>
          </div>
          <div className="flex-1 max-lg:mt-11 ">
            <form className="flex justify-center  h-full flex-col gap-y-3  rounded-md items-center ">
              <div>
                <div className="input">
                  <input
                    placeholder="username"
                    className="input_field"
                    value={otherMembers[0]?.username}
                    disabled={true}
                    type="text"
                  ></input>
                  <PersonOutlineIcon
                    sx={{ fontSize: 25, color: "#D3D3D3" }}
                  ></PersonOutlineIcon>{" "}
                </div>
              </div>

              <div className="input">
                <input
                  className="input_field"
                  placeholder="About"
                  value={otherMembers[0]?.about}
                  disabled={true}
                  type="text"
                ></input>
                <InfoOutlinedIcon
                  sx={{ fontSize: 25, color: "#D3D3D3" }}
                ></InfoOutlinedIcon>{" "}
              </div>
              <div className="input">
                <input
                  className="input_field"
                  placeholder="phone"
                  type="text"
                  disabled={true}
                  value={otherMembers[0]?.phone}
                ></input>
                <PhoneEnabledOutlinedIcon
                  sx={{ fontSize: 25, color: "#D3D3D3" }}
                ></PhoneEnabledOutlinedIcon>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>

      <ChatImages photos={photos}></ChatImages>
    </div>
  );
};

export default ChatInfoPage;
