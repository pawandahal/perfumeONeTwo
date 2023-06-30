import React from "react";
import Card from "@mui/material/Card";
import { AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
const Product = ({ newItems }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-6 gap-4 justify-center w-[90vw] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="w-[90vw] h-[60vh] "
        >
          {newItems &&
            newItems.perfumes &&
            newItems.perfumes.map((newItemsNames, index) => (
              <div key={index._id}>
                <SwiperSlide>
                  <Card>
                    <img
                      src={newItemsNames.image}
                      alt="logoName.logoName"
                      className="aspect-square w-[20vw] object-cover max-h-[200px] clear-both"
                    />
                    <p className="relative left-[15px] font-semibold leading-7 h-[20px]">
                      {newItemsNames.productName}
                    </p>
                    <div className="flex justify-between leading-7 h-[20px]">
                      <p className="relative left-[15px] font-semibold">
                        <span>Rs.</span> {newItemsNames.price}
                      </p>
                      <p>{newItemsNames.discountPercent}</p>
                    </div>

                    <p className="relative left-[15px] font-semibold line-through leading-7 h-[20px]">
                      <span>Rs.</span> {newItemsNames.discountPrice}
                    </p>

                    <div className="flex relative left-[15px] font-semibold leading-7 h-[20px]">
                      <ReactStars value={newItemsNames.ratings} />
                      <p>(2)</p>
                    </div>
                    <div className="flex p-2 gap-4 items-center ">
                      <button className="bg-gradient-to-r from-red-500  to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-red-500 text-white font-bold py-2 px-10 rounded">
                        Add To Cart
                      </button>

                      <p>
                        <AiOutlineHeart size={20} className=" outline-2" />
                      </p>
                    </div>
                  </Card>
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Product;
