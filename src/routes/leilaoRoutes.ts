import leilaoController from "../controllers/leilaoController";
import { Router } from "express";

const leilaoRouter = Router();

leilaoRouter.get('/leiloes', leilaoController.listLeiloes)

leilaoRouter.post('/leilao', leilaoController.criarLeilao);

leilaoRouter.put('/leilao', leilaoController.updateLeiloes);

leilaoRouter.delete('/leilao', leilaoController.deleteLeiloes);

export default leilaoRouter;