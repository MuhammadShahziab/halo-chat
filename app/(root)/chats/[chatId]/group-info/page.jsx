"use client";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Loader from "@app/components/Loader";
import toast from "react-hot-toast";
import GroupsIcon from "@mui/icons-material/Groups";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ChatImages from "@app/components/ChatImages";
import TopBar from "@app/components/TopBar";
const GroupInfoPage = () => {
  const [chat, setChat] = useState({});
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { chatId } = useParams();
  const router = useRouter();

  const getChatDetail = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`);
      const data = await res.json();
      setChat(data);
      const photosArray = [];
      data?.messages.forEach((chat) => {
        if (chat.photo && chat.photo !== "") {
          photosArray.push(chat.photo);
        }
      });
      setPhotos(photosArray);
      setPageLoading(false);
      reset({
        groupname: data?.name,
        groupPhoto: data?.groupPhoto,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (chatId) {
      getChatDetail();
    }
  }, [chatId]);

  const updateGroupInfo = async (data) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/chats/${chatId}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push(`/chats/${chatId}`);
      }
      if (res.error) {
        toast.error("Failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadGroupPhoto = async (result) => {
    setValue("groupPhoto", result?.info?.secure_url);
  };

  return pageLoading ? (
    <Loader></Loader>
  ) : (
    <div>
      <TopBar />
      <div className="md:max-w-3xl  mx-auto flex flex-col w-full h-full  px-5 py-4">
        <div className="flex justify-between md:flex-row flex-col    w-full  lg:mt-11 py-4  ">
          <div className="flex-1 ">
            <form className="flex justify-center  h-full items-center">
              <div className="relative ">
                <img
                  src={watch("groupPhoto") || "/assets/person.jpg"}
                  className="md:w-40 md:h-40  w-28 h-28 rounded-full object-cover cursor-pointer"
                ></img>

                <CldUploadButton
                  options={{ maxFiles: 1 }}
                  uploadPreset="v3sbor11"
                  onUpload={uploadGroupPhoto}
                >
                  <span className="absolute -bottom-2 cursor-pointer md:bottom-0 right-1 w-11 h-11  md:w-14 md:h-14 rounded-full bg-green-400 flex justify-center items-center">
                    {" "}
                    <AddAPhotoOutlinedIcon
                      sx={{ color: "white" }}
                    ></AddAPhotoOutlinedIcon>
                  </span>
                </CldUploadButton>
              </div>
            </form>
          </div>
          <div className="flex-1 max-lg:mt-11 ">
            <form
              className="flex justify-center  flex-col gap-y-3  rounded-md items-center "
              onSubmit={handleSubmit(updateGroupInfo)}
            >
              <div className=" w-full">
                <div className="input">
                  <input
                    {...register("groupname", {
                      required: "Group Name is Required",
                    })}
                    className="input_field"
                    placeholder="Group Name"
                    type="text"
                  ></input>
                  <GroupsIcon
                    sx={{ fontSize: 30, color: "#D3D3D3" }}
                  ></GroupsIcon>{" "}
                </div>
                {errors.groupname && (
                  <p className="text-red-500 ml-4 text-sm mt-1">
                    {errors.groupname.message}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap items-center  gap-2 px-4 mt-4">
                {chat?.members?.map((member, index) => (
                  <p
                    key={index}
                    className="py-2 px-4  text-center max-lg:min-w-32 bg-sky-100 text-sky-500 font-medium rounded-md"
                  >
                    {member?.username}
                  </p>
                ))}
              </div>
              <div className="px-16  mt-6 md:mt-4 md:w-full ">
                <button className="btn" type="submit">
                  Save Changes{" "}
                  {loading && <ClipLoader size={20} color="#ffff" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ChatImages photos={photos} />
    </div>
  );
};

export default GroupInfoPage;
