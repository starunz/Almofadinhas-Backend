import pkg from 'node-pix-payload';

export function QRCode () {

    const payload_static = pkg.setPixKey('1c995784-b8a4-482a-952e-4b8cd6928216')
    .setDescription('payment xyz')
    .setMerchantName('IJ Solutions')
    .setMerchantCity('MACEIO')
    .setAmount('100.00')
    .setTxid('ij123');
    
    payload_static.getData().then((data: any) =>{
        console.log(data)
    })
    .catch((err: any) => console.log(err)); 
}
