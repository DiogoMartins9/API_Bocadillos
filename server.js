import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import saltyRoutes from "./routes/saltyRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
const PORT = process.env.PORT || 3001;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API_Bocadillos",
      version: "1.0.0",
      description: "Documentação da API",
    },
    servers: [
      {
        url: "https://api-bocadillos.onrender.com",
      },
    ],
  },
  apis: ["./routes/*.js"], 
};

const specs = swaggerJsdoc(options);

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options(/.*/, cors());

app.use("/api/auth", authRoutes);
app.use("/api/products", saltyRoutes);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});