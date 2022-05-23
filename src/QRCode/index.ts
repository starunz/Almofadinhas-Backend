import pkg from 'node-pix-payload';

import { Request, Response } from "express";

export function QRCode (req: Request, res: Response) {
    const {
        keyPix,
        nameOng,
        description,
        amount,
        id,
        city
    } = req.body;
    console.log(req.body)
    console.log(amount)

    //const ue = amount.replace('.','').replace(',','.').replace(' ','').replace("R$", '')
    //console.log(ue)

    const payload_static = pkg.setPixKey(keyPix)
    .setDescription(description)
    .setMerchantName(nameOng)
    .setMerchantCity(city)
    .setAmount(amount)
    .setTxid(id);
    
    payload_static.getData().then((data: any) =>{
        console.log(data)
        res.send(data)
    })
    .catch((err: any) => console.log(err)); 
}