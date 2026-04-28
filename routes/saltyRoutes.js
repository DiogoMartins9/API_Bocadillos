import express from "express";
import { listSalty, createSalty } from "../controllers/saltyController.js";

const router = express.Router();

router.get("/salty", listSalty);
router.post("/salty", createSalty);

export default router;