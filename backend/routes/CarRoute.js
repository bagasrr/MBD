import express from "express";
import { getCar, getCarById, createCar, updateCar, deleteCar } from "../controllers/CarController.js";

const router = express.Router();

router.get("/Cars", getCar);
router.get("/Cars/:id", getCarById);
router.post("/Cars", createCar);
router.patch("/Cars/:id", updateCar);
router.delete("/Cars/:id", deleteCar);

export default router;
