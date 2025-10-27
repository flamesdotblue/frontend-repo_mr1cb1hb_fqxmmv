import { Smartphone, Monitor, KeyRound, CheckCircle2 } from 'lucide-react';

const Step = ({ number, title, desc }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-0 h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
      {number}
    </div>
    <h4 className="font-semibold text-slate-900">{title}</h4>
    <p className="text-sm text-slate-600 mt-1">{desc}</p>
  </div>
);

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How it works</h2>
            <p className="mt-3 text-slate-600">A simple flow that adapts to your connection — no setup required.</p>
            <div className="mt-8 space-y-6">
              <Step number="1" title="Discover devices" desc="Nearby devices appear automatically on the same Wi‑Fi or hotspot." />
              <Step number="2" title="Pick files & recipients" desc="Select one or multiple targets and choose files to send." />
              <Step number="3" title="Local or cloud transfer" desc="Transfers use fast local P2P. If remote, files upload to Supabase with a short key." />
              <Step number="4" title="Secure download" desc="Receiver approves locally, or enters the key to validate and download via an Edge Function." />
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
