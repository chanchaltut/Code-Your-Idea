# EmailJS Setup Guide for Code Your Idea

## **Quick Setup to Enable Real Email Sending**

Currently, the website has **real email functionality** implemented but needs EmailJS configuration to work. Follow these steps to enable email sending to `contact@codeyouridea.com`.

---

## **Step 1: Create EmailJS Account**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

---

## **Step 2: Add Email Service**

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service" 
3. Choose your email provider:
   - **Gmail** (Recommended)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Connect your `contact@codeyouridea.com` email account
5. Note down the **Service ID** (e.g., `service_xyz123`)

---

## **Step 3: Create Email Templates**

### **Template 1: Contact Form**
1. Go to "Email Templates" → "Create New Template"
2. **Template Name**: `Contact Form Submission`
3. **Template ID**: `template_contact_form`
4. **Subject**: `New Contact from {{from_name}}`
5. **Content**:
```
New contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}

Message:
{{message}}

---
Sent from Code Your Idea website
Time: {{date}}
```

### **Template 2: Quote Request**
1. Create another template
2. **Template Name**: `Quote Request`
3. **Template ID**: `template_quote_request`
4. **Subject**: `Quote Request - {{project_type}}`
5. **Content**:
```
New quote request from your website:

Project Type: {{project_type}}
Budget Range: {{budget}}
Timeline: {{timeline}}
Contact Email: {{from_email}}

Project Description:
{{description}}

---
Sent from Code Your Idea website
Time: {{date}}
```

---

## **Step 4: Get Your Public Key**

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `your_public_key_here`)
3. Copy this key

---

## **Step 5: Update Configuration**

Open `src/utils/emailService.js` and replace the placeholder values:

```javascript
const EMAIL_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',        // From Step 2
  TEMPLATE_ID_CONTACT: 'template_contact_form', // From Step 3
  TEMPLATE_ID_QUOTE: 'template_quote_request',  // From Step 3
  PUBLIC_KEY: 'your_actual_public_key',        // From Step 4
  TO_EMAIL: 'contact@codeyouridea.com'         // Your email
};
```

---

## **Step 6: Test the Integration**

1. Save your changes
2. Run `npm run build` and `npm run dev`
3. Test the contact form and quote request
4. Check your email inbox for test messages

---

## **📊 Usage Limits (Free Plan)**

- ✅ **200 emails/month** - FREE
- ✅ **Unlimited templates**
- ✅ **standard email services**
- ✅ **No credit card required**

For higher volumes, EmailJS offers paid plans starting at $15/month for 1000 emails.

---

## **What This Enables**

✅ **Contact Form**: Real emails to contact@codeyouridea.com  
✅ **Quote Requests**: Detailed project info via email  
✅ **Let's Discuss Modal**: Direct contact options + email fallback  
✅ **All Call-to-Actions**: Every button sends real emails  
✅ **Fallback System**: mailto: links if EmailJS fails  

---

## **🔧 Troubleshooting**

### **Emails not sending?**
1. Check browser console for errors
2. Verify Service ID and Public Key are correct
3. Ensure template IDs match exactly
4. Check EmailJS dashboard for error logs

### **Emails going to spam?**
1. Add your domain to EmailJS allowed origins
2. Use a verified email service (Gmail, Outlook)
3. Ask recipients to whitelist contact@codeyouridea.com

### **Need help?**
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: Check EmailJS dashboard for support options

---

## **⚡ Alternative: Manual Setup**

If you prefer not to use EmailJS, you can:

1. **Use the built-in mailto fallbacks** (opens email client)
2. **Integrate with a backend service** (Node.js, PHP, etc.)
3. **Use Netlify/Vercel forms** (if hosting on these platforms)

---

**Current Status**: Email service is fully implemented but needs EmailJS credentials to send real emails. The fallback system ensures users can always contact you via mailto, WhatsApp, or phone. 