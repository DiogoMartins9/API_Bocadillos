import { pool } from "../db/connection.js";

export async function listSalty(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM salty"
    );

    if (result.rows.length > 0) {
      res.json({ success: true, salty: result.rows });
    } else {
      res.status(401).json({ success: false, message: "Nenhum salgado encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar salgados:", error);
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
}

export async function createSalty(req, res) {
  try {
    console.log("req.body recebido:", req.body);
    const { name, type, descript, price, image, package_size, package_price } = req.body;

    console.log('Recebendo dados:', {
      name, type, descript, price, image, package_size, package_price
    });

    const result = await pool.query(
      `INSERT INTO salty (name, type, descript, price, image, package_size, package_price) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [name, type, descript, price, image, package_size, package_price]
    );

    console.log('Salgado criado:', result.rows[0]);
    res.json({ success: true, salty: result.rows[0] });
  } catch (error) {
    console.error("Erro detalhado ao criar salgado:", error.message);
    res.status(500).json({ success: false, message: "Erro ao criar salgado" });
  }
}