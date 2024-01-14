import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Car = db.define(
  "cars",
  {
    nama_mobil: DataTypes.STRING,
    jenis_mobil: DataTypes.STRING,
    gambar_mobil: DataTypes.STRING,
    harga_rental: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);
export default Car;

(async () => {
  await db.sync();
})();
