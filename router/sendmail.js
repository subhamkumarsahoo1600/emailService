import express from 'express'
import sendAnyMailToMe from '../utils/sendAnyMailToMe.js'

const router=express.Router()

router.post('/sendmailtome', async (req,res)=>{
    const { email ,subject,message} = req.body;
try {
      await sendAnyMailToMe({
                    mail: email,
                    subject: subject,
                    html: `
                        <p>${message}</p>
                    `,
                });

                res.status(201).json({
                    success: true,
                    message: 'email sent successfully',
                });
} catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
}
})

export default router