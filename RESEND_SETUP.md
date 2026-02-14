# Resend Email Service Setup Guide

## 🔒 Security Best Practices

**IMPORTANT:** API keys should NEVER be committed to your code repository. Always use environment variables!

## 📋 Setup Steps

### 1. Local Development Setup

1. Create a `.env.local` file in the root of your project:
```bash
# Resend API Key (get from https://resend.com/api-keys)
VITE_RESEND_API_KEY=re_your_api_key_here

# Email Configuration
VITE_FROM_EMAIL=Code Your Idea <noreply@codeyouridea.com>
VITE_TO_EMAIL=contact@codeyouridea.com
```

2. The `.env.local` file is already in `.gitignore` and won't be committed.

### 2. Vercel Production Setup

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following environment variables:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `VITE_RESEND_API_KEY` | `re_your_api_key_here` | Production, Preview, Development |
   | `VITE_FROM_EMAIL` | `Code Your Idea <noreply@codeyouridea.com>` | Production, Preview, Development |
   | `VITE_TO_EMAIL` | `contact@codeyouridea.com` | Production, Preview, Development |

4. Click **Save**
5. **Redeploy** your application for changes to take effect

### 3. Get Your Resend API Key

1. Sign up at [https://resend.com](https://resend.com)
2. Go to **API Keys** section
3. Create a new API key
4. Copy the key (starts with `re_`)
5. Add it to your environment variables

### 4. Verify Your Domain

1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `codeyouridea.com`)
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

## 🧪 Testing Your Email Service

### Option 1: Test via Browser Console

Open your browser console and run:

```javascript
import { testEmailService } from './src/utils/emailService';
testEmailService().then(result => console.log(result));
```

### Option 2: Test via Contact Form

Simply use the contact form on your website - it will send a test email to your configured `TO_EMAIL`.

### Option 3: Test Career Application

Submit a test application through the Career page to verify file attachments work.

## ✅ Verification Checklist

- [ ] API key added to `.env.local` for local development
- [ ] API key added to Vercel environment variables
- [ ] Domain verified in Resend dashboard
- [ ] DNS records added correctly
- [ ] Test email sent successfully
- [ ] Contact form working
- [ ] Career application form working

## 🔍 Troubleshooting

### "API key is not set" Warning
- Make sure you've created `.env.local` file
- Restart your development server after adding environment variables
- Check that variable names start with `VITE_`

### Emails Not Sending
- Verify your domain is verified in Resend
- Check that DNS records are correct
- Ensure API key is correct
- Check browser console for error messages

### Vercel Deployment Issues
- Make sure environment variables are set in Vercel dashboard
- Redeploy after adding environment variables
- Check Vercel build logs for errors

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

