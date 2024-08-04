import React from "react";
import { ClipLoader, MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-[90vh] max-h-[90vh]  flex justify-center items-center">
      <MoonLoader size={50} color="#22C55E"></MoonLoader>
    </div>
  );
};

export default Loader;
