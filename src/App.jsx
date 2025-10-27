import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="relative border-t border-slate-200/60 py-10 bg-white">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-20 max-w-3xl rounded-full bg-gradient-to-r from-blue-200/50 via-indigo-200/50 to-cyan-200/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} FileSync. All rights reserved.</p>
        <div className="text-sm text-slate-600">Privacy-first • No ads • No tracking</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <section id="security" className="relative py-20 bg-slate-900 text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight"
              >
                Security & privacy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-slate-200"
              >
                Local transfers never leave your network. Remote transfers are validated by secure functions, use expiring links, and can be encrypted before upload.
              </motion.p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: 'Local only',
                  desc: 'When devices are nearby, transfers stay peer‑to‑peer and offline.',
                },
                {
                  title: 'Validated downloads',
                  desc: 'Short keys trigger server‑side checks before any file URL is returned.',
                },
                {
                  title: 'Auto‑expire',
                  desc: 'Cloud files expire after a configurable window (e.g., 24h).',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-2 text-white/90"><Shield className="h-4 w-4" /> <h3 className="font-semibold">{item.title}</h3></div>
                  <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
