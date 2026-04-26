const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sendEmail } = require('./config/mailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.REACT_APP_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send email to admin
    const adminEmailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    await sendEmail(
      process.env.SMTP_USER,
      `New message from ${name}`,
      adminEmailHtml
    );

    // Send confirmation email to user
    const userEmailHtml = `
      <h2>Thank you for contacting me!</h2>
      <p>Hi ${name},</p>
      <p>I received your message and will get back to you as soon as possible.</p>
      <p>Best regards,</p>
      <p>Umar Khattak</p>
    `;

    await sendEmail(
      email,
      'Message received - Portfolio Contact',
      userEmailHtml
    );

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Make sure to configure SMTP settings in .env file`);
});
