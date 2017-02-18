const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const mockData = require('./mockdata')

router.get('/', (req, res) =>
    res.send('Hello, world!'));

const searchParam = 'search';
// router.get('/:' + searchParam, (req, res) =>
//     setTimeout(() => res.json("Delayed response with received value: " + req.params[searchParam] + "ms"), req.params[searchParam]));

router.get('/getChart', function(request, response){ //root dir

  return response.send(mockData.line)
  // getChart()
  //   .then(res => res.json())
  //   .then(res => response.send(res))
});


function getChart(){
  return fetch('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json')
  // .then(res => res.json())
  // .then(json => console.log(json));
}
module.exports = router;
