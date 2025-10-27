import { Wifi, Globe, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              File sharing that just works — offline and online
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              FileSync automatically chooses the fastest, most secure path for your files. Share instantly over local Wi‑Fi, or use secure cloud relays when you're apart.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">
                See features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-700"><Wifi className="h-4 w-4 text-blue-600" /> Local first</div>
              <div className="flex items-center gap-2 text-slate-700"><Globe className="h-4 w-4 text-blue-600" /> Works anywhere</div>
              <div className="flex items-center gap-2 text-slate-700"><Shield className="h-4 w-4 text-blue-600" /> Privacy built‑in</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-emerald-500/10 border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">📂</div>
                  <p className="mt-3 text-slate-700">Drop files to share</p>
                  <p className="text-xs text-slate-500">Mock preview — no uploads here</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-lg border border-slate-200 p-3">Android</div>
                <div className="rounded-lg border border-slate-200 p-3">iOS</div>
                <div className="rounded-lg border border-slate-200 p-3">Web & Desktop</div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-200/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
