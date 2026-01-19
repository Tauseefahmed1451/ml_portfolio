export default function Resume() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Resume</h1>
        <p className="mt-2 text-gray-700">
          View my resume below or download the PDF.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a className="rounded-md border px-3 py-1" href="/resume.pdf" download>
            Download resume
          </a>
          <a
            className="rounded-md border px-3 py-1"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <iframe
          title="Tauseef Ahmed Memon resume"
          src="/resume.pdf#view=FitH"
          className="h-[75vh] w-full"
        />
      </div>
    </main>
  );
}
