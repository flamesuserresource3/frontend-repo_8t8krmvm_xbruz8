import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Sparkles, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Inclusive Community',
    desc: 'Open to all backgrounds and levels — everyone has a place here.',
  },
  {
    icon: Heart,
    title: 'Support & Wellbeing',
    desc: 'We celebrate progress, share resources, and look out for one another.',
  },
  {
    icon: BookOpen,
    title: 'Curiosity & Learning',
    desc: 'Hands-on workshops, study groups, and real projects to grow skills.',
  },
  {
    icon: Sparkles,
    title: 'Future-Focused',
    desc: 'Build a portfolio, meet mentors, and discover career paths in IS.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold text-slate-900 md:text-4xl"
        >
          About Our Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-slate-600"
        >
          We bring together students interested in the intersection of technology, business, and people. Our mission is simple: make it easier to learn, connect, and build things that matter — in a supportive, human-centered space.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
