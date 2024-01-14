import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nama_penyewa, setName] = useState("");
  const [nik_penyewa, setNik] = useState("");
  const [nohp_penyewa, setNoHp] = useState("");
  const [alamat_penyewa, setAlamat] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    setName(response.data.nama_penyewa);
    setNik(response.data.nik_penyewa);
    setNoHp(response.data.nohp_penyewa);
    setAlamat(response.data.alamat_penyewa);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input type="text" className="input" value={nama_penyewa} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Nik</label>
            <div className="control">
              <input type="int" className="input" value={nik_penyewa} onChange={(e) => setNik(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">No Hp</label>
            <div className="control">
              <input type="int" className="input" value={nohp_penyewa} onChange={(e) => setNoHp(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input type="int" className="input" value={alamat_penyewa} onChange={(e) => setAlamat(e.target.value)} />
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

export default EditUser;
