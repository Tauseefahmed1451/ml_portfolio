export default function Resume() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold">Resume</h1>
      <p className="mt-2 text-gray-700">Download my resume:</p>
      <a className="mt-4 inline-block underline" href="/resume.pdf">
        resume.pdf -&gt;
      </a>

      <p className="mt-6 text-sm text-gray-600">
        Tip: Put your actual resume PDF at{" "}
        <code className="border px-1">public/resume.pdf</code>.
      </p>
    </main>
  );
}
