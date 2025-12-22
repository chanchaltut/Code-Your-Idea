import Swal from 'sweetalert2';
import { sendContactEmail, sendQuoteEmail, sendEmailViaMailto } from './emailService';

// Custom green theme styles
const customStyles = {
  confirmButton: '#3F51B5',
  cancelButton: '#6b7280',
  popup: '#ffffff',
  title: '#1a0a2d',
  content: '#4b5563'
};

// Smooth scroll function
export const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Success Modal
export const showSuccessModal = (title = "Success!", message = "Operation completed successfully!") => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    confirmButtonColor: customStyles.confirmButton,
    confirmButtonText: 'Great!',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: true,
    showCloseButton: true,
    background: customStyles.popup,
    color: customStyles.title,
  });
};

// Error Modal
export const showErrorModal = (title = "Oops!", message = "Something went wrong. Please try again.") => {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: message,
    confirmButtonColor: customStyles.confirmButton,
    confirmButtonText: 'Try Again',
    showCloseButton: true,
    background: customStyles.popup,
    color: customStyles.title,
  });
};

// Warning/Incomplete Modal
export const showWarningModal = (title = "Please Complete!", message = "Please fill in all required fields.") => {
  return Swal.fire({
    icon: 'warning',
    title: title,
    text: message,
    confirmButtonColor: customStyles.confirmButton,
    confirmButtonText: 'Got it!',
    showCloseButton: true,
    background: customStyles.popup,
    color: customStyles.title,
  });
};

