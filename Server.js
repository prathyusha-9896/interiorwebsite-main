const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'qaisharzaki@gmail.com',
    pass: 'Nawada@1...'
  }
});

app.post('/send-email', (req, res) => {
  const { full_name, email, phone_number, address } = req.body;

  const mailOptions = {
    from: email,
    to: 'qaisharzaki@gmail.com',
    subject: 'Contact Form Submission',
    text: `
      Full Name: ${full_name}
      Email: ${email}
      Phone Number: ${phone_number}
      Address: ${address}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
