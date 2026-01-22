const papers = [
  {
    title:
      "Brain Tumor Detection from MRI Images by Fusion of Region Growing and Edge Detection Algorithms",
    status: "Published in ESTIRJ",
  },
  {
    title: "Prediction of crop yield using satellite images",
    status: "Term paper (Data Mining)",
  },
  {
    title: "Optimized Round Robin",
    status: "Writing and research complete, awaiting approval",
  },
  {
    title: "Cancer Detection using ResNet 101",
    status: "Results complete, writing in progress",
  },
];

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm reveal">
        <p className="eyebrow text-slate-600">Publications</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Papers, term work, and in-progress research
        </h1>
        <p className="mt-3 text-slate-700">
          Browse published work and ongoing research. The embedded preview below is
          available for visitors who want to read the paper directly.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-2xl font-semibold text-slate-950">Publication list</h2>
            <div className="mt-4 space-y-4">
              {papers.map((paper) => (
                <div
                  key={paper.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/95 p-4"
                >
                  <p className="text-sm font-semibold text-slate-950">{paper.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{paper.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-2xl font-semibold text-slate-950">Featured paper</h2>
            <p className="mt-2 text-sm text-slate-700">
              The embedded Scribd preview below highlights one of the available papers.
              You can open the full document on Scribd.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <a
                className="underline"
                href="https://www.scribd.com/document/459257532/1Jameel32-pdf#from_embed"
                target="_blank"
                rel="noreferrer"
              >
                View 1Jameel32.pdf on Scribd
              </a>
              <p>
                by{" "}
                <a
                  className="underline"
                  href="https://www.scribd.com/user/27658572/Tayab-Memon#from_embed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tayab Memon
                </a>
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
          <p className="eyebrow text-slate-600">Embedded Preview</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Scribd viewer</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <iframe
              title="1Jameel32.pdf"
              src="https://www.scribd.com/embeds/459257532/content?start_page=1&view_mode=scroll&access_key=key-MaGNHAUtfkO356BWOzuN"
              loading="lazy"
              width="100%"
              height="600"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
