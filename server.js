import express from 'express'

const app= express()

import nodemailer from 'nodemailer';

//

// Create a transporter using your email service details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohamed.ashrafsp@gmail.com',
    pass: '************',
  },
  
});

// Set up the email options
const mailOptions = {
  from: 'mohamed.ashrafsp@gmail.com',
  to: 'mohamed.ashrafsp@gmail.com',
  subject: 'Hello from Node.js Mailer',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});

app.get('/',(req,res)=>{
    res.send("hi")
})
app.listen(3000,()=>{

    console.log("server running on port:",3000)

})