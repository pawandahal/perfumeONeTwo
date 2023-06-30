import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import boys from "../../assests/boys.png";
import girls from "../../assests/girls.png";
import per from "../../assests/per.png";
import BestSeller from "./BestSeller";
import Contact from "../ContactSection/Contact";
import { Link } from "react-router-dom";
import useFetch from "../../customHook/useFetch";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
const BrandLogo = () => {
  //use custom
  const { logo, perfume, loading, error } = useFetch(
    `${process.env.REACT_APP_BASE_URL}logos`,
    `${process.env.REACT_APP_BASE_URL}perfumes`
  );
  

  if (loading) return <h1>Loading .....</h1>;
  if (error) console.log(error);

  return (
    <div>
    {/* Brands Type */}
    <div className='flex items-center justify-between '>
    <p className="font-semibold text-lg leading-7">Top Fragrance Brands</p>
    <Link
      to="/logo"
      className=" relative  font-semibold text-sm bg-red-500 h-[40px] w-[100px] justify-center rounded-md text-center items-center flex"
    >
      Add Logo
    </Link>
    </div>
     
      <div className="flex gap-4 relative  top-[10px]">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-[65vw] h-[30vh] "
    >
        {logo &&
          logo.logos &&
          logo.logos.map((logoNames, index) => (
            <div key={index._id} className="">
            <SwiperSlide className='gap-4 '>
            <Card className=''>
            <img
              src={logoNames.image}
              alt="logoName.logoName"
              className="aspect-square  rounded-md  object-fill max-h-[220px]  clear-both"
            />
          
          </Card>
            </SwiperSlide>
             
            </div>
          ))}
          </Swiper>
      </div>
      <div>
        <div></div>
      </div>
      {/* man and woman */}
      <div className='relative '>
        <Link
          to="/add"
          className="float-right font-semibold text-sm bg-red-500 h-[40px] w-[100px] justify-center rounded-md text-center items-center flex text-white"
        >
          Add Items
        </Link>
      </div>
      <div className="relative top-[20px] h-[550px]">
        <p className="font-semibold text-lg leading-7">Man and Woman</p>
        <div className="flex justify-center relative top-[40px] gap-4 max-h-[200px]">
          <Link to="/man">
            <img
              src={boys}
              alt="boys"
              className="max-h-[400px] hover:scale-105 transition-transform duration-300"
            />
            <img
              src={per}
              alt="per"
              className="flex justify-center relative -top-[320px] left-[200px] hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <Link to="/woman">
            <img
              src={girls}
              alt="girls"
              className="max-h-[400px] hover:scale-105 transition-transform duration-300"
            />
            <img
              src={per}
              alt="per"
              className="flex justify-center relative -top-[320px] left-[20px] hover:scale-105 transition-transform duration-300"
            />
            <p></p>
          </Link>
        </div>
      </div>

      {/*Best Sellers */}
      <div className="relative top-[20px] ">
        <p className="font-semibold text-lg leading-7">OUR BEST SELLER</p>
        <BestSeller />
      </div>

      {/* Perfume Category */}
      <div className="h-[100px] relative -top-[280px]">
        <p className="font-semibold text-lg">Perfume Category </p>

        <div className="w-full">
          <>
            <div className="w-[90vw] grid grid-cols-7">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="w-[90vw] "
              >
                {perfume &&
                  perfume.perfumes &&
                  perfume.perfumes.map((categorySection, index) => (
                    <Link
                      // to={`/category/${categorySection._id}`}
                      // className=""
                      key={index._id}
                    >
                      <SwiperSlide>
                        <button className="bg-red-500 h-[40px] w-[150px] rounded-md font-normal text-base text-white">
                          <p key={index._id}>{categorySection.perfumeCategory}</p>
                        </button>
                      </SwiperSlide>
                    </Link>
                  ))}
              </Swiper>
            </div>
          </>
        </div>
      </div>

      {/* Perfume Types */}
      <div className="relative -top-[290px]">
        <p className="font-semibold text-lg">Perfume Types </p>

        <div className="w-full">
          <div className="w-[90vw] grid grid-cols-7">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={5}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="w-[90vw] "
            >
              {perfume &&
                perfume.perfumes &&
                perfume.perfumes.map((categorySection, index) => (
                  <div className="" key={index._id}>
                    <SwiperSlide>
                      <button className="bg-red-500 h-[40px] w-[150px] rounded-md font-normal text-base text-white">
                        <p key={index._id}>{categorySection.perfumeType}</p>
                      </button>
                    </SwiperSlide>
                  </div>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="relative -top-[250px]">
        <p className="font-semibold text-lg text-center">Contact</p>
        <Contact />
      </div>
    </div>
  );
};

export default BrandLogo;
