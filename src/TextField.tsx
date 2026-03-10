import type { InputHTMLAttributes, ReactNode } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: ReactNode;
  error?: string;
}

export function TextField({ label, hint, error, id, className = '', ...props }: TextFieldProps) {
  const inputId = id ?? `tf-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-xs font-medium text-neutral-700">{label}</span>
      <input
        id={inputId}
        className={`w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1 border-neutral-300 ${className}`}
        {...props}
      />
      {hint && !error && (
        <span className="mt-1 block text-[11px] text-neutral-500">{hint}</span>
      )}
      {error && <span className="mt-1 block text-[11px] text-red-600">{error}</span>}
    </label>
  );
}
