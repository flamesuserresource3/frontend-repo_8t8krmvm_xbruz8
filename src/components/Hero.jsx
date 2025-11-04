import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-rose-50">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-white/70 px-4 py-1 text-sm text-sky-700 shadow-sm backdrop-blur-md"
          aria-label="Information Systems Student Community"
        >
          Information Systems Student Community
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-6xl"
        >
          Connect. Learn. Grow.
          <br className="hidden md:block" />
          Together in Information Systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg"
        >
          We’re a welcoming community of students exploring technology, business, and design. Join peers who support each other through workshops, study groups, and collaborative projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#connect"
            className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            Join the Community
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-slate-800 backdrop-blur-md transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
