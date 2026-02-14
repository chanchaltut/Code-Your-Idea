// Website URL and Section Links
const WEBSITE_URL = 'https://www.codeyouridea.com'; // Update this with your actual domain
const SECTION_LINKS = {
  home: `${WEBSITE_URL}/#`,
  about: `${WEBSITE_URL}/#about`,
  services: `${WEBSITE_URL}/#services`,
  portfolio: `${WEBSITE_URL}/#portfolio`,
  contact: `${WEBSITE_URL}/#contact`,
  quote: `${WEBSITE_URL}/#contact`, // Quote form is in contact section
  testimonials: `${WEBSITE_URL}/#testimonials`,
  stats: `${WEBSITE_URL}/#stats`
};

// Email Configuration - Resend
// IMPORTANT: API keys should be stored in environment variables for security
// In Vite, use VITE_ prefix for client-side environment variables
const EMAIL_CONFIG = {
  // Resend Configuration - Uses environment variable (set in Vercel or .env file)
  RESEND_API_KEY: import.meta.env.VITE_RESEND_API_KEY || '', // Get from https://resend.com/api-keys
  FROM_EMAIL: import.meta.env.VITE_FROM_EMAIL || 'Code Your Idea <noreply@codeyouridea.com>', // Sender email (must be verified in Resend)
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL || 'contact@codeyouridea.com',
  USE_RESEND: true
};

// Validate that API key is set
if (!EMAIL_CONFIG.RESEND_API_KEY) {
  console.warn('⚠️ Resend API key is not set. Please set VITE_RESEND_API_KEY in your environment variables.');
}

