const Binance = require('node-binance-api');
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.json([{ user: 'geek' },{ name: "triyam" }]);
});

app.get("/getValue", async (req, res) => {
    const binance = new Binance().options({
      APIKEY: '0waY835r8YXcSrCdulECugnGiEw0Whim62Xei8NdmcFxSqXzps35crABdujs8fn8',
      APISECRET: 'YGOo8TlPqbbZCZatmWitOG7xbdf40dnzky6GIuumgqpUgnaar8vWDxW2S9dDyyEX'
    });

    binance.prices(async function(error, ticker) {
      btc = await ticker.BTCUSDT
      eth = await ticker.ETHUSDT
      bnb = await ticker.BNBUSDT
      shib = await ticker.SHIBUSDT
      matic = await ticker.MATICUSDT 

      res.json([{"btc": btc},{"eth": eth},{"bnb": bnb},{"shib": shib},{"matic": matic}])
    })
})  

app.listen(port ,() => {
    console.log('Server app listening at localhost')
})
