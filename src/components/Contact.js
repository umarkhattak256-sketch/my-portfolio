import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.send(
        'service_exvbg3b',
        'template_r9sraok',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          email: formData.email,
        },
        'nqRpUfAwFRV-QeAQ1'
      );
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gradient-to-br from-dark via-darkCard/20 to-dark' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Get In <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Have a project in mind? Let's collaborate and create something amazing together.
        </p>

        <form onSubmit={handleSubmit} className={`card-shadow p-8 rounded-2xl backdrop-blur-sm ${isDark ? 'bg-dark/40 border border-gray-800' : 'bg-white/50 border border-gray-200'} space-y-6`}>
          <div>
            <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg border transition-all ${isDark ? 'bg-dark/50 border-gray-700 text-white focus:border-blue-500' : 'bg-white/50 border-gray-300 text-gray-900 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500/20`} placeholder="Your name" />
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg border transition-all ${isDark ? 'bg-dark/50 border-gray-700 text-white focus:border-blue-500' : 'bg-white/50 border-gray-300 text-gray-900 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500/20`} placeholder="your.email@example.com" />
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className={`w-full px-4 py-3 rounded-lg border transition-all resize-none ${isDark ? 'bg-dark/50 border-gray-700 text-white focus:border-blue-500' : 'bg-white/50 border-gray-300 text-gray-900 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500/20`} placeholder="Your message here..." />
          </div>

          {success && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg font-semibold">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white p-4 rounded-lg font-semibold">
              ✕ {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;