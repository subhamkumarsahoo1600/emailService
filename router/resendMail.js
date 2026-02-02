// import express from 'express';
// import sendAnyMailToMe from '../utils/sendAnyMailToMe1.js';

// const router = express.Router();

// router.post('/sendmailtome', async (req, res) => {
//     const { email, subject, message } = req.body;

//     try {
//         await sendAnyMailToMe({
//             mail: email,
//             subject,
//             html: `<p>${message}</p>`,
//         });

//         res.status(201).json({
//             success: true,
//             message: 'Email sent successfully',
//         });
//     } catch (error) {
//         console.error('MAIL ERROR 👉', error);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to send email',
//         });
//     }
// });

// export default router;
import express from 'express';
import sendAnyMailToMe from '../utils/sendAnyMailToMe1.js';

const router = express.Router();

router.post('/sendmailtome', async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        await sendAnyMailToMe({
            mail: email,
            subject,
            html: `
                <div style="
                    max-width:600px;
                    margin:0 auto;
                    padding:20px;
                    font-family:Arial, Helvetica, sans-serif;
                    background:#ffffff;
                    border-radius:10px;
                    box-shadow:0 4px 12px rgba(0,0,0,0.1);
                ">
                    <h2 style="
                        color:#2c3e50;
                        border-bottom:2px solid #f0f0f0;
                        padding-bottom:10px;
                    ">
                        📩 New Contact Message
                    </h2>

                    <p style="font-size:15px; color:#555;">
                        You’ve received a new message from your website contact form.
                    </p>

                    <div style="
                        background:#f9fafb;
                        padding:15px;
                        border-radius:8px;
                        margin-top:15px;
                    ">
                        <p style="margin:0;">
                            <strong>👤 From:</strong><br/>
                            <span style="color:#007bff;">${email}</span>
                        </p>

                        <p style="margin:12px 0 0;">
                            <strong>📝 Message:</strong>
                        </p>

                        <p style="
                            margin-top:6px;
                            color:#333;
                            line-height:1.6;
                        ">
                            ${message}
                        </p>
                    </div>

                    <p style="
                        margin-top:25px;
                        font-size:13px;
                        color:#888;
                        text-align:center;
                    ">
                        — This email was sent from your website contact form
                    </p>
                </div>
            `,
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
