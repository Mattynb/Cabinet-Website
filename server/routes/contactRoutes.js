const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Adjust the path as necessary
const { sendEmail } = require('../utils/emailUtility'); 

// POST route for creating a new contact entry
router.post('/', async (req, res) => {
  try {
    const { name, email, category, message,} = req.body;
    const newContact = new Contact({
      name,
      email,
      category,
      message,
    });

    const savedContact = await newContact.save();
    // Send acknowledgment email to the sender
    await sendEmail({
      from: '"Your Company Name" <yourcompanyemail@gmail.com>',
      to: email,
      subject: "We've received your message",
      text: `Hello ${name},\n\nThank you for contacting us. Your message is very important to us and we will get back to you as soon as possible.\n\nBest Regards,\nYour Company Name`,
      html: `<p>Hello ${name},</p><p>Thank you for contacting us. Your message is very important to us and we will get back to you as soon as possible.</p><p>Best Regards,<br>Your Company Name</p>`
  });

  // Send notification email to the admin
  await sendEmail({
      from: '"Your Company Name" <yourcompanyemail@gmail.com>',
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      text: `A new contact form submission from ${name} (${email}): ${message}`,
      html: `<p>A new contact form submission from ${name} (${email}):</p><p>${message}</p>`
  });
    res.status(201).json(savedContact);
  } catch (err) {
    console.error(err); // log the full error
    const status = err.name === 'ValidationError' ? 400 : 500;
    res.status(status).json({ message: err.message || 'An error occurred' });
  }
});

module.exports = router;