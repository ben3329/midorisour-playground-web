import * as React from "react";
import { CloseIcon, PlayIcon, SpinnerIcon } from "./Icons";

type ApiCardProps = {
  title: string;
  loading: boolean;
  onCall: () => void;
  onReset: () => void;
  data: unknown;
};

export default function ApiCard({ title, loading, onCall, onReset, data }: ApiCardProps) {
  return (
    <article className="rounded-xl border border-lime-300 bg-white shadow-sm dark:border-lime-900/40 dark:bg-gray-950">
      <div className="flex items-center justify-between border-b border-lime-300 bg-lime-50 px-4 py-3 text-sm font-medium text-lime-800 dark:border-lime-900/40 dark:bg-lime-950/20 dark:text-lime-200">
        <h2>{title}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={onCall}
            disabled={!!loading}
            aria-label={`${title} 호출`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-lime-600 text-white shadow-sm transition-colors hover:bg-lime-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <SpinnerIcon className="h-4 w-4" />
            ) : (
              <PlayIcon className="h-4 w-4" />
            )}
            <span className="sr-only">호출</span>
          </button>
          <button
            onClick={onReset}
            aria-label={`${title} 초기화`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-lime-700 ring-1 ring-lime-300 transition-colors hover:bg-lime-100 dark:bg-transparent dark:text-lime-200 dark:ring-lime-700/60"
          >
            <CloseIcon className="h-4 w-4" />
            <span className="sr-only">초기화</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <pre className="max-h-[420px] overflow-auto rounded-md bg-gray-100 p-3 text-sm dark:bg-gray-900">
          {data ? JSON.stringify(data, null, 2) : "(응답 없음)"}
        </pre>
      </div>
    </article>
  );
}

