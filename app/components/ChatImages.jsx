"use client";
import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavigateNext } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const ChatImages = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const photosContainerRef = useRef();
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

  return (
    <>
      {selectedPhotoIndex !== null && (
        <div className="flex justify-center items-center w-full overflow-hidden h-full mb-4 absolute top-0 left-0 right-0 bg-black">
          <div className="  flex justify-center relative">
            <img
              className="w-auto max-h-screen object-contain "
              src={photos[selectedPhotoIndex]}
              alt="Selected"
            />
          </div>
          <button
            className="absolute top-4 right-4"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <CloseIcon sx={{ fontSize: 30, color: "white" }} />
          </button>{" "}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={showPreviousPhoto}
          >
            <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={showNextPhoto}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 40, color: "white" }} />
          </button>
        </div>
      )}
      <div className="flex flex-col justify-center md:px-20  max-md:pl-6 max-md:pr-3 py-8 relative">
        <p className="mb-2 text-slate-500">
          Media, links & docs ({photos?.length})
        </p>
        {photos.length > 0 ? (
          <div
            ref={photosContainerRef}
            className=" flex items-center gap-x-2 max-md:mt-3 pr-20 w-full  pb-4 overflow-x-scroll scrollbar-hide   "
          >
            <span
              className="bg-gray-200 absolute left-8 rounded-full max-md:hidden flex "
              onClick={() => scrollPhotos("left")}
            >
              <ChevronLeftIcon
                sx={{ fontSize: 30, cursor: "pointer" }}
              ></ChevronLeftIcon>
            </span>
            {photos?.map((photo, index) => (
              <div className="md:min-w-32 md:min-h-32 min-w-16 min-h-16 cursor-pointer">
                <img
                  onClick={() => setSelectedPhotoIndex(index)}
                  key={index}
                  className="md:w-32 md:h-32 w-16 h-16 rounded-md object-cover"
                  src={photo}
                  alt="photos"
                ></img>
              </div>
            ))}
            <span
              className="bg-gray-200 absolute right-8 max-md:hidden flex rounded-full ml-3"
              onClick={() => scrollPhotos("right")}
            >
              <NavigateNext
                sx={{ fontSize: 30, cursor: "pointer" }}
              ></NavigateNext>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ChatImages;
