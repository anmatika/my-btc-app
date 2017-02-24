const express = require('express');

const router = express.Router();
const fetch = require('node-fetch');

function getMarketPriceChartData(timespan) {
  return fetch(`https://api.blockchain.info/charts/market-price?cors=true&timespan=${timespan}&format=json&lang=en`);
}

router.get('/', (req, res) => res.send('Hello, world!'));

router.get('/getprice/:timespan', (req, res) => {
    return getMarketPriceChartData(req.params.timespan)
        .then(r => r.json())
        .then(r => res.send(r));
    });

module.exports = router;
