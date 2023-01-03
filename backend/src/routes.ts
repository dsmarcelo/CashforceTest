import express from "express";
import orderController from "./controllers/orderController";

const router = express.Router();

router.get("/api/orders", orderController.getAll);

export { router };
