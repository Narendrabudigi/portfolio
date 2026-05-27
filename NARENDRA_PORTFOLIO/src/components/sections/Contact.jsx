import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT, SOCIAL_LINKS } from '../../constants';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus('error');
      setErrorMessage('All fields are required.');
      return;
    }

    if (!validateEmail(formData.user_email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_36a4yxj',
        'template_tqtq6ji',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        '2k39ectNR7UwumTXm'
      );

      setStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and challenges.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-0.5">Email Me</span>
                  <a href={`mailto:${CONTACT.email}`} className="text-lg hover:text-primary transition-colors font-medium">{CONTACT.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-0.5">Location</span>
                  <span className="text-lg font-medium">Remote / India</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <motion.a 
                href={SOCIAL_LINKS.github} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#fff" }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 transition-all border border-slate-700 shadow-lg"
                title="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#0077b5" }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 transition-all border border-slate-700 shadow-lg"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-primary transition-colors" 
                    placeholder="Your Name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-primary transition-colors" 
                    placeholder="Your Email" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="What's on your mind?" 
                  required
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-500 text-sm bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                  <CheckCircle size={16} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-primary text-slate-900 font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
