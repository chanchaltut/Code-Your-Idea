// Vercel Serverless Function to handle Resend API calls
// This solves CORS issues by making API calls server-side

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { type, emailData } = req.body;

        // Validate required fields
        if (!type || !emailData) {
            return res.status(400).json({ error: 'Missing required fields: type and emailData' });
        }

        // Get API key from environment variable (server-side only)
        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        if (!RESEND_API_KEY) {
            console.error('Resend API key is not configured');
            return res.status(500).json({
                error: 'Email service is not configured. Please contact the administrator.'
            });
        }

        // Prepare email payload for Resend
        const resendPayload = {
            from: emailData.from || process.env.FROM_EMAIL || 'Code Your Idea <noreply@codeyouridea.com>',
            to: emailData.to || process.env.TO_EMAIL || 'contact@codeyouridea.com',
            subject: emailData.subject,
            html: emailData.html,
            text: emailData.text
        };

        // Add optional fields
        if (emailData.reply_to) {
            resendPayload.reply_to = emailData.reply_to;
        }

        // Handle attachments (for career applications)
        if (emailData.attachments && Array.isArray(emailData.attachments)) {
            resendPayload.attachments = emailData.attachments;
        }

        // Make request to Resend API
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resendPayload)
        });

        const result = await response.json();

        if (response.ok && result.id) {
            return res.status(200).json({
                success: true,
                id: result.id,
                message: 'Email sent successfully'
            });
        } else {
            console.error('Resend API error:', result);
            return res.status(response.status || 500).json({
                success: false,
                error: result.message || result.error?.message || 'Failed to send email'
            });
        }
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Internal server error'
        });
    }
}

