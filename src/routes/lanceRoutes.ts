import lanceController from "../controllers/lanceController";
import { Router } from "express";

const lanceRouter = Router();

lanceRouter.get('/lances', lanceController.listLances)

lanceRouter.post('/lance', lanceController.criarLance);

lanceRouter.put('/lance', lanceController.updateLances);

lanceRouter.delete('/lance', lanceController.deleteLances);

export default lanceRouter;