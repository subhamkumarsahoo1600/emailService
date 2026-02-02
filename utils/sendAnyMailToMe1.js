import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendAnyMailToMe1 = async ({ mail, subject, html }) => {
    try {
        const response = await resend.emails.send({
            from: 'Website Contact <onboarding@resend.dev>', // safe default
            to: [process.env.EMAIL_USER], // your email
            subject,
            html,
            reply_to: mail, // user email
        });

        console.log('Email sent:', response.id);
        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export default sendAnyMailToMe1;
