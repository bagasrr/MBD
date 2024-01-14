import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Car from "./CarModels.js";
import User from "./UserModels.js";

const { DataTypes } = Sequelize;

const Transact = db.define(
  "transact",
  {
    id_user: DataTypes.INTEGER,
    id_mobil: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

// Define the association
User.associate = () => {
  User.hasOne(Transact, { foreignKey: "id_user" });
};
// Transact.belongsTo(User, { foreignKey: "id_user" });
// Transact.hasMany(Car, { foreignKey: "id_mobil" });
// Transact.belongsTo(Car, { foreignKey: "id_mobil" });
export default Transact;

(async () => {
  await db.sync();
})();
