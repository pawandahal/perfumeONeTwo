import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/NavbarSection/Navbar";
import axios from "axios";
import MaleAndFemale from "../components/ReuseAbleComponent/MaleAndFemale";
const Man = () => {

  const [manFemaleSection, setFemaleSection] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/perfumes-gender/man")
      .then((res) => {
        setFemaleSection(res.data);
      
    
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* Navbar section */}
      <div className="xl:h-[120px] hidden xl:block xl:w-full">
        <div className=" bg-gradient-to-r from-[#F49AAF]  to-[#A3FCFC] bg-cover bg-no-repeat h-[40px] w-full ">
          <Navbar />
        </div>

        <MaleAndFemale manFemaleSection={manFemaleSection} />
      </div>
    </>
  );
};

export default Man;
