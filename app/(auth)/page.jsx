import Form from "@app/components/Form";
import React from "react";
import AuthSideBar from "@app/components/AuthSideBar";

const LoginPage = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 md: h-screen ">
      <AuthSideBar lable={"Login"} />
      <div className="md:col-span-2 col-span-3 ">
        <Form type="login"></Form>
      </div>
    </div>
  );
};

export default LoginPage;
