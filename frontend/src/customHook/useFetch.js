import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, url2, url3, url4) => {
  const [logo, setLogo] = useState(null);
  const [perfume, setPerfume] = useState(null);
  const [newItems, setNewItems] = useState(null);
  const [bestItems, setBestItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch logo
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setLogo(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  // Fetch perfume
  useEffect(() => {
    setLoading(true);
    axios
      .get(url2)
      .then((response) => {
        setPerfume(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url2]);

  // Fetch New
  useEffect(() => {
    setLoading(true);
    axios
      .get(url3)
      .then((response) => {
        setNewItems(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url3]);

  // Fetch Best
  useEffect(() => {
    setLoading(true);
    axios
      .get(url4)
      .then((response) => {
        setBestItems(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url4]);

  return { logo, loading, error, perfume, newItems, bestItems };
};

export default useFetch;
