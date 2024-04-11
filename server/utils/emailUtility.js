// utils/emailUtility.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendEmail({ from, to, subject, text, html }) {
    try {
        await transporter.sendMail({ from, to, subject, text, html });
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; 
    }
}

module.exports = { sendEmail };