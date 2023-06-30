import React from "react";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const MaleAndFemale = ({ manFemaleSection }) => {
  const { id } = useParams();

  return (
    <div>
      <div className="flex gap-4 relative top-[80px] justify-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="w-[90vw] h-[60vh]"
        >
          {manFemaleSection &&
            manFemaleSection.perfumes &&
            manFemaleSection.perfumes.map((maleFemale, index) => (
              <Link to={`/details/${maleFemale._id}`} key={index._id}>
                <div className="">
                  <SwiperSlide className="b">
                    <Card className="">
                      <div className="text-xl font-normal ">
                        <img
                          src={maleFemale.image}
                          alt="logoName.logoName"
                          className="aspect-square object-cover w-[20vw] rounded-md max-h-[210px] clear-both"
                        />
                        <p className="font-semibold relative left-[10px]">
                          {maleFemale.brandName}
                        </p>
                        <p className="font-semibold text-base leading-7 relative left-[10px]">
                          {maleFemale.perfumeCategory}
                        </p>
                        <p className="font-semibold relative left-[10px]">
                          Rs.{maleFemale.price}
                        </p>
                        <div className="flex relative left-[10px]">
                          <ReactStars value={maleFemale.ratings} />
                          <p>(2)</p>
                        </div>
                        <div className="flex p-2 gap-4 items-center relative left-[10px]">
                        <button className="bg-gradient-to-r from-red-500  to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-red-500 text-white font-bold py-2 px-10 rounded">
                          Add To Cart
                        </button>

                        <p className='bg-slate-400 h-[40px] w-[40px] rounded-full'>
                          <AiOutlineHeart
                            size={30}
                            className="text-red-500 relative left-[5px] top-[5px]"
                          />
                        </p>
                      </div>
                      </div>

                   
                    </Card>
                  </SwiperSlide>
                </div>
              </Link>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MaleAndFemale;
