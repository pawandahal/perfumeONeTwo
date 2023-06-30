import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../ReuseAbleComponent/Product";

const Best = () => {
  const [newItems, setNewItems] = useState();
  //logo section
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}perfumes`)
      .then((res) => {
        setNewItems(res.data);
        console.log("perfume", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
  <>
   <Product newItems={newItems} />
  </>
  );
};

export default Best;
