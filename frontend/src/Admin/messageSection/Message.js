import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Card } from "@mui/material";
import Navbar from '../../components/NavbarSection/Navbar';
const Message = () => {

    const [newMessage, setNewMessage] = useState();
    //message section
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}contacts`)
        .then((res) => {
          setNewMessage(res.data);
          console.log("message", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <div className='w-full'>
    <div className="xl:h-[120px] hidden xl:block xl:w-full">
    <div className=" bg-gradient-to-r from-[#F49AAF]  to-[#A3FCFC] bg-cover bg-no-repeat h-[40px] w-full ">
      <Navbar />
    </div>
  </div>
    <div className='w-[90vw] grid grid-cols-4 gap-4 relative left-[20px]'>
    {newMessage && newMessage.contacts && newMessage.contacts.map((message,index)=>(
      <div key={message.id}>
      <Card className='w-[15vw] '>
      <div className='p-2'>
      <p className=''>{message.email}</p>
      <p>{message.address}</p>
      <p>{message.messages}</p>
      </div>
      
      </Card>
        
      </div>
     ))}
    </div>
  
    </div>
  )
}

export default Message