var express = require('express');
var parseArgs = require('minimist');
var db = require('./db.json');

var argv = parseArgs(process.argv.slice(2));
//console.dir(argv);

var port = argv['port'] || '5000';
var latencyMilliSeconds = 800;
var app = express();
app.listen(port, () => {
  console.log('Server running on http:\\\\localhost:' + port);
});

app.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(db);
});

app.get('/posts', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => res.send(db.posts), latencyMilliSeconds);
});

app.get('/posts/1', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => res.send(db.posts), latencyMilliSeconds);
});

app.post('/comments', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => res.send(db.comments), latencyMilliSeconds);
});

app.get('/profile', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => res.send(db.profile), latencyMilliSeconds);
});

app.get('/profile/1', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => res.send(db.profile), latencyMilliSeconds);
});

app.get('/400', (req, res, next) => {
  res.status(400);
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => res.send({ data: ['The data field is required.'] }), latencyMilliSeconds);
});

app.get('/500', (req, res, next) => {
  res.status(500);
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => res.send({ error: ['some error.'] }), latencyMilliSeconds);
});
