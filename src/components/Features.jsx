import { Wifi, Globe, Download, Upload, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, desc, badge, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay }}
    className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded hidden sm:block">
        {badge}
      </div>
    </div>
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600 text-sm">{desc}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-24 mx-auto h-40 max-w-3xl rounded-full bg-gradient-to-r from-blue-200/40 via-indigo-200/40 to-cyan-200/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            Two modes. One seamless experience.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Whether you're on the same network or miles apart, FileSync picks the best route automatically.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={Wifi} title="Local discovery" desc="Find nearby devices instantly using mDNS or UDP broadcast." badge="Local" delay={0.05} />
          <FeatureCard icon={Download} title="Direct transfer" desc="High‑speed P2P over TCP/WebRTC. Internet not required." badge="Local" delay={0.1} />
          <FeatureCard icon={Globe} title="Secure relay" desc="Upload to Supabase Storage with expiring URLs via Edge Functions." badge="Internet" delay={0.15} />
          <FeatureCard icon={Clock} title="Auto‑expiration" desc="Files are stored temporarily (e.g., 24h) to protect privacy." badge="Internet" delay={0.2} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">Sending</h3>
            <p className="mt-2 text-sm text-slate-600">Pick one or many recipients. Files travel over the fastest available path. If local fails, cloud kicks in automatically.</p>
            <div className="mt-4 flex items-center gap-2 text-slate-700 text-sm">
              <Upload className="h-4 w-4 text-blue-600" /> Drag & drop, share sheet, or file picker
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">Receiving</h3>
            <p className="mt-2 text-sm text-slate-600">Approve incoming transfers locally. For remote, enter a short key to fetch a validated, expiring link.</p>
            <div className="mt-4 flex items-center gap-2 text-slate-700 text-sm">
              <Download className="h-4 w-4 text-blue-600" /> Save to device storage with one tap
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex items-center gap-3 text-sm text-slate-600"
        >
          <Shield className="h-4 w-4 text-blue-600" /> End‑to‑end privacy mindset. Local stays local; remote links expire.
        </motion.div>
      </div>
    </section>
  );
}
