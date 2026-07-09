import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import confetti from 'canvas-confetti';
import styles from './Contact.module.css';
import { socialLinks } from '../../../data/socialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'e4b64b98-b6c5-43ee-992a-85087f17c5da',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Trigger premium confetti celebration!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#06b6d4', '#ec4899']
        });

        setFormData({ name: '', email: '', phone: '', message: '' });

        // Clear success notification after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch {
      setIsSubmitting(false);
      setErrors({ submit: 'Something went wrong. Please try again or email me directly.' });
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section section-alt`}>
      <div className="glow-orb glow-orb-2"></div>
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className={styles.layout}>
          {/* Contact Information */}
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>Let's talk about your project</h3>
            <p className={styles.infoDesc}>
              I'm open to discussing frontend roles, project collaborations, or just connecting about web tech. Feel free to reach out via the form or my social profiles!
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto: premyadavofficial15@gmail.com" className={styles.detailValue}>
                    premyadavofficial15@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  <Phone size={20} />
                </div>
                <div>
                  <span className={styles.detailLabel}>Phone</span>
                  <a href="tel:+917032536697" className={styles.detailValue}>
                    +91 70325 36697
                  </a>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <span className={styles.detailLabel}>WhatsApp</span>
                  <a href="https://wa.me/917032536697" target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                    +91 70325 36697
                  </a>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>India</span>
                </div>
              </div>
            </div>

            <div className={styles.socialBox}>
              {socialLinks.filter(l => l.name !== 'Email').map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={link.name}
                >
                  {link.icon} {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={`${styles.formColumn} glass`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitSuccess ? (
              <div className={styles.successMessage}>
                <CheckCircle size={60} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successDesc}>
                  Thank you for reaching out, Prem. I will get back to you as soon as possible!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone / WhatsApp <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. +91 70325 36697"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="How can I help you?"
                  ></textarea>
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>

                {errors.submit && (
                  <p style={{ color: 'var(--color-error, #f87171)', marginTop: '8px', fontSize: '0.875rem' }}>
                    {errors.submit}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