// Enhanced Email Templates with Section Links
const EMAIL_TEMPLATES = {
  contactForm: (formData) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #3F51B5 0%, #5C6BC0 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Code Your Idea - Turning Ideas into Digital Reality</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #333F48; margin-bottom: 20px;">Contact Details</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Name:</strong> ${formData.name}
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3F51B5;">${formData.email}</a>
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Phone:</strong> ${formData.phone || 'Not provided'}
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Project Type:</strong> ${formData.project || 'Not specified'}
        </div>
        <div style="margin-bottom: 25px;">
          <strong style="color: #3F51B5;">Message:</strong><br>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 5px;">${formData.message}</div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
        
        <h3 style="color: #333F48; margin-bottom: 20px;">Quick Actions</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
          <a href="${SECTION_LINKS.services}" style="display: block; background: #3F51B5; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-align: center; font-weight: bold;">View Our Services</a>
          <a href="${SECTION_LINKS.portfolio}" style="display: block; background: #5C6BC0; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-align: center; font-weight: bold;">See Our Work</a>
        </div>
        
        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h4 style="color: #1976d2; margin: 0 0 10px 0;">Need to know more?</h4>
          <p style="margin: 0 0 15px 0; color: #333;">Explore our website to learn more about our services and see examples of our work:</p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${SECTION_LINKS.about}" style="color: #1976d2; text-decoration: none; font-weight: bold;">About Us</a> |
            <a href="${SECTION_LINKS.testimonials}" style="color: #1976d2; text-decoration: none; font-weight: bold;">Client Testimonials</a> |
            <a href="${SECTION_LINKS.stats}" style="color: #1976d2; text-decoration: none; font-weight: bold;">Our Stats</a> |
            <a href="${SECTION_LINKS.contact}" style="color: #1976d2; text-decoration: none; font-weight: bold;">Contact Info</a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; margin: 0; font-size: 14px;">
            This email was sent from the contact form on <a href="${WEBSITE_URL}" style="color: #3F51B5;">CodeYourIdea.com</a>
          </p>
        </div>
      </div>
    </div>
  `,

  quoteRequest: (quoteData) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #3F51B5 0%, #5C6BC0 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">New Quote Request</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Code Your Idea - Project Quote Inquiry</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #333F48; margin-bottom: 20px;">Project Details</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Project Type:</strong> ${quoteData.projectType}
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Budget Range:</strong> ${quoteData.budget}
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Timeline:</strong> ${quoteData.timeline}
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Contact Email:</strong> <a href="mailto:${quoteData.email}" style="color: #3F51B5;">${quoteData.email}</a>
        </div>
        <div style="margin-bottom: 25px;">
          <strong style="color: #3F51B5;">Project Description:</strong><br>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 5px;">${quoteData.description}</div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
        
        <h3 style="color: #333F48; margin-bottom: 20px;">Relevant Information</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
          <a href="${SECTION_LINKS.services}" style="display: block; background: #3F51B5; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-align: center; font-weight: bold;">Service Details</a>
          <a href="${SECTION_LINKS.portfolio}" style="display: block; background: #5C6BC0; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-align: center; font-weight: bold;">Similar Projects</a>
        </div>
        
        <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h4 style="color: #f57c00; margin: 0 0 10px 0;">Why Choose Code Your Idea?</h4>
          <ul style="margin: 0; padding-left: 20px; color: #333;">
            <li>Fast, responsive websites and apps</li>
            <li>Modern technology stack</li>
            <li>SEO optimized solutions</li>
            <li>Ongoing support and maintenance</li>
          </ul>
          <div style="margin-top: 15px;">
            <a href="${SECTION_LINKS.about}" style="color: #f57c00; text-decoration: none; font-weight: bold;">Learn More About Us →</a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; margin: 0; font-size: 14px;">
            Quote request from <a href="${WEBSITE_URL}" style="color: #3F51B5;">CodeYourIdea.com</a>
          </p>
        </div>
      </div>
    </div>
  `,

  welcomeEmail: (userData) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #3F51B5 0%, #5C6BC0 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Welcome to Code Your Idea!</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for reaching out to us</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #333F48; margin-bottom: 20px;">Hi ${userData.name},</h2>
        
        <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
          Thank you for contacting Code Your Idea! We're excited to help you bring your digital vision to life.
        </p>
        
        <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
          Our team will review your inquiry and get back to you within 24 hours with a detailed response and next steps.
        </p>
        
        <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #2e7d32; margin: 0 0 15px 0;">What happens next?</h3>
          <ol style="margin: 0; padding-left: 20px; color: #333;">
            <li>We'll review your project requirements</li>
            <li>Schedule a consultation call if needed</li>
            <li>Provide a detailed proposal and timeline</li>
            <li>Begin development once approved</li>
          </ol>
        </div>
        
        <h3 style="color: #333F48; margin-bottom: 20px;">Explore Our Work</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px;">
          <a href="${SECTION_LINKS.services}" style="display: block; background: #3F51B5; color: white; text-decoration: none; padding: 15px 20px; border-radius: 8px; text-align: center; font-weight: bold;">Our Services</a>
          <a href="${SECTION_LINKS.portfolio}" style="display: block; background: #5C6BC0; color: white; text-decoration: none; padding: 15px 20px; border-radius: 8px; text-align: center; font-weight: bold;">Portfolio</a>
          <a href="${SECTION_LINKS.testimonials}" style="display: block; background: #4caf50; color: white; text-decoration: none; padding: 15px 20px; border-radius: 8px; text-align: center; font-weight: bold;">Testimonials</a>
          <a href="${SECTION_LINKS.about}" style="display: block; background: #ff9800; color: white; text-decoration: none; padding: 15px 20px; border-radius: 8px; text-align: center; font-weight: bold;">About Us</a>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; margin: 0 0 10px 0; font-size: 14px;">
            Questions? Contact us anytime at <a href="mailto:contact@codeyouridea.com" style="color: #3F51B5;">contact@codeyouridea.com</a>
          </p>
          <p style="color: #6c757d; margin: 0; font-size: 14px;">
            Visit us at <a href="${WEBSITE_URL}" style="color: #3F51B5;">CodeYourIdea.com</a>
          </p>
        </div>
      </div>
    </div>
  `,

  careerApplication: (formData) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #3F51B5 0%, #5C6BC0 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">New Job Application</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Code Your Idea - Career Opportunity</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #333F48; margin-bottom: 20px;">Application Details</h2>
        
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <strong style="color: #1976d2;">Position Applied For:</strong> ${formData.position}
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Full Name:</strong> ${formData.name}
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3F51B5;">${formData.email}</a>
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Phone:</strong> ${formData.phone || 'Not provided'}
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #3F51B5;">Experience:</strong> ${formData.experience}
        </div>
        ${formData.linkedin ? `<div style="margin-bottom: 15px;"><strong style="color: #3F51B5;">LinkedIn:</strong> <a href="${formData.linkedin}" target="_blank" style="color: #3F51B5;">${formData.linkedin}</a></div>` : ''}
        
        <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e9ecef;">
          <h3 style="color: #333F48; margin-bottom: 15px;">Cover Letter</h3>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; white-space: pre-wrap; color: #333; line-height: 1.6;">
            ${formData.coverLetter}
          </div>
        </div>
        
        ${formData.resume ? `<div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
          <strong style="color: #856404;">Note:</strong> Resume file "${formData.resume.name || 'attached'}" has been submitted with this application.
        </div>` : ''}
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; margin: 0; font-size: 14px;">
            This application was submitted through the Code Your Idea careers page.
          </p>
        </div>
      </div>
    </div>
  `
};

