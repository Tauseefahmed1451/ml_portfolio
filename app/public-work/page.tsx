export default function PublicWork() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm reveal">
        <p className="eyebrow text-slate-600">Public Work</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">Demos and write-ups</h1>
        <p className="mt-3 text-sm text-slate-700">
          Public demos and write-ups live on the Projects page, including videos and
          detailed breakdowns.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a className="rounded-full bg-slate-900 px-5 py-2 text-white" href="/projects">
            View projects →
          </a>
          <a className="rounded-full border border-slate-300 px-5 py-2" href="/publications">
            Publications
          </a>
        </div>
      </section>
    </main>
  );
}
