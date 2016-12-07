var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views')

fs.readFile('../views/header.html', function (err, res, header) {
  if (err) {
    res.status(500).send('Couldn\'t read header');
    res.end();
  }


  fs.readFile('../views/form.html', function (err, res, form) {
    if (err) {
        res.status(500).send('Couldn\'t read form');
        res.end();
    }

    fs.readFile('../views/footer.html', function (err, res, footer) {
      if (err) {
          res.status(500).send('Couldn\'t read footer');
          res.end();
      }

      app.get('/', function (req, res) {
        res.send(header + form + footer);
        res.end();

        console.log("Got a GET request");
      });

      app.post('/', function (req, res) {
        res.send(header + form + + '<p>' + req.body.name + '</p>\n' + footer);
        res.end();

        console.log("Got a POST request");
      });

      var server = app.listener(3001, function () {
        console.log("Server up and running...")
      });

    });

  });
});