import ue from 'node-pix-payload';

import { Request, Response } from "express";

export function Teste (req: Request, res: Response) {

  const payload_static = ue.setPixKey('')
  .setDescription('')
  .setMerchantName('Test')
  .setMerchantCity('RIO BRANCO')
  .setAmount('22.88')
  .setTxid('i');

  payload_static.getData().then((data: any) =>{
    console.log(data)
    res.send(data)
  })
  
};