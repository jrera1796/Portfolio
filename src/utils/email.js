//Move this to the backend

const nodemailer = require('nodemailer');

export function Mailer(msg){
  console.log(msg)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'email',
    pass: 'pass'
  }
});

const mailOptions = {
  from: 'email',
  to: 'email',
  subject: 'Hello from Node.js',
  text: 'This is a test email from Node.js.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email: ', error);
  } else {
    console.log('Email sent: ', info.response);
  }
});
}