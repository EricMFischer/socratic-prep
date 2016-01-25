var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var secret= require('./secret');
var nodemailer = require('nodemailer');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/views/assets'))
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: secret.email,
    password: secret.password
  }
});

app.post('/userData', function (request,response) {
  console.log('request.body: ', request.body);
  var textCreator = function(data) {
    var orderText = 'This is the message from client.'; //format the data recived from your client here
    return orderText;
  }
  var finalText = textCreator(request);
  var customerMail = {
    from: 'Socratic Prep',
    to: request.body.email,
    subject: 'Inquiry Confirmation',
    text: 'Hi Thanks for ljskdbvlkjabsnkvblaksdjvb have a nice day!' 
  };
  console.log(finalText, businessMail.to);
  var businessMail = {
    from: 'Socratic Prep',
    to: secret.email, 
    subject: 'Socratic Inquiry',
    text: finalText
  };
  transporter.sendMail(businessMail, function(error, info) {
    if (error) {
      response.send('FAILURE');
    }
    console.log('Business message sent: ' + info.response);
    transporter.sendMail(customerMail, function(error, info) {
      if (error) {
        response.send('FAILURE');
      }
      console.log('Customer message Sent: ' + info.response);
      response.send('SUCCESS');
    });
  });
});