// Quote Request Modal
export const showQuoteModal = () => {
  return Swal.fire({
    title: ' Get Your Project Quote',
    html: `
      <div style="text-align: left; margin: 20px 0;">
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1a0a2d;">Project Type *</label>
          <select id="quote-project-type" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 14px; background: white; color: #1a0a2d;">
            <option value="">Select Project Type</option>
            <option value="website">Website Development</option>
            <option value="app">Mobile App Development</option>
            <option value="both">Website + App</option>
            <option value="consultation">Just a Consultation</option>
            <option value="undecided">Not specific or decided yet</option>
          </select>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1a0a2d;">Estimated Budget *</label>
          <select id="quote-budget" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 14px; background: white; color: #1a0a2d;">
            <option value="">Select Budget Range</option>
            <option value="Under $500">Under $500</option>
            <option value="$500-$1000">$500-$1000</option>
            <option value="$1000-$2000">$1000-$2000</option>
            <option value="$2000-$5000">$2000-$5000</option>
            <option value="$5000-$10000">$5000-$10000</option>
          </select>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1a0a2d;">Timeline *</label>
          <select id="quote-timeline" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 14px; background: white; color: #1a0a2d;">
            <option value="">Select Timeline</option>
            <option value="asap">ASAP (Rush Project)</option>
            <option value="1-2weeks">1-2 Weeks</option>
            <option value="1month">1 Month</option>
            <option value="2-3months">2-3 Months</option>
            <option value="flexible">Flexible Timeline</option>
          </select>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1a0a2d;">Brief Description *</label>
          <textarea id="quote-description" placeholder="Tell us about your project, features needed, etc." style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 14px; min-height: 80px; resize: vertical; background: white; color: #1a0a2d;"></textarea>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 600; color: #1a0a2d;">Contact Email *</label>
          <input type="email" id="quote-email" placeholder="your@email.com" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 14px; background: white; color: #1a0a2d;">
        </div>
      </div>
    `,
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: customStyles.confirmButton,
    cancelButtonColor: customStyles.cancelButton,
    confirmButtonText: 'Get My Quote ',
    cancelButtonText: 'Maybe Later',
    background: customStyles.popup,
    color: customStyles.title,
    width: '500px',
    preConfirm: () => {
      const projectType = document.getElementById('quote-project-type').value;
      const budget = document.getElementById('quote-budget').value;
      const timeline = document.getElementById('quote-timeline').value;
      const description = document.getElementById('quote-description').value;
      const email = document.getElementById('quote-email').value;

      if (!projectType || !budget || !timeline || !description || !email) {
        Swal.showValidationMessage('Please fill in all required fields!');
        return false;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        Swal.showValidationMessage('Please enter a valid email address!');
        return false;
      }

      return { projectType, budget, timeline, description, email };
    }
  }).then(async (result) => {
    if (result.isConfirmed) {
      // Show loading modal
      Swal.fire({
        title: 'Sending Quote Request...',
        html: 'Please wait while we process your request.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Actually send the email
      const emailResult = await sendQuoteEmail(result.value);

      if (emailResult.success) {
        showSuccessModal(
          'Quote Request Sent!',
          'We\'ll prepare your custom quote and send it to your email within 24 hours. Our team will also call you to discuss details!'
        );
      } else {
        showErrorModal(
          'Quote Request Failed',
          emailResult.message + ' You can also contact us directly via WhatsApp or email.'
        );

        // Fallback to mailto as backup
        const fallbackBody = `Project Type: ${result.value.projectType}\nBudget: ${result.value.budget}\nTimeline: ${result.value.timeline}\nDescription: ${result.value.description}`;
        setTimeout(() => {
          sendEmailViaMailto('Quote Request', fallbackBody);
        }, 2000);
      }
    }
  });
};

// Let's Talk Modal
export const showLetsTalkModal = () => {
  return Swal.fire({
    title: '💬 Let\'s Talk!',
    html: `
      <div style="text-align: center; margin: 20px 0;">
        <p style="margin-bottom: 25px; color: #4b5563; font-size: 16px;">Choose how you'd like to connect with us:</p>
        
        <div style="display: flex; flex-direction: column; gap: 15px; max-width: 300px; margin: 0 auto;">
          <a href="https://wa.me/916370510539?text=Hi! I'm interested in discussing a project with Code Your Idea." 
             target="_blank" 
             style="display: flex; align-items: center; justify-content: center; gap: 10px; padding: 15px 20px; background: #25D366; color: white; text-decoration: none; border-radius: 10px; font-weight: 600; transition: all 0.3s;">
             WhatsApp Chat
          </a>
          
          <a href="mailto:contact@codeyouridea.com?subject=Project Discussion&body=Hi! I'd like to discuss a project with Code Your Idea." 
             style="display: flex; align-items: center; justify-content: center; gap: 10px; padding: 15px 20px; background: #3F51B5; color: white; text-decoration: none; border-radius: 10px; font-weight: 600; transition: all 0.3s;">
             Send Email
          </a>
          
          <button onclick="window.location.href='tel:+916370510539'" 
                  style="display: flex; align-items: center; justify-content: center; gap: 10px; padding: 15px 20px; background: #1a0a2d; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: all 0.3s;">
             Call Us Now
          </button>
        </div>
        
        <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
          <strong>Working Hours:</strong> Mon-Fri, 9 AM - 7 PM IST
        </p>
      </div>
    `,
    showConfirmButton: true,
    showCancelButton: false,
    showCloseButton: true,
    confirmButtonColor: customStyles.confirmButton,
    confirmButtonText: 'Schedule a Call Instead',
    background: customStyles.popup,
    color: customStyles.title,
    width: '400px',
  }).then((result) => {
    if (result.isConfirmed) {
      scrollToSection('contact');
      showSuccessModal(
        'Great Choice! ',
        'Scroll down to our contact form and mention your preferred call time. We\'ll reach out to you!'
      );
    }
  });
};

// Auto-fill contact form
export const autoFillContactForm = (projectType) => {
  scrollToSection('contact');

  // Wait for scroll to complete, then auto-fill
  setTimeout(() => {
    const projectSelect = document.querySelector('select[name="project"]');
    if (projectSelect) {
      projectSelect.value = projectType;
      projectSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }

    showSuccessModal(
      'Ready to Start!',
      'We\'ve selected your project type. Just fill in your details and we\'ll get started!'
    );
  }, 1000);
};

// Contact form submission
export const handleContactSubmission = async (formData) => {
  try {
    // Actually send the email using EmailJS
    const emailResult = await sendContactEmail(formData);

    if (emailResult.success) {
      showSuccessModal(
        'Message Sent Successfully!',
        'Thank you for reaching out! We\'ll get back to you within 24 hours with a detailed response.'
      );
      return true;
    } else {
      showErrorModal(
        'Message Failed to Send 😞',
        emailResult.message
      );

      // Fallback to mailto as backup
      const fallbackBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nProject: ${formData.project || 'Not specified'}\nMessage: ${formData.message}`;
      setTimeout(() => {
        sendEmailViaMailto(`Contact from ${formData.name}`, fallbackBody);
      }, 2000);

      return false;
    }
  } catch (error) {
    console.error('Contact submission error:', error);
    showErrorModal(
      'Message Failed to Send 😞',
      'There was a technical issue. Please try contacting us directly via WhatsApp or phone.'
    );

    // Fallback to mailto
    const fallbackBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nProject: ${formData.project || 'Not specified'}\nMessage: ${formData.message}`;
    setTimeout(() => {
      sendEmailViaMailto(`Contact from ${formData.name}`, fallbackBody);
    }, 2000);

    return false;
  }
}; 