import CardList from "../../Component/CardList/CardList";
import "./index.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const List = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars();
  }, []);
  const getCars = async () => {
    const response = await axios.get("http://localhost:3000/cars");
    setCars(response.data);
  };
  return (
    <div className="listContainer">
      <h1 className="listTitle">Sure, Pick what do you want?</h1>
      <ul className="listWrapper">
        {cars.map((car) => (
          <CardList key={car.id} link={car.id} img={car.gambar_mobil} namaImg={car.nama_mobil} />
        ))}
      </ul>
    </div>
  );
};

export default List;
