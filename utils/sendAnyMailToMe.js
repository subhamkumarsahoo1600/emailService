import nodemailer from 'nodemailer';

const sendAnyMailToMe = async ({ mail, subject, html }) => {
    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email
        const info = await transporter.sendMail({
            from: `"${mail}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject,
            html,
        });

        console.log('Email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export default sendAnyMailToMe;
