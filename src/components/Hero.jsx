import { Wifi, Globe, Shield, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[88vh] overflow-hidden">
      {/* Interactive 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient vignettes that don't block pointer events */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-gradient-to-b from-blue-500/30 via-indigo-500/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-gradient-to-t from-emerald-400/30 via-cyan-400/20 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white/90 shadow-sm">
                <Rocket className="h-3.5 w-3.5" />
                Lightning-fast local & secure remote
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)]">
                File sharing, elevated.
              </h1>
              <p className="mt-4 text-lg text-white/85 max-w-xl">
                FileSync chooses the fastest, safest path for your files. Share instantly on the same network or use encrypted, expiring links when apart.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#get-started"
                  className="group inline-flex items-center rounded-xl bg-white/90 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-blue-500/20 ring-1 ring-white/50 backdrop-blur hover:bg-white"
                >
                  Get started free
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-xl bg-slate-900/50 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur hover:bg-slate-900/60"
                >
                  See features
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/90"><Wifi className="h-4 w-4 text-white" /> Local first</div>
                <div className="flex items-center gap-2 text-white/90"><Globe className="h-4 w-4 text-white" /> Works anywhere</div>
                <div className="flex items-center gap-2 text-white/90"><Shield className="h-4 w-4 text-white" /> Privacy built‑in</div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-2xl border border-white/20 bg-white/20 backdrop-blur-xl p-6 shadow-2xl"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-emerald-500/20 border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl select-none">📂</div>
                  <p className="mt-3 text-white/90">Drop files to share</p>
                  <p className="text-xs text-white/70">Visual demo — no uploads here</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur px-3 py-2 text-white/90">Android</div>
                <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur px-3 py-2 text-white/90">iOS</div>
                <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur px-3 py-2 text-white/90">Web & Desktop</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
