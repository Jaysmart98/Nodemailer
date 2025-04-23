const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = (req, res) => {
    // res.send("Email sent successfully");
    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER_G,
            pass: process.env.PASS_G
        }
    })

    let mailOptions = {
        from: 'ogunbunmijoshua60@gmail.com',
        to: 'ogunbunmijoshua11@gmail.com',
        subject: 'Testing nodemailer',
        // text: 'The body of the message!',
        html: `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Products Available</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                    <h1 style="color: #007BFF;">FROM AYOMI (JAYSMART)!</h1>
                    <p>Dear Valued Customer,</p>
                    <p>We are thrilled to announce the arrival of our newest products, carefully curated to meet your needs and preferences. Check out our latest collection and be the first to grab these amazing items!</p>
                    <ul>
                        <li><strong>Product 1:</strong> I LOVE YOUUUUUUUU </li>
                        <li><strong>Product 2:</strong> WILL YOU BE MY WIFE?</li>
                        <li><strong>Product 3:</strong> WILL YOU BE THE MOTHER OF MY KIDS?</li>
                    </ul>
                    <p>Visit our website now to explore more:</p>
                    <a href="indexx.js" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px;">IF YES, CLICK HERE BABY</a>
                    <p>Thank you for choosing me always!</p>
                    <p>Best regards,</p>
                    <p><strong>THE LOVE OF YOUR LIFE</strong></p>
                </div>
            </body>
        </html>
    `
    };


    transporter.sendMail(mailOptions)
        .then((result) => {
            res.status(201).json({message: 'Email sent successfully'});
            console.log(result);
        }) .catch((err) => {
            console.error(err);
        })
}

module.exports = sendMail;
