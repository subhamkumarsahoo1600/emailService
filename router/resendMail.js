import express from 'express';
import sendAnyMailToMe from '../utils/sendAnyMailToMe1.js';

const router = express.Router();

router.post('/sendmailtome', async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        await sendAnyMailToMe({
            mail: email,
            subject,
            html: `<p>${message}</p>`,
        });

        res.status(201).json({
            success: true,
            message: 'Email sent successfully',
        });
    } catch (error) {
        console.error('MAIL ERROR 👉', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
        });
    }
});

export default router;
