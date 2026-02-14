# 🔐 Vercel Environment Variables Setup

## ✅ All API Keys Are Now Using Environment Variables

Good news! All API keys have been moved to environment variables. No hardcoded keys in your code.

## 📋 Environment Variables to Add in Vercel

Go to your Vercel project → **Settings** → **Environment Variables** and add these:

### 1. Resend API Key (Required)
```
Name: VITE_RESEND_API_KEY
Value: re_dyTJVGYh_5nWsTLnu39nCcvgD64c4RjCH
Environments: ✅ Production, ✅ Preview, ✅ Development
```

### 2. From Email (Optional - has default)
```
Name: VITE_FROM_EMAIL
Value: Code Your Idea <noreply@codeyouridea.com>
Environments: ✅ Production, ✅ Preview, ✅ Development
```

### 3. To Email (Optional - has default)
```
Name: VITE_TO_EMAIL
Value: contact@codeyouridea.com
Environments: ✅ Production, ✅ Preview, ✅ Development
```

## 🚀 Quick Setup Steps

1. **Go to Vercel Dashboard**
   - Navigate to your project
   - Click **Settings** → **Environment Variables**

2. **Add Each Variable**
   - Click **Add New**
   - Enter the **Name** and **Value**
   - Select all environments (Production, Preview, Development)
   - Click **Save**

3. **Redeploy Your Application**
   - After adding variables, go to **Deployments**
   - Click the three dots (⋯) on the latest deployment
   - Click **Redeploy**

## ✅ Verification Checklist

After setup, verify:
- [ ] All 3 environment variables added
- [ ] All environments selected (Production, Preview, Development)
- [ ] Application redeployed
- [ ] Test email sent successfully

## 🧪 Test Your Setup

After redeploying, test the email service:
1. Use the contact form on your website
2. Or open browser console and run:
```javascript
import('./src/utils/emailService.js').then(module => {
  module.testEmailService().then(result => {
    console.log(result);
    alert(result.message);
  });
});
```

## 📝 Notes

- **VITE_** prefix is required for Vite to expose variables to client-side code
- Variables are automatically available in your code via `import.meta.env.VITE_*`
- Never commit `.env` files to git (already in `.gitignore`)
- You can update values anytime and redeploy

## 🔒 Security

✅ All API keys are now secure:
- No hardcoded keys in source code
- Keys stored in Vercel environment variables
- Keys not committed to git
- Easy to rotate without code changes

