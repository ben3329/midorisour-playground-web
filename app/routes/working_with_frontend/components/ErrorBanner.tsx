import * as React from "react";
import { CloseIcon, InfoIcon, WarningIcon } from "./Icons";

type Severity = "error" | "warning" | "info";

type Props = {
  message: string;
  onClose?: () => void;
  severity?: Severity;
};

const styles: Record<Severity, { box: string; hover: string; label: string }> = {
  error: {
    box: "border-red-300 bg-red-50 text-red-800 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-200",
    hover: "hover:bg-red-100/50 dark:hover:bg-red-900/30",
    label: "에러",
  },
  warning: {
    box: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200",
    hover: "hover:bg-amber-100/50 dark:hover:bg-amber-900/30",
    label: "경고",
  },
  info: {
    box: "border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-900/50 dark:bg-sky-950/40 dark:text-sky-200",
    hover: "hover:bg-sky-100/50 dark:hover:bg-sky-900/30",
    label: "정보",
  },
};

export default function ErrorBanner({ message, onClose, severity = "error" }: Props) {
  const s = styles[severity];
  const Icon = severity === "error" ? WarningIcon : severity === "warning" ? WarningIcon : InfoIcon;

  return (
    <div className={"relative rounded-md border p-3 pr-8 text-sm "+s.box}>
      <div className="flex items-start gap-2 pr-6">
        <Icon className="mt-0.5 h-4 w-4" />
        <div>
          <span className="sr-only">{s.label}: </span>
          {message}
        </div>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label={`${s.label} 닫기`}
          className={"absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded "+s.hover}
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