// Send Contact Form Email using Resend
export const sendContactEmail = async (formData) => {
  try {
    // Check if API key is configured
    if (!EMAIL_CONFIG.RESEND_API_KEY) {
      console.error('Resend API key is not configured');
      return {
        success: false,
        message: 'Email service is not configured. Please contact the administrator.'
      };
    }

    const emailData = {
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: EMAIL_CONFIG.TO_EMAIL,
      reply_to: formData.email,
      subject: `New Contact from ${formData.name} - Code Your Idea`,
      html: EMAIL_TEMPLATES.contactForm(formData),
      text: `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nProject: ${formData.project || 'Not specified'}\n\nMessage:\n${formData.message}`
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_CONFIG.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();

    if (response.ok && result.id) {
      return {
        success: true,
        message: 'Email sent successfully! We\'ll get back to you within 24 hours.'
      };
    } else {
      console.error('Resend API error:', result);
      throw new Error(result.message || result.error?.message || 'Resend submission failed');
    }
  } catch (error) {
    console.error('Resend email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later or contact us directly.'
    };
  }
};

// Send Quote Request Email using Resend
export const sendQuoteEmail = async (quoteData) => {
  try {
    const emailData = {
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: EMAIL_CONFIG.TO_EMAIL,
      reply_to: quoteData.email,
      subject: `Quote Request - ${quoteData.projectType} - Code Your Idea`,
      html: EMAIL_TEMPLATES.quoteRequest(quoteData),
      text: `New Quote Request\n\nProject Type: ${quoteData.projectType}\nBudget: ${quoteData.budget}\nTimeline: ${quoteData.timeline}\nEmail: ${quoteData.email}\n\nDescription:\n${quoteData.description}`
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_CONFIG.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();

    if (response.ok && result.id) {
      return {
        success: true,
        message: 'Quote request sent successfully! We\'ll prepare your custom quote and send it within 24 hours.'
      };
    } else {
      throw new Error(result.message || 'Resend submission failed');
    }
  } catch (error) {
    console.error('Resend quote sending failed:', error);
    return {
      success: false,
      message: 'Failed to send quote request. Please try again later or contact us directly.'
    };
  }
};

// Send welcome email with section links using Resend
export const sendWelcomeEmail = async (userData) => {
  try {
    const emailData = {
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: userData.email,
      subject: 'Welcome to Code Your Idea!',
      html: EMAIL_TEMPLATES.welcomeEmail(userData),
      text: `Welcome to Code Your Idea!\n\nHi ${userData.name},\n\nThank you for contacting Code Your Idea! We're excited to help you bring your digital vision to life.\n\nOur team will review your inquiry and get back to you within 24 hours with a detailed response and next steps.`
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_CONFIG.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();

    if (response.ok && result.id) {
      return {
        success: true,
        message: 'Welcome email sent successfully!'
      };
    } else {
      throw new Error(result.message || 'Resend submission failed');
    }
  } catch (error) {
    console.error('Welcome email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send welcome email.'
    };
  }
};

// Helper function to convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Remove data URL prefix (data:application/pdf;base64,)
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};

// Send Career Application Email using Resend
export const sendCareerApplication = async (formData) => {
  try {
    const emailData = {
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: EMAIL_CONFIG.TO_EMAIL,
      reply_to: formData.email,
      subject: `Job Application - ${formData.position} - ${formData.name}`,
      html: EMAIL_TEMPLATES.careerApplication(formData),
      text: `New Job Application\n\nPosition: ${formData.position}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nExperience: ${formData.experience || 'Not provided'}\nLinkedIn: ${formData.linkedin || 'Not provided'}\n\nCover Letter:\n${formData.coverLetter || 'Not provided'}`
    };

    // Add resume file as attachment if provided
    if (formData.resume) {
      try {
        const base64Content = await fileToBase64(formData.resume);
        emailData.attachments = [
          {
            filename: formData.resume.name,
            content: base64Content
          }
        ];
      } catch (fileError) {
        console.error('Error converting file to base64:', fileError);
        // Continue without attachment if conversion fails
      }
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_CONFIG.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();

    if (response.ok && result.id) {
      return {
        success: true,
        message: 'Application submitted successfully! We\'ll review your application and get back to you soon.'
      };
    } else {
      throw new Error(result.message || 'Resend submission failed');
    }
  } catch (error) {
    console.error('Career application email sending failed:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again later or contact us directly.'
    };
  }
};

// Test Email Function - For testing Resend integration
export const testEmailService = async () => {
  try {
    if (!EMAIL_CONFIG.RESEND_API_KEY) {
      return {
        success: false,
        message: '❌ API key is not configured. Please set VITE_RESEND_API_KEY environment variable.'
      };
    }

    const testEmailData = {
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: EMAIL_CONFIG.TO_EMAIL,
      subject: '🧪 Test Email from Code Your Idea Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #3F51B5 0%, #5C6BC0 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">✅ Email Service Test</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Code Your Idea - Resend Integration</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333F48; margin-bottom: 20px;">Test Successful! 🎉</h2>
            <p style="color: #333; line-height: 1.6;">
              This is a test email to verify that your Resend email service is working correctly.
            </p>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="color: #2e7d32; margin: 0; font-weight: bold;">✅ Email Configuration:</p>
              <ul style="color: #333; margin: 10px 0 0 20px;">
                <li>From: ${EMAIL_CONFIG.FROM_EMAIL}</li>
                <li>To: ${EMAIL_CONFIG.TO_EMAIL}</li>
                <li>Service: Resend</li>
                <li>Status: Active</li>
              </ul>
            </div>
            <p style="color: #6c757d; margin-top: 20px; font-size: 14px;">
              If you received this email, your email service is configured correctly!
            </p>
          </div>
        </div>
      `,
      text: `Test Email from Code Your Idea\n\nThis is a test email to verify that your Resend email service is working correctly.\n\nIf you received this email, your email service is configured correctly!`
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_CONFIG.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testEmailData)
    });

    const result = await response.json();

    if (response.ok && result.id) {
      return {
        success: true,
        message: `✅ Test email sent successfully! Email ID: ${result.id}. Check your inbox at ${EMAIL_CONFIG.TO_EMAIL}`,
        emailId: result.id
      };
    } else {
      throw new Error(result.message || 'Resend test failed');
    }
  } catch (error) {
    console.error('Test email sending failed:', error);
    return {
      success: false,
      message: `❌ Test failed: ${error.message || 'Unknown error'}`
    };
  }
};

// Send email via mailto link (fallback method)
export const sendEmailViaMailto = (subject, body) => {
  const mailtoLink = `mailto:${EMAIL_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

// Get section links for external use
export const getSectionLinks = () => SECTION_LINKS;

// Get website URL for external use
export const getWebsiteUrl = () => WEBSITE_URL;

// Configuration instructions for setup
export const EMAIL_SETUP_INSTRUCTIONS = `
Enhanced Email Service Setup Instructions:

1. Update the WEBSITE_URL constant with your actual domain
2. Ensure all section IDs match your website sections:
   - Home: # (root)
   - About: #about
   - Services: #services
   - Portfolio: #portfolio
   - Contact: #contact
   - Testimonials: #testimonials
   - Stats: #stats

3. Web3Forms Configuration:
   - Go to https://web3forms.com/
   - Get your access key
   - Update WEB3FORMS_ACCESS_KEY in EMAIL_CONFIG

4. Email Templates Include:
   - Contact Form Template with section links
   - Quote Request Template with relevant links
   - Welcome Email Template with exploration links

5. Features:
   - HTML email templates with professional design
   - Clickable links to different website sections
   - Responsive design for mobile email clients
   - Branded styling matching your website theme

Cost: Free for up to 250 emails/month with Web3Forms
`;

export default {
  sendContactEmail,
  sendQuoteEmail,
  sendWelcomeEmail,
  sendEmailViaMailto,
  getSectionLinks,
  getWebsiteUrl,
  EMAIL_SETUP_INSTRUCTIONS
}; 