import { Router } from "express";

import { QRCode } from "../QRCode/index.js";
import { Teste } from "../QRCode/test.js";

const QRCodeRouter = Router();

QRCodeRouter.post("/donation", QRCode);
QRCodeRouter.post("/teste", Teste);

export default QRCodeRouter;