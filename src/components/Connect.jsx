import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Send, Phone, Mail } from 'lucide-react';

const testimonials = [
  {
    name: 'Amina K.',
    role: 'Data Track',
    quote:
      'I found my internship through peers I met here. The workshops made concepts finally click.',
    color: 'from-rose-100 to-rose-50',
  },
  {
    name: 'Leo R.',
    role: 'Product & UX',
    quote:
      'Supportive, kind, and practical. I joined a project team and learned more in a month than a whole semester.',
    color: 'from-sky-100 to-sky-50',
  },
  {
    name: 'Maya S.',
    role: 'Cloud & Automation',
    quote:
      'Study groups kept me motivated. I love how inclusive and welcoming everyone is.',
    color: 'from-emerald-100 to-emerald-50',
  },
];

function Avatar({ name, color }) {
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className={`mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${color} text-slate-800 font-semibold`}>{initials}</div>
  );
}

export default function Connect() {
  return (
    <section id="connect" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Testimonials */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold text-slate-900 md:text-4xl"
        >
          Member Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-slate-600"
        >
          Real voices from students growing in Information Systems.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center">
                <Avatar name={t.name} color={t.color} />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-600">{t.role}</div>
                </div>
              </div>
              <p className="text-slate-700">“{t.quote}”</p>
            </motion.blockquote>
          ))}
        </div>

        {/* Contact & Social */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold text-slate-900">Stay Connected</h3>
            <p className="mt-2 text-slate-600">
              Join our spaces and say hello. We announce events, share resources, and help each other out.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm transition-colors hover:bg-slate-800"
                aria-label="Join our Discord or similar community"
              >
                <MessageCircle size={18} /> Community Chat
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-800 transition-colors hover:bg-slate-50"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-800 transition-colors hover:bg-slate-50"
                aria-label="Message us on Telegram"
              >
                <Send size={18} /> Telegram
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
              <div className="flex items-center gap-3 text-slate-700">
                <Phone size={18} aria-hidden="true" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-slate-700">
                <Mail size={18} aria-hidden="true" />
                <span>hello@is-community.edu</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            aria-labelledby="contact-heading"
          >
            <h3 id="contact-heading" className="font-display text-2xl font-semibold text-slate-900">
              Contact Us
            </h3>
            <p className="mt-2 text-slate-600">Have a question or idea? We’d love to hear from you.</p>
            <div className="mt-6 grid gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-slate-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 text-center">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-slate-900" />
                <span className="font-semibold text-slate-900">IS Community</span>
              </div>
              <nav className="flex items-center gap-4 text-sm text-slate-700">
                <a href="#about" className="rounded px-2 py-1 hover:bg-white">About</a>
                <a href="#activities" className="rounded px-2 py-1 hover:bg-white">Activities</a>
                <a href="#connect" className="rounded px-2 py-1 hover:bg-white">Connect</a>
              </nav>
            </div>
            <p className="mt-4 text-sm text-slate-500">© {new Date().getFullYear()} IS Community. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
