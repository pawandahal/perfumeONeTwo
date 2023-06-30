import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/perfumes-gender/${id}`)
      .then((res) => {
        setDetails(res.data);
        
      })
      .catch((error) => {
        console.error("Error fetching perfume details:", error);
      });
  }, [id]);

  return (
    <div>
      {details ? (
        <div>
          <h2>{details.name}</h2>
          <p>{details.description}</p>
          {/* Render additional details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;
