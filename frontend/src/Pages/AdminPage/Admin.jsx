import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered has-background-white">
      <div className="column is-half">
        <Link to="/add" className="button is-success">
          Tambah Data Transaksi
        </Link>
        <table className="table mt-2 is-stripped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Nik</th>
              <th>No Hp</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nama_penyewa}</td>
                <td>{user.nik_penyewa}</td>
                <td>{user.nohp_penyewa}</td>
                <td>{user.alamat_penyewa}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button className="button is-small is-info">edit</button>
                  </Link>
                  <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
