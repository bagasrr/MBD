import Car from "../models/CarModels.js";
export const getCar = async (req, res) => {
  try {
    const response = await Car.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCarById = async (req, res) => {
  try {
    const response = await Car.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCar = async (req, res) => {
  try {
    const response = await Car.create(req.body);
    res.status(200).json({ msg: "Car Created" });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateCar = async (req, res) => {
  try {
    await Car.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Car Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCar = async (req, res) => {
  try {
    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Car deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
