import { Router } from "express";

import { QRCode } from "../QRCode/index.js";

const QRCodeRouter = Router();

QRCodeRouter.post("/donation", QRCode);

export default QRCodeRouter;