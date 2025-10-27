import { Smartphone, Monitor, KeyRound, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Step = ({ number, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay }}
    className="relative pl-10"
  >
    <div className="absolute left-0 top-0 h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow ring-2 ring-white/30">
      {number}
    </div>
    <h4 className="font-semibold text-slate-900">{title}</h4>
    <p className="text-sm text-slate-600 mt-1">{desc}</p>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-24 max-w-3xl rounded-full bg-gradient-to-r from-cyan-200/40 via-blue-200/40 to-indigo-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
            >
              How it works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-slate-600"
            >
              A simple flow that adapts to your connection — no setup required.
            </motion.p>
            <div className="mt-8 space-y-6">
              <Step number="1" title="Discover devices" desc="Nearby devices appear automatically on the same Wi‑Fi or hotspot." />
              <Step number="2" title="Pick files & recipients" desc="Select one or multiple targets and choose files to send." delay={0.05} />
              <Step number="3" title="Local or cloud transfer" desc="Transfers use fast local P2P. If remote, files upload to Supabase with a short key." delay={0.1} />
              <Step number="4" title="Secure download" desc="Receiver approves locally, or enters the key to validate and download via an Edge Function." delay={0.15} />
            </div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="pointer-events-none absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-200 via-slate-200 to-emerald-200" />
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2 text-slate-700"><Smartphone className="h-5 w-5 text-blue-600" /> Mobile</div>
                  <p className="mt-2 text-sm text-slate-600">Native feel on Android & iOS with share sheet integration.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2 text-slate-700"><Monitor className="h-5 w-5 text-blue-600" /> Desktop & Web</div>
                  <p className="mt-2 text-sm text-slate-600">Fast desktop transfers. Web supports manual save or folder access in Chrome.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2 text-slate-700"><KeyRound className="h-5 w-5 text-blue-600" /> Short keys</div>
                  <p className="mt-2 text-sm text-slate-600">Share a short code to fetch expiring links securely.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-blue-600" /> No accounts for local</div>
                  <p className="mt-2 text-sm text-slate-600">Open the app and share — no login needed for local transfers.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
