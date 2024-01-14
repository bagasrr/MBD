import { Sequelize } from "sequelize";

const db = new Sequelize("perentalan_mobil", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
