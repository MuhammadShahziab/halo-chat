"use client";
import { Lock, LockOutlined } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { signIn } from "next-auth/react";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      if (type === "register") {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          router.push("/");
        } else {
          const errorData = await res.text();
          console.log(res, "check res");

          toast.error(errorData);
        }
      }

      if (type === "login") {
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });
        console.log(res, "cehck res");
        if (res.ok) {
          router.push("/chats");
        } else {
          toast.error(res?.error);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="  h-full flex-col flex   items-start md:items-center md:justify-center  px-6 md:px-0  ">
      <div className="md:w-2/5 mt-20 md:mt-0">
        <div className="flex md:hidden justify-center gap-x-1 items-center mb-6">
          <WhatsApp sx={{ fontSize: 80, color: "#4ADE80" }}></WhatsApp>
          <h1 className="text-green-400  text-lg font-bold">Halo Chat</h1>
        </div>
        <form
          className="flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {type === "register" && (
            <div>
              <div className="input">
                <input
                  defaultValue=""
                  {...register("username", {
                    required: "username is required",
                  })}
                  type="text"
                  placeholder="User Name"
                  className="input_field"
                ></input>
                <PersonOutlineIcon
                  sx={{ fontSize: 30, color: "#D3D3D3" }}
                ></PersonOutlineIcon>
              </div>
              {errors.username && (
                <p className="text-red-400 text-sm ml-4 pt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
          )}
          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Shahzaib@gmail.com"
                className="input_field"
              ></input>
              <MailOutlineIcon
                sx={{ fontSize: 30, color: "#D3D3D3" }}
              ></MailOutlineIcon>
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm ml-4 pt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("password", {
                  required: "Password is reqired",
                  validate: (value) => {
                    if (value.length < 5) {
                      return "Password must at atleast 5 characters";
                    }
                  },
                })}
                type="password"
                placeholder="Password"
                className="input_field"
              ></input>
              <LockOutlined
                sx={{ fontSize: 30, color: "#D3D3D3" }}
              ></LockOutlined>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm ml-4 pt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mt-2">
            <button type="submit" className="btn">
              {type === "register" ? "Join Free" : "Let's Chat"}{" "}
              {loading && <ClipLoader size={20} color="#ffff" />}
            </button>
          </div>
        </form>

        {type === "register" ? (
          <Link href="/" className="w-auto">
            <p className=" text-center text-sm mt-3 px-3">
              Already Have an account?{" "}
              <span className="text-blue-500 ">Sign in</span>
            </p>
          </Link>
        ) : (
          <Link href="/register" className="w-auto">
            <p className=" text-center px-3 text-sm mt-3">
              Don't have an account?{" "}
              <span className="text-blue-500 ">Register Here</span>
            </p>
          </Link>
        )}
      </div>
      <p className="w-full text-center mt-60 md:hidden flex justify-center  font-medium text-[12px] text-gray-400/90">
        Developed by Shahzaib
      </p>
    </div>
  );
};

export default Form;
