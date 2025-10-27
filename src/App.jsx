import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} FileSync. Built with ❤️ using Flutter & Supabase.</p>
        <div className="text-sm text-slate-600">
          Privacy-first • No ads • No tracking
        </div>
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
        <section id="security" className="py-20 bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Security & privacy</h2>
              <p className="mt-3 text-slate-300">Local transfers never leave your network. Remote transfers are validated by Edge Functions, use expiring links, and can be encrypted before upload.</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Local only</h3>
                <p className="mt-1 text-sm text-slate-300">When devices are nearby, transfers stay peer‑to‑peer and offline.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Validated downloads</h3>
                <p className="mt-1 text-sm text-slate-300">Short keys trigger server‑side checks before any file URL is returned.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Auto‑expire</h3>
                <p className="mt-1 text-sm text-slate-300">Cloud files expire after a configurable window (e.g., 24h).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
