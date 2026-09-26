"use client";

import { useState, type FormEvent } from "react";

export type WaField = {
  name: string;
  label: string;
  type?:
    | "text"
    | "email"
    | "tel"
    | "date"
    | "time"
    | "number"
    | "textarea"
    | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  full?: boolean;
};

/**
 * A form with no backend: on submit it composes the answers into a WhatsApp
 * message and opens wa.me with the text pre-filled. Works on a static export.
 */
export function WhatsAppForm({
  fields,
  waNumber,
  messageTitle,
  submitLabel,
}: {
  fields: WaField[];
  waNumber: string;
  messageTitle: string;
  submitLabel: string;
}) {
  const [link, setLink] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = fields
      .map((f) => {
        const v = String(data.get(f.name) ?? "").trim();
        return v ? `${f.label}: ${v}` : null;
      })
      .filter(Boolean);
    const msg = `${messageTitle}\n\n${lines.join("\n")}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="wa-form" onSubmit={onSubmit}>
      <div className="wa-grid">
        {fields.map((f) => (
          <label
            key={f.name}
            className={`wa-field${
              f.full || f.type === "textarea" ? " wa-field--full" : ""
            }`}
          >
            <span>
              {f.label}
              {f.required && (
                <i aria-hidden="true" className="wa-req">
                  {" "}
                  *
                </i>
              )}
            </span>
            {f.type === "textarea" ? (
              <textarea
                name={f.name}
                required={f.required}
                rows={3}
                placeholder={f.placeholder}
              />
            ) : f.type === "select" ? (
              <select name={f.name} required={f.required} defaultValue="">
                <option value="" disabled>
                  Choose…
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={f.type ?? "text"}
                name={f.name}
                required={f.required}
                placeholder={f.placeholder}
                inputMode={
                  f.type === "tel"
                    ? "tel"
                    : f.type === "number"
                      ? "numeric"
                      : f.type === "email"
                        ? "email"
                        : undefined
                }
              />
            )}
          </label>
        ))}
      </div>
      <div className="wa-form-foot">
        <button type="submit" className="btn">
          {submitLabel}
        </button>
        {link ? (
          <p className="wa-note">
            Opening WhatsApp with your details filled in.{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              Didn&apos;t open? Tap here
            </a>
            .
          </p>
        ) : (
          <p className="wa-note">
            This opens WhatsApp with your details filled in. Just review and hit
            send.
          </p>
        )}
      </div>
    </form>
  );
}
