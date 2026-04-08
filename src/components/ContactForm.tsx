"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `MaxLife Development Inquiry - ${formData.service || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:Ryan@MaxLifeRealty.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-dark-card border border-gold/30 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-gray-400">
          Your email client should have opened. If not, please email us directly
          at Ryan@MaxLifeRealty.com
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-gold hover:text-gold-light text-sm transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Service Interest
          </label>
          <select
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white focus:border-gold focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="Commercial Real Estate">Commercial Real Estate</option>
            <option value="Residential Real Estate">Residential Real Estate</option>
            <option value="Handyman Services">Handyman Services</option>
            <option value="Engineering">Engineering</option>
            <option value="Cleaning Services">Cleaning Services</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Message *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project or how we can help..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-lg transition-colors text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
