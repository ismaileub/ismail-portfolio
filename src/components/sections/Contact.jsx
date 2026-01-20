import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    { icon: "language", label: "Website", href: "#", color: "from-blue-400 to-cyan-500" },
    { icon: "mail", label: "Email", href: "mailto:meriem@example.com", color: "from-red-400 to-pink-500" },
    { icon: "phone", label: "WhatsApp", href: "https://wa.me/213123456789", color: "from-green-400 to-emerald-500" },
    { icon: "badge", label: "LinkedIn", href: "https://linkedin.com/in/meriem", color: "from-blue-500 to-blue-700" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 px-4 lg:px-40 container mx-auto">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
          Have a question or want to work together? Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        {/* Social Links */}
        <div className="space-y-6">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              whileHover={{ x: 8 }}
            >
              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 group-hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{social.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors text-white">
                    {social.label}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Click to connect</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="lg:col-span-2 space-y-6"
        >
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-white">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent hover:border-primary focus:border-primary focus:outline-none transition-colors text-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-white">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent hover:border-primary focus:border-primary focus:outline-none transition-colors text-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent hover:border-primary focus:border-primary focus:outline-none transition-colors text-lg resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary hover:bg-primary/90 disabled:bg-slate-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
