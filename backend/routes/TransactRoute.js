import express from "express";
import { getTransact, getTransactById, createTransact, updateTransact, deleteTransact } from "../controllers/TransactController.js";

const router = express.Router();

router.get("/transacts", getTransact);
router.get("/transacts/:id", getTransactById);
router.post("/transacts", createTransact);
router.patch("/transacts/:id", updateTransact);
router.delete("/transacts/:id", deleteTransact);

export default router;
