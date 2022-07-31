require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Uman programming is amazing',
     from: '+12283386202',
     to: '+923217727595'
   })
  .then(message => console.log(message.sid));
