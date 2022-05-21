import { Router } from "express";

import { QRCode } from "../QRCode/index.js";

const QRCodeRouter = Router();

QRCodeRouter.post("/qrcode", QRCode);

export default QRCodeRouter;