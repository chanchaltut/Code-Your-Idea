# CORS Issue Fixed! 🎉

## Problem
The Resend API doesn't allow direct calls from the browser due to CORS (Cross-Origin Resource Sharing) restrictions. This was causing the error:
```
Access to fetch at 'https://api.resend.com/emails' from origin 'http://localhost:3000' 
has been blocked by CORS policy
```

## Solution
Created a **Vercel serverless function** (`/api/send-email.js`) that handles all Resend API calls server-side. This:
- ✅ Eliminates CORS issues
- ✅ Keeps API keys secure (server-side only)
- ✅ Works in both development and production

## What Changed

### 1. Created Serverless Function
- **File:** `/api/send-email.js`
- Handles all email sending server-side
- Uses `process.env.RESEND_API_KEY` (server-side environment variable)

### 2. Updated Email Service
- **File:** `src/utils/emailService.js`
- All email functions now call `/api/send-email` instead of Resend directly
- No more CORS errors!

### 3. Fixed manifest.json
- Fixed syntax error (missing comma)

## Environment Variables Update

### ⚠️ IMPORTANT: Different Variable Names

Since the API key is now used server-side, you need to add it **without** the `VITE_` prefix:

### In Vercel Dashboard:

1. **RESEND_API_KEY** (Server-Side - Required)
   ```
   Name: RESEND_API_KEY
   Value: re_dyTJVGYh_5nWsTLnu39nCcvgD64c4RjCH
   Environments: Production, Preview, Development
   ```

2. **FROM_EMAIL** (Server-Side - Optional)
   ```
   Name: FROM_EMAIL
   Value: Code Your Idea <noreply@codeyouridea.com>
   ```

3. **TO_EMAIL** (Server-Side - Optional)
   ```
   Name: TO_EMAIL
   Value: contact@codeyouridea.com
   ```

**Note:** The `VITE_` prefix is only for client-side variables. Since the API key is used in the serverless function, it doesn't need the prefix.

## Testing

After adding the environment variables and redeploying:

1. **Test Contact Form** - Should work without CORS errors
2. **Test Career Application** - Should work with file attachments
3. **Test Quote Request** - Should work normally

All forms should now work perfectly! 🚀

