import { Router } from "express";
import { getCotacao } from "./controller";

const router = Router();

// Exemplo: GET /api/cripto/cotacao?symbols=BTC,ETH&convert=USDT
router.get("/cotacao", getCotacao);

export default router;
