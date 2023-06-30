import React from 'react'
import Navbar from '../components/NavbarSection/Navbar'

const Login = () => {
  return (
    <div>
     {/* Navbar section */}
     <div className="xl:h-[120px] hidden xl:block xl:w-full">
     <div className=" bg-gradient-to-r from-[#F49AAF]  to-[#A3FCFC] bg-cover bg-no-repeat h-[40px] w-full ">
       <Navbar />
     </div>
   </div>
    </div>
  )
}

export default Login