export default function Resume() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm reveal">
        <p className="eyebrow text-slate-600">Resume</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">Download or view</h1>
        <p className="mt-3 text-slate-700">
          View my resume below or download the PDF for offline use.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a className="rounded-full bg-slate-900 px-5 py-2 text-white" href="/resume.pdf" download>
            Download resume
          </a>
          <a
            className="rounded-full border border-slate-300 px-5 py-2"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
      </section>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm">
        <iframe
          title="Tauseef Ahmed Memon resume"
          src="/resume.pdf#view=FitH"
          className="h-[75vh] w-full"
        />
      </div>
    </main>
  );
}
