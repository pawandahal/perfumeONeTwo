import React, { useState } from "react";
import Best from "../ProductBest/Best";
import New from "../ProductNew/New";

const BestSeller = () => {
  // State
  const [newNavbar, SetNewNavbar] = useState(true);
  const [BestNavbar, setBestNavbar] = useState(false);

  const navbarNew = () => {
    setBestNavbar(false);
    SetNewNavbar(true);
  };
  const navbarBest = () => {
    setBestNavbar(true);
    SetNewNavbar(false);
  };

  return (
    <>
      {/* Main container */}
      <div className="w-full h-[100vh]">
        <div className="w-full h-full grid grid-cols-2 ">
          <div className="w-full flex flex-col">
            <div className="w-full grid grid-cols-2 grid-rows-1">
              <p
                onClick={navbarNew}
                className={
                  newNavbar
                    ? "p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer text-[#0052D4] transition ease-in duration-400 border-b-2 border-b-[#0052D4]"
                    : "p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer hover:bg-[#E6F0FF] hover:text-[#0052D4] transition ease-in duration-400 border-b-2"
                }
              >
                New Seller
              </p>
              <p
                onClick={navbarBest}
                className={
                  BestNavbar
                    ? "p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer text-[#0052D4] transition ease-in duration-400 border-b-2 border-b-[#0052D4]"
                    : "p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer hover:bg-[#E6F0FF] hover:text-[#0052D4] transition ease-in duration-400 border-b-2"
                }
              >
              Best sellers
              </p>
            </div>

            {/* Heading section */}
            {newNavbar && (
              <div className="w-full p-6 flex flex-col gap-3 mt-2">
                <New />
              </div>
            )}

            {BestNavbar && (
              <div className="w-full h-fit p-6 flex flex-col gap-3 mt-2">
                <Best />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
