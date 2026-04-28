import express from "express";
import { listSalty, createSalty } from "../controllers/saltyController.js";

const router = express.Router();

/**
 * @swagger
 * /api/products/salty:
 *   get:
 *     summary: Lista todos os produtos salgados
 *     tags:
 *       - Salty
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 */
router.get("/salty", listSalty);

/**
 * @swagger
 * /api/products/salty:
 *   post:
 *     summary: Cria um produto salgado
 *     tags:
 *       - Salty
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */
router.post("/salty", createSalty);

export default router;