import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle, MapPin, Sparkles, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission & trigger mail client
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Compose fallback mailto link
      const emailSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold tracking-wider text-sm md:text-base mb-2 uppercase">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project, opportunity, or collaboration in mind? Feel free to reach out via the form or through direct contact channels below.
          </p>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Let's <span className="text-blue-500">Connect</span>
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I am always excited to discuss software engineering challenges, distributed system designs, new product opportunities, and open-source collaborations.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-blue-500 hover:bg-gray-900/90 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">Email Address</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-blue-500 hover:bg-gray-900/90 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">Phone Number</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-blue-500 hover:bg-gray-900/90 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">LinkedIn Network</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Connect on LinkedIn
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-blue-500 hover:bg-gray-900/90 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">GitHub Profile</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Browse Repositories
                  </p>
                </div>
              </a>

              {/* Location indicator */}
              <div className="flex items-center gap-5 bg-gray-900/50 border border-gray-800/60 p-5 rounded-2xl">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">Location</p>
                  <p className="font-semibold text-gray-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Engineering Institution */}
              {personalInfo.institution && (
                <div className="flex items-center gap-5 bg-gray-900/50 border border-gray-800/60 p-5 rounded-2xl">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">Engineering Institution</p>
                    <p className="font-semibold text-gray-200">
                      {personalInfo.institution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl relative"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span>Send a Direct Message</span>
              <Sparkles className="w-4 h-4 text-blue-400" />
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <p className="text-sm">
                  Thank you! Your message has been prepared in your email client. I will respond promptly!
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-800/80 text-red-300 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                <p className="text-sm">
                  Please fill out all required fields before submitting.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Consultation / Full-Time Role"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  rows={6}
                  required
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Preparing Email...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
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
