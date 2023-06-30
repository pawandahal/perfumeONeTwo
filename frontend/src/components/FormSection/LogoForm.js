import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../NavbarSection/Navbar";
import { Card } from "@mui/material";

const LogoForm = () => {

  //adding the logo section
  const addLogo = async (formData) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}addPerfume`,
        formData
      );
      toast.success("Add values");
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <div className="xl:h-[120px] hidden xl:block xl:w-full">
        <div className=" bg-gradient-to-r from-[#F49AAF]  to-[#A3FCFC] bg-cover bg-no-repeat h-[40px] w-full ">
          <Navbar />
        </div>
      </div>

      {/* Main container */}
      <Formik
        initialValues={{
          logoName: "",
          image: "",
        }}
        onSubmit={(values) => {
          let formData = new FormData();
          formData.append("logoName", values.logoName);
          formData.append("image", values.image);
          addLogo(formData);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="w-full flex justify-center">
            <Card className="w-[40vw] h-[30vh] grid grid-cols-1 gap-3">
              <div className="w-[20vw] flex flex-col gap-2 relative left-[50px] ">
                <label className="font-poppins text-sm tracking-wide">
                  Product Name
                </label>
                <Field
                  required
                  name="logoName"
                  placeholder="Enter Product Name"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>

              <div className="w-[20vw] flex flex-col gap-2  relative left-[50px]">
                <label className="font-poppins text-sm tracking-wide">
                  Image
                </label>
                <Field
                  required
                  name="image"
                  type="file"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                  onChange={(e) => {
                    setFieldValue("image", e.target.files[0]);
                  }}
                  value={undefined}
                />
              </div>
              <div
                className="text-center justify-center relative left-[50px]
            flex items-center bg-red-500 w-[6vw] h-[40px] rounded-md"
              >
                <Field
                  className=" "
                  type="submit"
                  id="outlined-required"
                  value="Submit"
                />
              </div>
            </Card>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default LogoForm;
