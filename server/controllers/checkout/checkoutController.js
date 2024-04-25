const nodemailer = require('nodemailer');

exports.sendEmailOnCheckout = (req, res) => {
    const { firstname, lastname, email, message, totalPrice, cartItems } = req.body;

    // Send email notification to the customer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your.email@gmail.com', // Your email address

        }
    });

    // Customer's email confirmation
    const customerMailOptions = {
        from: '"PAC Kitchen & Bath " <yourcompanyemail@gmail.com>',
        to: email, 
        subject: 'Order Confirmation',
        text: `Dear ${firstname} ${lastname},\n\nThank you for your order! We have received your order and will process it shortly.\n\nOrder details:\nTotal Price: ${totalPrice}\nItems: ${JSON.stringify(cartItems)}\n\nMessage: ${message}\n\n`
    };

    // Send email notification to the store owner
    const ownerMailOptions = {
        from:'"PAC Kitchen & Bath" <yourcompanyemail@gmail.com>',
        to: process.env.ADMIN_EMAIL,
        subject: 'New Order Placed',
        text: `New order placed by ${firstname} ${lastname}. Total Price: ${totalPrice}. Items: ${JSON.stringify(cartItems)}. Message: ${message}`
    };

    transporter.sendMail(customerMailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email to customer:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent to customer: ', info.response);
            // Send email to store owner after sending to customer
            transporter.sendMail(ownerMailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email to store owner:', error);
                } else {
                    console.log('Email sent to store owner: ', info.response);
                }
            });
            res.status(200).send('Email sent successfully');
        }
    });
};
