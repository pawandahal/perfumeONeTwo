import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Product.css";
import Navbar from "../components/NavbarSection/Navbar";
import HomeComponentSection from "../components/HomeComponent/HomeComponentSection";
import DetailsPage from "./DetailsPages";

const Home = () => {
  return (
    <div>
      {/* Navbar section */}
      <div className="xl:h-[120px] hidden xl:block xl:w-full">
        <div className=" bg-gradient-to-r from-[#F49AAF]  to-[#A3FCFC] bg-cover bg-no-repeat h-[40px] w-full ">
          <Navbar />
        </div>
      </div>
      {/* main page start */}
      <div className="">
        {/* slider image section */}
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <img
                className="full-width-image"
                src="https://media.istockphoto.com/id/1399637805/photo/top-view-flat-lay-of-a-set-of-perfume-bottles-on-a-beige-blank-background.jpg?s=1024x1024&w=is&k=20&c=Pmqkh3m_4BNAwMqu1iMvUjsj-szGRV4n4Oau17Qif94="
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="full-width-image"
                src="https://media.istockphoto.com/id/1399637805/photo/top-view-flat-lay-of-a-set-of-perfume-bottles-on-a-beige-blank-background.jpg?s=1024x1024&w=is&k=20&c=Pmqkh3m_4BNAwMqu1iMvUjsj-szGRV4n4Oau17Qif94="
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      {/* Home section */}
      <div className="w-[90vw] pl-20 pt-5">
        <HomeComponentSection />
      </div>
      <DetailsPage />
    </div>
  );
};

export default Home;
