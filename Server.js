const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'Uploads'));
  },
  filename: (req, file, cb) => {
    const newFilename = file.originalname.replace(/\s+/g, '_'); // Replace spaces with underscores
    cb(null, `${Date.now()}-${newFilename}`);
  },
});

const upload = multer({ storage });

app.post('/new', upload.single('image'), (req, res) => {
  res.json({ imageUrl: `Uploads/${req.file.filename}` });
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'qaisharzaki@gmail.com', // Add your own email
    pass: 'Nawada@1...' // Add your own email password
  }
});

// Email sending route
app.post('/send-email', (req, res) => {
  const { full_name, email, phone_number, address } = req.body;

  const mailOptions = {
    from: email,
    to: 'qaisharzaki@gmail.com', // Add your recipient email
    subject: 'Contact Form Submission',
    text: `
      Full Name: ${full_name}
      Email: ${email}
      Phone Number: ${phone_number}
      Address: ${address}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
