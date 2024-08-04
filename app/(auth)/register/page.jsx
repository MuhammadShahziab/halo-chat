import AuthSideBar from "@app/components/AuthSideBar";
import Form from "@app/components/Form";

const RegisterPage = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 md: h-screen ">
      <AuthSideBar lable={"Register"} />
      <div className="md:col-span-2 col-span-3 ">
        <div className="flex justify-center h-full items-center ">
          <Form type="register"></Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
