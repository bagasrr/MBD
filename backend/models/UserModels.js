import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Car from "./CarModels.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    id_mobil: DataTypes.INTEGER,
    nama_penyewa: DataTypes.STRING,
    nik_penyewa: DataTypes.INTEGER,
    nohp_penyewa: DataTypes.INTEGER,
    alamat_penyewa: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// Define the association

export default User;

(async () => {
  await db.sync();
})();

// Car.hasOne(User, { foreignKey: "id_mobil" });
// User.belongsTo(Car, { foreignKey: "id_mobil" });
