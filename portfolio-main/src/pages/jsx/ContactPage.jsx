import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ContactPage.css';
import Navigation from '../../common/jsx/Navigation';
import BackgroundAnimations from '../../common/jsx/BackgroundAnimations';

const ContactPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Your contact details - Updated from resume
  const contactDetails = {
    email: 'narendrayadavbudigi@gmail.com',
    location: 'Chagalamarri, Kurnool, Andhra Pradesh, India',
    github: 'Narendrabudigi',
    linkedin: 'narendrabudigi',
    leetcode: 'NarendraBudigi'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = `Portfolio Contact: ${formData.subject}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from Narendra Budigi's portfolio contact form.
    `.trim();

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    const mailtoLink = `mailto:${contactDetails.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleSocialClick = (platform) => {
    const urls = {
      github: `https://github.com/${contactDetails.github}`,
      linkedin: `https://linkedin.com/in/${contactDetails.linkedin}`,
      leetcode: `https://leetcode.com/u/${contactDetails.leetcode}`
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="contact-page">
      <BackgroundAnimations />
      <Navigation 
        showMenu={showMenu}
        isMobile={isMobile}
        toggleMenu={() => setShowMenu(!showMenu)}
        closeMenu={() => isMobile && setShowMenu(false)}
        currentPage="contact"
      />

      <div className={`content-overlay ${showMenu && isMobile ? 'expanded' : ''}`}>
        <main className="main-content">
          <section className="contact-section">
            {/* Header */}
            <div className="section-header">
              <h1 className="text-gradient">
                Get In <span>Touch</span>
              </h1>
              <p className="subtitle">
                Interested in software development, full-stack projects, or data-driven solutions? Let’s connect and discuss opportunities to work together.
              </p>
              <div className="header-divider"></div>
            </div>

            {/* Contact Container */}
            <div className="contact-container">
              {/* Contact Information */}
              <div className="contact-info">
                <div className="info-header">
                  <h2>Contact Information</h2>
                  <p>Feel free to reach out through any of these channels</p>
                </div>

                <div className="contact-details">
                  <a href={`mailto:${contactDetails.email}`} className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <p>{contactDetails.email}</p>
                    </div>
                  </a>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Location</h3>
                      <p>{contactDetails.location}</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Response Time</h3>
                      <p>Within 24 hours</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Availability</h3>
                      <p>Open to internships and new opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-links">
                  <a 
                    href="#" 
                    className="social-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSocialClick('github');
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="#" 
                    className="social-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSocialClick('linkedin');
                    }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a 
                    href="#" 
                    className="social-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSocialClick('leetcode');
                    }}
                  >
                    <i className="fas fa-code"></i>
                  </a>
                  <a 
                    href={`mailto:${contactDetails.email}`} 
                    className="social-link"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="form-header">
                  <h2>Send Message</h2>
                  <p>Fill out the form and I'll get back to you as soon as possible</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Tell me about the opportunity, project, collaboration, or any details you'd like to discuss..."
                      required
                      minLength="10"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Preparing Email...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message via Gmail
                      </>
                    )}
                  </button>

                  {isSubmitted && (
                    <div className="success-message">
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;