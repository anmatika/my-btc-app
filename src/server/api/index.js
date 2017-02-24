const express = require('express');

const router = express.Router();
const fetch = require('node-fetch');

function getChart() {
  return fetch('https://api.blockchain.info/charts/market-price?cors=true&format=json&lang=en');
}

router.get('/', (req, res) =>
    res.send('Hello, world!'));

const searchParam = 'search';
router.get(`/:${searchParam}`, (req, res) => (
        getChart()
            .then(r => r.json())
            .then(r => res.send(r))
    ));

module.exports = router;
