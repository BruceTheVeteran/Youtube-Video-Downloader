var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');
// const Expense = require('../../models/Expense');


var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

router.get('/', function(req, res){
  res.render('index')
});

router.get('/api/link', catchAsync(async (req, res) => {
  const { query } = req;
  const { link } = query;

  console.log(link);
  mLink = link.replace("www", "m");
  console.log(mLink);

  const response = await fetch(mLink,
    {
      method: 'GET',
    });


  return res.send(response.url);

}));



module.exports = router;
