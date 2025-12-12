import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function ThanksPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-24 text-slate-100">
      <div className="w-full max-w-xl rounded-4xl border border-white/5 bg-white/[0.04] p-10 text-center shadow-2xl shadow-sky-900/40 backdrop-blur-xl">
        <h1 className="text-3xl font-semibold text-white">Thanks for reaching out!</h1>
        <p className="mt-4 text-sm text-slate-300">
          Your brief just landed in my inbox. I’ll respond within two business days with next
          steps, timelines, and an initial analytics roadmap.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
        >
          <ArrowLeftCircle className="size-4" />
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}
