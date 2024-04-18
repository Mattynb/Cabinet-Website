const Contact = require('../../models/Contact'); // Adjust the path as necessary
const { sendEmail } = require('../../utils/emailUtility'); // Send notification email to the admin


const handleReceivedMessage = async (req, res) => {
    try {
        const { name, email, category, message, createdAt } = req.body;
        const newContact = new Contact({
            name,
            email,
            category,
            message,
            createdAt
        });

        const savedContact = await newContact.save();

        // Send acknowledgment email to the sender
        await sendEmail({
            from: '"PAC Kitchen & Bath " <yourcompanyemail@gmail.com>',
            to: email,
            subject: "We've received your message",
            text: `Hello ${name},\n\nThank you for contacting us. Your message is very important to us and we will get back to you as soon as possible.\n\nBest Regards,\nYour Company Name`,
            html: `<p>Hello ${name},</p><p>Thank you for contacting us. Your message is very important to us and we will get back to you as soon as possible.</p><p>Best Regards,<br>Your Company Name</p>`
        });

        // Send notification email to the admin
        await sendEmail({
            from: '"PAC Kitchen & Bath" <yourcompanyemail@gmail.com>',
            to: process.env.ADMIN_EMAIL,
            subject: "New Contact Form Submission",
            text: `A new contact form submission from ${name} (${email}): ${message}`,
            html: `<p>A new contact form submission from ${name} (${email}):</p><p>${message}</p>`
        });

        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = handleReceivedMessage;