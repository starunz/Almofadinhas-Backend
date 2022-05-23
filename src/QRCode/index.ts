import donation from 'node-pix-payload';

import { Request, Response } from "express";

export async function QRCode (req: Request, res: Response) {
    const {
        keyPix,
        nameOng,
        description,
        amount,
        id,
        city
    } = req.body;

    const newPixKey = keyPix.replace('.', '').replace('/', '').replace('-', '').replace('.', '').replace('.', '');
    const newAmount = amount.replace('.','').replace(',','.').replace(' ','').replace("R$", '').toString();

    const payload_static = donation.setPixKey(newPixKey)
    .setDescription(description)
    .setMerchantName(nameOng)
    .setMerchantCity(city)
    .setAmount(newAmount)
    .setTxid(id);

    const data = await payload_static.getData();

    res.send(data);
}