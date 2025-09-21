import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import cryptoRoutes from "./routes";
import startBinanceStream from "./binance";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas REST
app.use("/api/cripto", cryptoRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

// Inicia o stream da Binance
startBinanceStream(io);

const PORT = process.env.PORT || 3002;
httpServer.listen(PORT, () => {
  console.log(`🚀 Crypto microservice rodando na porta ${PORT}`);
});
