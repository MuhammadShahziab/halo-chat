"use client";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CldUploadButton } from "next-cloudinary";
import { useSession } from "next-auth/react";
import Loader from "@app/components/Loader";
import toast from "react-hot-toast";
import BottomBar from "@app/components/BottomBar";
import TopBar from "@app/components/TopBar";

const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const { data: session } = useSession();
  const user = session?.user;

  useEffect(() => {
    if (user) {
      reset({
        username: user?.username,
        profileImage: user?.profileImage,
        phone: user?.phone,
        about: user?.about,
      });

      setPageLoading(false);
    }
  }, [user]);

  const updateProfile = async (data) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users/${user?.id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Profile Updated");
      }
      if (res.error) {
        toast.error("Failed");
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const uplaodPhoto = async (result) => {
    setValue("profileImage", result?.info?.secure_url);
  };

  return pageLoading ? (
    <Loader></Loader>
  ) : (
    <>
      <TopBar />
      <div className="md:max-w-3xl  mx-auto flex flex-col w-full h-full  py-12">
        <div className="md:flex items-center gap-x-2  text-slate-500 pl-6 hidden">
          <Link href="/chats" className=" ">
            Home
          </Link>
          /
          <Link href="/profile" className="text-green-400">
            Profile
          </Link>
        </div>

        <div className="flex justify-between md:flex-row flex-col    w-full  lg:mt-11 py-4  ">
          <div className="flex-1 ">
            <form className="flex justify-center  h-full items-center">
              <div className="relative ">
                <img
                  src={
                    watch("profileImage") ||
                    user?.profileImage ||
                    "/assets/person.jpg"
                  }
                  className="md:w-40 md:h-40  w-28 h-28 rounded-full object-cover cursor-pointer"
                ></img>

                <CldUploadButton
                  options={{ maxFiles: 1 }}
                  uploadPreset="v3sbor11"
                  onUpload={uplaodPhoto}
                >
                  <span className="absolute -bottom-2 cursor-pointer md:bottom-0 right-1 w-11 h-11  md:w-14 md:h-14 rounded-full bg-green-500 flex justify-center items-center">
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
              onSubmit={handleSubmit(updateProfile)}
            >
              <div>
                <div className="input">
                  <input
                    {...register("username", {
                      required: "Username is required",
                      validate: (value) => {
                        if (value.length < 3) {
                          return "Username must be atleast 3 characters";
                        }
                      },
                    })}
                    placeholder="username"
                    className="input_field"
                    type="text"
                  ></input>
                  <PersonOutlineIcon
                    sx={{ fontSize: 25, color: "#D3D3D3" }}
                  ></PersonOutlineIcon>{" "}
                </div>
                {errors.username && (
                  <p
                    className="text-red-500 ml-4 text-sm mt-1
                "
                  >
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="input">
                <input
                  {...register("about")}
                  className="input_field"
                  placeholder="About"
                  type="text"
                ></input>
                <InfoOutlinedIcon
                  sx={{ fontSize: 25, color: "#D3D3D3" }}
                ></InfoOutlinedIcon>{" "}
              </div>
              <div className="input">
                <input
                  {...register("phone")}
                  className="input_field"
                  placeholder="Phone"
                  type="number"
                ></input>
                <PhoneEnabledOutlinedIcon
                  sx={{ fontSize: 25, color: "#D3D3D3" }}
                ></PhoneEnabledOutlinedIcon>{" "}
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
      <BottomBar />
    </>
  );
};

export default ProfilePage;
