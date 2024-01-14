import { Model } from "sequelize";

import Transact from "../models/TransactModels.js";
import User from "../models/UserModels.js";
export const getTransact = async (req, res) => {
  try {
    const response = await Transact.findByPk(1);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransactById = async (req, res) => {
  try {
    const response = await Transact.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransact = async (req, res) => {
  try {
    const response = await Transact.create(req.body);
    res.status(200).json({ msg: "Transact Created" });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateTransact = async (req, res) => {
  try {
    await Car.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Transact Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTransact = async (req, res) => {
  try {
    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transact deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
