var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');
var youtubedl = require('youtube-dl');
var fs = require('fs');
// const Expense = require('../../models/Expense');

router.get('/', function(req, res){
  res.render('index')
});

router.get('/api/yt', catchAsync(async (req, res) => {
  const { query } = req;
  const { link } = query;
  var { name } = query;
  var options = [];
  if (req.query.username && req.query.password ) {
    const { username , password } = query;
    options.push(`--username=${username}`);
    options.push(`--password=${password}`);
  }

  var video = await youtubedl(link, options);


  video.on('info', function(info) {
    console.log('id:', info.id);
    console.log('title:', info.title);
    console.log('url:', info.url);
    console.log('thumbnail:', info.thumbnail);
    console.log('description:', info.description);
    console.log('filename:', info._filename);
    console.log('format id:', info.format_id);
  });

console.log(video);

video.pipe(fs.createWriteStream('myvideo.mp4'));




  return res.send('done');

}));



module.exports = router;
