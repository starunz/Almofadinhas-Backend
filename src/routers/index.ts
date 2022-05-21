import { Router } from "express";

import QRCodeRouter from "./QRCodeRouter.js";
const router = Router();

router.use(QRCodeRouter);


export default router;