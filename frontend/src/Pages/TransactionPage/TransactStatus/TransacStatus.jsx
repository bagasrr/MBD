import Product from "../../../Component/ProductView/Product";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
const TransactStatus = () => {
  const [nama_mobil, setName] = useState("");
  const [gambar_mobil, setGambarMobil] = useState("");
  const [jenis_mobil, setJenisMobil] = useState("");

  const [cars] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCarById();
  }, []);

  const getCarById = async () => {
    const response = await axios.get(`http://localhost:3000/cars/${id}`);

    setName(response.data.nama_mobil);
    setGambarMobil(response.data.gambar_mobil);
    setJenisMobil(response.data.jenis_mobil);
  };

  return (
    <div className="TransactStatusContainer">
      <div className="TextStatus">
        <h2>Your Order on process,</h2>
        <h2>Please Complete payment on administrator</h2>
      </div>
      <div className="Product">
        <Product key={cars.id} imgSrc={gambar_mobil} productName={nama_mobil + " " + jenis_mobil} />
      </div>
    </div>
  );
};

export default TransactStatus;
