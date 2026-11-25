import { useRef, useState } from 'react';
import type { Lang, Translations } from './i18n';
import {
  sendInquiry,
  mailtoFallback,
  plainInquiry,
  inquiryConfigured,
  CONTACT_EMAIL,
  type InquiryPayload,
} from './inquiry';
import { mono } from './pageUtils';

type FormState =
  | { phase: 'idle' }
  | { phase: 'sending' }
  | { phase: 'sent' }
  /** No relay key is configured, so the message went to the visitor's mail app instead. */
  | { phase: 'handoff'; payload: InquiryPayload }
  | { phase: 'error'; reason: 'not-configured' | 'rejected' | 'network'; payload: InquiryPayload };

export function ContactForm({ t, lang }: { t: Translations; lang: Lang }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ phase: 'idle' });
  const f = t.contact.form;

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.phase === 'sending') return;

    const data = new FormData(e.currentTarget);
    const payload: InquiryPayload = {
      type: ((data.get('type') as string) || '').trim() || undefined,
      name: ((data.get('name') as string) || '').trim(),
      org: ((data.get('org') as string) || '').trim(),
      email: ((data.get('email') as string) || '').trim(),
      message: ((data.get('message') as string) || '').trim(),
      company: ((data.get('company') as string) || '').trim(),
    };

    // With no relay key there is no server to post to. Rather than fail, hand
    // the finished message to the visitor's mail app and show where it went.
    if (!inquiryConfigured) {
      window.location.href = mailtoFallback(payload, lang);
      setState({ phase: 'handoff', payload });
      return;
    }

    setState({ phase: 'sending' });
    const result = await sendInquiry(payload, lang);

    if (result.ok) {
      formRef.current?.reset();
      setState({ phase: 'sent' });
    } else {
      setState({ phase: 'error', reason: result.reason, payload });
    }
  };

  if (state.phase === 'sent') {
    return (
      <div
        className="card latch"
        style={{
          padding: '2.4rem 1.9rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            marginBottom: '1.2rem',
            background: 'rgba(10,138,95,0.08)',
            border: '1px solid var(--lock)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--lock)"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{f.sentTitle}</div>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--dim)',
            fontWeight: 500,
            marginTop: '0.6rem',
          }}
        >
          {f.sentBody}
        </p>
        <button
          onClick={() => setState({ phase: 'idle' })}
          className="btn btn-ghost"
          style={{
            marginTop: '1.6rem',
            padding: '0.7rem 1.4rem',
            fontSize: '0.92rem',
            alignSelf: 'flex-start',
          }}
        >
          {f.again}
        </button>
      </div>
    );
  }

  const sending = state.phase === 'sending';
  const errorText =
    state.phase === 'error'
      ? state.reason === 'network'
        ? f.failNetwork
        : state.reason === 'not-configured'
          ? f.failNotConfigured
          : f.failRejected
      : null;
  // Whichever way the send did not go through, the visitor gets the same
  // usable set: their message in a mail app, on the clipboard, or by phone.
  const fallbackPayload =
    state.phase === 'handoff' || state.phase === 'error' ? state.payload : null;
  return (
    <form ref={formRef} onSubmit={submit} className="card" style={{ padding: '1.9rem' }}>
      <div style={{ ...mono('0.84rem'), color: 'var(--faint)', marginBottom: '1.4rem' }}>
        {t.contact.formTitle}
      </div>
      <div className="mb-4">
        <label style={fieldLabel} htmlFor="inquiry-type">
          {t.contact.fields.type}
        </label>
        <select
          id="inquiry-type"
          name="type"
          defaultValue={t.contact.types[0].label}
          style={{ ...fieldInput, appearance: 'none', cursor: 'pointer' }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--beam)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--rail)')}
        >
          {t.contact.types.map((o: { value: string; label: string }) => (
            <option
              key={o.value}
              value={o.label}
              style={{ background: 'var(--panel)', color: 'var(--text)' }}
            >
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.contact.fields.name} name="name" required />
        <Field label={t.contact.fields.org} name="org" />
      </div>
      <div className="mt-4">
        <Field label={t.contact.fields.email} name="email" type="email" required />
      </div>
      <div className="mt-4">
        <label style={fieldLabel} htmlFor="inquiry-message">
          {t.contact.fields.message}
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          rows={5}
          style={{ ...fieldInput, resize: 'vertical', fontFamily: 'inherit' }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--beam)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--rail)')}
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      {fallbackPayload && (
        <DirectContact
          t={t}
          lang={lang}
          payload={fallbackPayload}
          title={state.phase === 'handoff' ? f.directTitle : f.failTitle}
          body={state.phase === 'handoff' ? f.directBody : (errorText ?? f.failRejected)}
          tone={state.phase === 'error' ? 'alert' : 'info'}
        />
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn btn-primary mt-6"
        style={{
          padding: '0.85rem 1.8rem',
          fontSize: '1rem',
          width: '100%',
          opacity: sending ? 0.7 : 1,
          cursor: sending ? 'wait' : 'pointer',
        }}
      >
        {sending
          ? f.sending
          : state.phase === 'error'
            ? f.retry
            : inquiryConfigured
              ? t.contact.fields.submit
              : f.submitMail}
      </button>
      <p
        style={{
          fontSize: '0.84rem',
          color: 'var(--faint)',
          textAlign: 'center',
          margin: '0.9rem 0 0',
          lineHeight: 1.6,
        }}
      >
        {f.privacy}
      </p>
    </form>
  );
}

/**
 * Where the message goes when the form itself cannot deliver it: the visitor's
 * mail app opens with the finished message, and the same text is one tap from
 * the clipboard, with the address and phone number beside it.
 */
function DirectContact({
  t,
  lang,
  payload,
  title,
  body,
  tone,
}: {
  t: Translations;
  lang: Lang;
  payload: InquiryPayload;
  title: string;
  body: string;
  tone: 'info' | 'alert';
}) {
  const f = t.contact.form;
  const [copied, setCopied] = useState<'email' | 'message' | null>(null);

  const copy = async (kind: 'email' | 'message') => {
    const text = kind === 'email' ? CONTACT_EMAIL : plainInquiry(payload, lang);
    const flash = () => {
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 2200);
    };
    try {
      await navigator.clipboard.writeText(text);
      flash();
    } catch {
      // Older browsers, and pages not served over https.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        flash();
      } catch {
        /* the e-mail address is still on screen to be copied by hand */
      }
      document.body.removeChild(ta);
    }
  };

  const chip: React.CSSProperties = { padding: '0.55rem 1.05rem', fontSize: '0.92rem' };
  const accent = tone === 'alert' ? 'var(--amp)' : 'var(--beam)';

  return (
    <div
      className="latch"
      style={{
        marginTop: '1.4rem',
        padding: '1.15rem 1.15rem 1rem',
        borderRadius: 6,
        border: `1px solid ${tone === 'alert' ? 'var(--amp)' : 'var(--rail)'}`,
        background: tone === 'alert' ? 'rgba(180,95,6,0.06)' : 'var(--panel)',
      }}
    >
      <div style={{ fontSize: '1rem', fontWeight: 700, color: accent }}>{title}</div>
      <p
        style={{
          fontSize: '0.92rem',
          lineHeight: 1.7,
          color: 'var(--text)',
          fontWeight: 500,
          margin: '0.4rem 0 0.9rem',
        }}
      >
        {body}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <a href={mailtoFallback(payload, lang)} className="btn btn-primary" style={chip}>
          {f.openMail}
        </a>
        <button
          type="button"
          onClick={() => copy('message')}
          className="btn btn-ghost"
          style={chip}
        >
          {copied === 'message' ? f.copied : f.copyMessage}
        </button>
        <button type="button" onClick={() => copy('email')} className="btn btn-ghost" style={chip}>
          {copied === 'email' ? f.copied : f.copyEmail}
        </button>
        <a href="tel:+821045882794" className="btn btn-ghost" style={chip}>
          {f.call} 010-4588-2794
        </a>
      </div>
      <p
        style={{
          fontSize: '0.84rem',
          color: 'var(--faint)',
          margin: '0.85rem 0 0',
          lineHeight: 1.6,
        }}
      >
        {CONTACT_EMAIL} · 051-331-0110
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label style={fieldLabel}>{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        style={fieldInput}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--beam)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--rail)')}
      />
    </div>
  );
}

const fieldLabel: React.CSSProperties = {
  display: 'block',
  fontSize: '0.84rem',
  color: 'var(--faint)',
  marginBottom: '0.4rem',
  letterSpacing: '0.02em',
};

const fieldInput: React.CSSProperties = {
  width: '100%',
  background: 'var(--panel)',
  border: '1px solid var(--rail)',
  borderRadius: 6,
  padding: '0.65rem 0.85rem',
  color: 'var(--text)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.25s ease',
};
