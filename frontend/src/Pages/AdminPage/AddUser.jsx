import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nama_penyewa, setName] = useState("");
  const [nik_penyewa, setNik] = useState("");
  const [nohp_penyewa, setNoHp] = useState("");
  const [alamat_penyewa, setAlamat] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", {
        nama_penyewa,
        nik_penyewa,
        nohp_penyewa,
        alamat_penyewa,
      });
      navigate("/adminpage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Nik</label>
            <div className="control">
              <input type="int" className="input" onChange={(e) => setNik(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">No Hp</label>
            <div className="control">
              <input type="int" className="input" onChange={(e) => setNoHp(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input type="text" className="input" onChange={(e) => setAlamat(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
