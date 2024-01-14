import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Product from "../../Component/ProductView/Product";
import "./index.css";

const Transact = () => {
  const [nama_mobil, setNamaMobil] = useState("");
  const [jenis_mobil, setJenisMobil] = useState("");
  const [gambar_mobil, setGambarMobil] = useState("");
  const [harga_rental, setHargaRental] = useState("");

  const [id_mobil, setIdMobil] = useState();
  const [nama_penyewa, setName] = useState("");
  const [nik_penyewa, setNik] = useState("");
  const [nohp_penyewa, setNoHp] = useState("");
  const [alamat_penyewa, setAlamat] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCarById();
  }, []);
  const getCarById = async () => {
    const response = await axios.get(`http://localhost:3000/cars/${id}`);
    setIdMobil(response.data.id);
    setNamaMobil(response.data.nama_mobil);
    setJenisMobil(response.data.jenis_mobil);
    setGambarMobil(response.data.gambar_mobil);
    setHargaRental(response.data.harga_rental);
  };
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", {
        id_mobil,
        nama_penyewa,
        nik_penyewa,
        nohp_penyewa,
        alamat_penyewa,
      });
      navigate(`/transaction/${id}/status`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="TransactContainer">
      <div className="TextHeader">
        <h2>Great Choice,</h2>
        <h2>Please Complete your bio frist</h2>
      </div>
      <div className="Content">
        <div className="ProductGallery">
          <Product productName={nama_mobil + " " + jenis_mobil} imgSrc={gambar_mobil} price={`$${harga_rental} / hour`} />
        </div>
        <div className="BuyerBio">
          <form onSubmit={saveUser}>
            <input className="BioInput" type="hidden" value={id_mobil} />
            <input className="BioInput" type="text" placeholder="Your Name Here" onChange={(e) => setName(e.target.value)} />
            <input className="BioInput" type="int" placeholder="Your Id Here" onChange={(e) => setNik(e.target.value)} />
            <input className="BioInput" type="int" placeholder="Your Phone Number Here" onChange={(e) => setNoHp(e.target.value)} />
            <input className="BioInput" type="text" placeholder="Your Address Here" onChange={(e) => setAlamat(e.target.value)} />

            <button type="submit">Go Payment &gt;</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Transact;
