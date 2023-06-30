import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card } from "@mui/material";

const Contact = () => {
  const addContact = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/contact",
        formData
      );
      toast.success("Thank you for information");
      setTimeout(() => {
        window.location.reload(true);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Main container */}
      <Formik
        initialValues={{
          email: "",
          address: "",
          messages: "",
        }}
        onSubmit={(values) => {
          let formData = new FormData();
          formData.append("email", values.email);
          formData.append("address", values.address);
          formData.append("messages", values.messages);

          addContact(formData);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="w-full flex justify-center  ">
            <Card className="grid  grid-cols-1 gap-4 h-[400px] p-2">
              <div className="w-full flex flex-col gap-2 ">
                <label className="font-poppins text-sm tracking-wide font-semibold">
                  Email
                </label>
                <Field
                  required
                  name="email"
                  placeholder="Enter your Email"
                  className="border-[1px] p-2 rounded w-[30vw] font-poppins text-sm tracking-wide"
                />
              </div>

              <div className="w-full flex flex-col gap-2 ">
                <label className="font-poppins text-sm tracking-wide font-semibold">
                  Address
                </label>
                <Field
                  required
                  name="address"
                  placeholder="Enter the address"
                  className="border-[1px] p-2 rounded w-[30vw] font-poppins text-sm tracking-wide"
                />
              </div>

              <div className="w-full flex flex-col gap-2 ">
                <label className="font-poppins text-sm tracking-wide font-semibold">
                  message
                </label>
                <Field
                  required
                  name="messages"
                  placeholder="Enter the message"
                  className="border-[1px] p-2 rounded w-[30vw] font-poppins text-sm tracking-wide h-[80px]"
                />
              </div>

              <div
                className="text-center justify-center
            flex items-center bg-red-500 w-[10vw] h-[40px]"
              >
                <Field
                  className="rounded-md "
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

export default Contact;
