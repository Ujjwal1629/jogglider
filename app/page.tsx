export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-6">
          Joggliderss
        </p>

        <h1 className="text-6xl font-light text-slate-900 mb-6 tracking-tight">
          Coming <span className="font-semibold text-blue-600">Soon</span>
        </h1>

        <div className="w-12 h-px bg-blue-200 mx-auto mb-6"></div>

        <p className="text-slate-400 text-lg font-light mb-10">
          We&apos;re putting the finishing touches on something new.
        </p>

        <p className="text-sm text-slate-400 mb-2">Live on</p>
        <p className="text-2xl font-semibold text-blue-600">April 15, 2026</p>

        <p className="mt-20 text-slate-300 text-xs">
          &copy; {new Date().getFullYear()} Joggliders
        </p>
      </div>
    </div>
  );
}
