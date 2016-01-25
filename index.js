var express = require('express')
var app = express()
var path = require('path')
var secret= require('./secrets/secret');
var nodemailer = require('nodemailer');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/views/assets'))

var hbs = require('hbs');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: secret.email,
        pass: secret.pass
    }
});

app.post('/userData',function (request,response){

  var textCreator = function(data){
  var orderText =    
                  //format the data recived from your client here

    return orderText;
  }

  var finalText = textCreator(request);

  var customerMail = {
    from: 'Socratic Prep',
    to: request.body.userInfo.email,
    subject: 'Inquiry Confirmation',
    text: 'Hi Thanks for ljskdbvlkjabsnkvblaksdjvb have a nice day!' 
  };

  var buisnessMail = {
    from: 'Socratic Prep',
    to: secret.email, 
    subject: 'Socratic Inquiry',
    text: finalText
  };

  transporter.sendMail(buisnessMail, function(error, info){
    if(error){
        response.send('FAILURE')
    }
    console.log('Buisness Message sent: ' + info.response);

    transporter.sendMail(customerMail, function(error, info){
      if(error){
           response.send('FAILURE')
      }
      console.log('Customer Message Sent: ' + info.response);
      response.send('SUCCESS')
    });
  });
});










app.get('/', function(request, response) {
  response.render('index');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
