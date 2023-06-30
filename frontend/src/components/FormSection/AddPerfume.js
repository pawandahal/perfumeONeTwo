import React from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../NavbarSection/Navbar";

const AddPerfume = () => {
  const addPerfume = async (formData) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}addPerfume`,
        formData
      );
      toast.success("Add values");
      setTimeout(() => {
        window.location.href = '/home';
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
          productName: "",
          perfumeType: "",
          discountPrice: "",
          discountPercent: "",
          ratings: "",
          perfumeCategory: "",
          brandName: "",
          image: "",
          gender: "",
          price: "",
        }}
        onSubmit={(values) => {
          let formData = new FormData();
          formData.append("productName", values.productName);
          formData.append("perfumeType", values.perfumeType);
          formData.append("discountPrice", values.discountPrice);
          formData.append("discountPercent", values.discountPercent);
          formData.append("ratings", values.ratings);
          formData.append("perfumeCategory", values.perfumeCategory);
          formData.append("brandName", values.brandName);
          formData.append("image", values.image);
          formData.append("gender", values.gender);
          formData.append("price", values.price);
          addPerfume(formData);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="w-full flex justify-center">
            <div className="w-[80vw] grid grid-cols-2 gap-3">
              <div className="w-full flex flex-col gap-2 ">
                <label className="font-poppins text-sm tracking-wide">
                  Product Name
                </label>
                <Field
                  required
                  name="productName"
                  placeholder="Enter Product Name"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Perfume Type
                </label>
                <Field
                  required
                  name="perfumeType"
                  type="text"
                  placeholder="Enter Perfume Type"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Discount Price
                </label>
                <Field
                  required
                  name="discountPrice"
                  type="text"
                  placeholder="Enter discount Price"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Discount Percent
                </label>
                <Field
                  required
                  name="discountPercent"
                  placeholder="Enter Discount Percentage"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Rating
                </label>
                <Field
                  required
                  name="ratings"
                  placeholder="Enter Rating"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Perfume Category
                </label>
                <Field
                  required
                  name="perfumeCategory"
                  placeholder="Enter Perfume Category"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Brand Name
                </label>
                <Field
                  required
                  name="brandName"
                  placeholder="Enter Brand Name"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Gender
                </label>
                <Field
                  required
                  name="gender"
                  id="outlined-select-education"
                  as="select"
                  placeholder="Enter Gender"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                >
                <option value="man">man</option>
                <option value="woman">woman</option>
             
                </Field>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-poppins text-sm tracking-wide">
                  Price
                </label>
                <Field
                  required
                  name="price"
                  placeholder="Enter total Price"
                  className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
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
                className="text-center justify-center
            flex items-center bg-red-500 w-[10vw] h-[50px]"
              >
                <Field
                  className=" "
                  type="submit"
                  id="outlined-required"
                  value="Add Items"
                />
              </div>
            </div>
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

export default AddPerfume;
