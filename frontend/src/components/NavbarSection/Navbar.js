import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiFillShopping } from "react-icons/ai";
import SearchField from "../Search/searchField";
const Navbar = () => {
  return (
    <>
      {/*  Navbar section */}
      <div className="w-full h-[100px] hidden xl:block font-Quicksand text-base  ">
        <div className=" w-full ">
          <div className="shadow h-[50px]  items-center flex justify-center gap-10 relative top-[40px]   ">
            <ul className="flex gap-10 font-Poppins ">

            {/* Navbar Section items */}
              <div className="flex  gap-20  font-semibold text-lg  leading-7">
                <NavLink to="/home">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/brands">
                  <li>Brand</li>
                </NavLink>
                <NavLink to="/man">
                  <li>Man</li>
                </NavLink>
                <NavLink to="/woman">
                  <li>Woman</li>
                </NavLink>
                <NavLink to="/admin/message">
                <li>Admin-contact-Message</li>
              </NavLink>
                <div className=" ">
                  <SearchField />
                </div>
                <NavLink to="/sign">
                  <li className="bg-[#FB8DA6]  rounded h-[35px] items-center  w-[80px] relative  flex justify-center ">
                    Sign in
                  </li>
                </NavLink>

                <NavLink to="/addCartSection">
                  <li className="bg-[#FB8DA6]  rounded-full  h-[35px] items-center  w-[35px] relative  flex justify-center ">
                    <button>
                      <AiFillShopping />
                    </button>
                  </li>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
