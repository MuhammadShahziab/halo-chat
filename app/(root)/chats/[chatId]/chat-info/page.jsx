"use client";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Loader from "@app/components/Loader";
import { useSession } from "next-auth/react";
import { NavigateNext } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChatImages from "@app/components/ChatImages";
import TopBar from "@app/components/TopBar";
const ChatInfoPage = () => {
  const [loading, setLoading] = useState(true);
  const [chat, setChat] = useState({});
  const [otherMembers, setOtherMembers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { chatId } = useParams();
  const { data: session } = useSession();
  const currentUser = session?.user;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const photosContainerRef = useRef();

  const getChat = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`);
      const data = await res.json();
      setChat(data);
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
      setLoading(false);
    }
  };

  const handlePhoto = () => {
    setSelectedPhoto(null);
    console.log("check phot11");
  };

  useEffect(() => {
    if (currentUser) {
      getChat();
    }
  }, [currentUser]);
  const scrollPhotos = (direction) => {
    const scrollAmount = direction === "left" ? -150 : 150;
    photosContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const showNextPhoto = () => {
    if (selectedPhotoIndex < photos.length - 1) {
      setSelectedPhotoIndex((prevIndex) => prevIndex + 1);
    }
  };
  const showPreviousPhoto = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex((prevIndex) => prevIndex - 1);
    }
  };

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
