import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Laptop, Lightbulb, Users } from 'lucide-react';

const activities = [
  {
    icon: Calendar,
    title: 'Events & Meetups',
    desc: 'Weekly sessions to share knowledge, discuss trends, and meet new friends.',
    color: 'from-rose-100 to-rose-50 text-rose-700',
  },
  {
    icon: Laptop,
    title: 'Workshops',
    desc: 'Hands-on learning in data, UX, product, cloud, automation, and more.',
    color: 'from-sky-100 to-sky-50 text-sky-700',
  },
  {
    icon: Lightbulb,
    title: 'Projects',
    desc: 'Team up to build real tools and portfolio pieces with mentorship.',
    color: 'from-emerald-100 to-emerald-50 text-emerald-700',
  },
  {
    icon: Users,
    title: 'Study Groups',
    desc: 'Peer-led groups that make tough topics approachable and fun.',
    color: 'from-violet-100 to-violet-50 text-violet-700',
  },
];

export default function Activities() {
  return (
    <section id="activities" className="relative bg-gradient-to-b from-white to-sky-50/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold text-slate-900 md:text-4xl"
        >
          Community Activities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-slate-600"
        >
          Explore upcoming events, practical workshops, and collaborative initiatives designed to help you thrive.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${color}`}>
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-100/60 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-rose-100/60 blur-2xl" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
