"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { RadioButtonUnchecked } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Contacts = () => {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [name, setName] = useState("");
  const { data: session } = useSession();
  const currentUser = session?.user;
  const isGroup = selectedContacts.length > 1;

  const router = useRouter();
  const getContacts = async () => {
    try {
      const res = await fetch(
        search !== "" ? `/api/users/searchContact/${search} ` : "/api/users"
      );
      const data = await res.json();
      setContacts(data.filter((item) => item._id !== currentUser.id));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getContacts();
    }
  }, [currentUser, search]);

  const handleSelect = (contact) => {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts((prevContacts) =>
        prevContacts.filter((item) => item._id !== contact._id)
      );
    } else {
      setSelectedContacts((prevContacts) => [...prevContacts, contact]);
    }
  };

  const createChat = async () => {
    try {
      const res = await fetch("/api/chats", {
        method: "POST",
        body: JSON.stringify({
          currentUserId: currentUser.id,
          isGroup,
          name,
          members: selectedContacts.map((item) => item._id),
        }),
      });
      const chat = await res.json();
      console.log(res, "check chat res 11");
      if (res.ok) {
        router.push(`/chats/${chat._id}`);
      } else {
        toast.error(chat.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="flex flex-col gap-3 lg:gap-5 md:pr-5 lg:pr-10 md:pl-5  h-full max-sm:min-h-screen max-sm:h-screen  ">
      <div className="mt-4  max-md:px-3">
        <input
          className="border outline-none bg-[#F0F2F5] px-3 py-2 rounded-full w-full"
          placeholder="Search Contacts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-7   w-full relative">
        <div
          className={`${
            selectedContacts.length > 1
              ? "max-sm:max-h-[57vh]"
              : " max-sm:max-h-[79vh]"
          }  lg:min-h-[76vh]  lg:max-h-[300px]    flex flex-col lg:pt-3 lg:border rounded max-lg:w-full overflow-y-auto pr-1  w-full lg:w-1/2`}
        >
          <div className="flex  items-center justify-between">
            <p className="font-semibold px-4 py-2">Selected or Deselected</p>
            <div className="pr-4">
              <p className="text-slate-500">
                {selectedContacts.length > 0
                  ? selectedContacts.length
                  : contacts?.length}{" "}
                <span className="text-[12px]">Contacts</span>
              </p>
            </div>
          </div>
          {contacts?.map((contact, index) => (
            <div
              onClick={() => handleSelect(contact)}
              key={index}
              className={`${
                selectedContacts.find((item) => item === contact) &&
                "bg-green-100 "
              }  flex items-center  px-4 gap-x-3  py-2 hover:bg-green-100 rounded cursor-pointer`}
            >
              {selectedContacts.find((item) => item._id === contact._id) ? (
                <CheckCircleIcon
                  sx={{ fontSize: 20, cursor: "pointer", color: "#4ADE80" }}
                ></CheckCircleIcon>
              ) : (
                <RadioButtonUnchecked
                  sx={{ fontSize: 18, cursor: "pointer" }}
                />
              )}

              <img
                className="chat_profile"
                src={contact?.profileImage || "/assets/person.jpg"}
                alt="profile"
              />
              <p className="font-medium">{contact?.username}</p>
            </div>
          ))}
        </div>
        <div className=" lg:w-1/2  lg:h-full p-4 bg-gray-50 rounded-tl-lg rounded-tr-lg max-lg:fixed bottom-0 right-0 left-0">
          {isGroup && (
            <div className="lg:mb-6 mb-2">
              <div className="flex flex-col gap-y-2 lg:gap-y-3 mb-2 lg:mb-4">
                <p>Group Chat Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" outline-none border px-4 py-2 bg-transparent rounded-full"
                  placeholder="Group Name"
                ></input>
              </div>

              <div className="flex  flex-col gap-y-1.5 lg:gap-y-3">
                <p className="font-semibold">Members</p>
                <div className="flex lg:flex-wrap  max-lg:overflow-auto scrollbar-hide pb-3 gap-3">
                  {selectedContacts?.map((contact, index) => (
                    <p
                      key={index}
                      className="py-2 px-4  text-center max-lg:min-w-32 bg-sky-100 text-sky-500 font-medium rounded-md"
                    >
                      {contact?.username}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="w-full">
            <button className="btn w-full" onClick={createChat}>
              Create a Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
