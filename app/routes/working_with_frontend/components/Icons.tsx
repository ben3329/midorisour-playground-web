import * as React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { title?: string };

export function PlayIcon({ className, title, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden={!title} aria-label={title} {...rest}>
      <path d="M6 4l10 6-10 6V4z" />
    </svg>
  );
}

export function SpinnerIcon({ className, title, ...rest }: SvgProps) {
  return (
    <svg className={"animate-spin "+(className ?? "")} viewBox="0 0 24 24" aria-hidden={!title} aria-label={title} {...rest}>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  );
}

export function CloseIcon({ className, title, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden={!title} aria-label={title} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M14 6l-8 8" />
    </svg>
  );
}

export function InfoIcon({ className, title, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden={!title} aria-label={title} {...rest}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-9.5a.75.75 0 111.5 0v5a.75.75 0 01-1.5 0v-5zM10 6.25a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" />
    </svg>
  );
}

export function WarningIcon({ className, title, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden={!title} aria-label={title} {...rest}>
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.58c.75 1.334-.212 2.996-1.743 2.996H3.482c-1.53 0-2.493-1.662-1.743-2.996L8.257 3.1zM10 13a1 1 0 100 2 1 1 0 000-2zm-.75-6.5a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0v-4z" clipRule="evenodd" />
    </svg>
  );
}
