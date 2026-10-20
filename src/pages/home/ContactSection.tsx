import { useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { Reveal } from '../../components/Reveal';
import { monoText } from '../../components/typography';
import { useLanguage } from '../../i18n/LanguageProvider';
import { CONTACT_EMAIL, MAIN_SITE_URL, PHONE_NUMBERS } from '../../config/site';
import { mailtoFallback, sendInquiry, type InquiryPayload } from '../../lib/inquiry';

/** Blue band with the inquiry form and the company contact card. */
export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28" style={{ position: 'relative' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(50% 60% at 50% 100%, rgba(59,130,246,0.25), transparent 70%)',
        }}
      />
      <div className="max-w-screen-xl mx-auto" style={{ position: 'relative' }}>
        <Reveal>
          <span style={{ ...monoText('0.84rem'), color: 'var(--accent)' }}>{t.contact.eyebrow}</span>
        </Reveal>
        <Reveal delay={60}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: '0.4rem 0 0',
              whiteSpace: 'pre-line',
            }}
          >
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              fontWeight: 500,
              marginTop: '1rem',
              marginBottom: '3rem',
              maxWidth: '44ch',
            }}
          >
            {t.contact.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Reveal delay={160} className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={220} className="lg:col-span-5">
            <div className="card" style={{ padding: '1.9rem', height: '100%' }}>
              <div style={{ ...monoText('0.84rem'), color: 'var(--text-subtle)', marginBottom: '1.4rem' }}>
                {t.contact.infoTitle}
              </div>

              <div style={{ marginBottom: '1.6rem' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{t.contact.company}</div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-subtle)', marginTop: '0.15rem' }}>
                  {t.contact.companyEn}
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  {t.contact.ceo} · {t.contact.ceoName}
                </div>
              </div>

              <InfoRow icon="mail" label={t.contact.email} value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
              {PHONE_NUMBERS.map(number => (
                <InfoRow key={number} icon="phone" label={t.contact.phone} value={number} href={`tel:${number}`} />
              ))}
              <InfoRow icon="globe" label={t.contact.website} value="jcodeedu.com" href={MAIN_SITE_URL} newTab />
              <InfoRow
                icon="pin"
                label={t.contact.lab}
                value={t.contact.labAddr}
                href={`https://map.naver.com/p/search/${encodeURIComponent(t.contact.labMapQuery)}`}
                newTab
                last
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
  last,
  newTab,
}: {
  icon: 'mail' | 'phone' | 'globe' | 'pin';
  label: string;
  value: string;
  href?: string;
  last?: boolean;
  newTab?: boolean;
}) {
  const icons: Record<string, ReactNode> = {
    mail: <path d="M3 5h18v14H3z M3 5l9 7 9-7" />,
    phone: <path d="M6 3h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.2" />
      </>
    ),
  };
  const content = (
    <div
      className="flex items-start gap-3"
      style={{ padding: '0.7rem 0', borderBottom: last ? 'none' : '1px solid var(--border-soft)' }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.6"
        style={{ marginTop: 2, flexShrink: 0 }}
      >
        {icons[icon]}
      </svg>
      <div>
        <div
          style={{
            fontSize: '0.84rem',
            color: 'var(--text-subtle)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: '1rem', color: 'var(--text)', marginTop: '0.1rem', lineHeight: 1.5 }}>{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      style={{ textDecoration: 'none', display: 'block' }}
      className="link-underline"
    >
      {content}
    </a>
  ) : (
    content
  );
}

type FormState =
  | { phase: 'idle' }
  | { phase: 'sending' }
  | { phase: 'sent' }
  | { phase: 'error'; reason: 'not-configured' | 'rejected' | 'network'; payload: InquiryPayload };

function ContactForm() {
  const { language, t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ phase: 'idle' });
  const f = t.contact.form;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
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

    setState({ phase: 'sending' });
    const result = await sendInquiry(payload, language);

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
        className="card fade-in-up"
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
            border: '1px solid var(--green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{f.sentTitle}</div>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            fontWeight: 500,
            marginTop: '0.6rem',
          }}
        >
          {f.sentBody}
        </p>
        <button
          onClick={() => setState({ phase: 'idle' })}
          className="btn btn-ghost"
          style={{ marginTop: '1.6rem', padding: '0.7rem 1.4rem', fontSize: '0.92rem', alignSelf: 'flex-start' }}
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

  return (
    <form ref={formRef} onSubmit={submit} className="card" style={{ padding: '1.9rem' }}>
      <div style={{ ...monoText('0.84rem'), color: 'var(--text-subtle)', marginBottom: '1.4rem' }}>
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
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          {t.contact.types.map(option => (
            <option
              key={option.value}
              value={option.label}
              style={{ background: 'var(--surface-muted)', color: 'var(--text)' }}
            >
              {option.label}
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
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
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

      {errorText && state.phase === 'error' && (
        <div
          role="alert"
          className="fade-in-up"
          style={{
            marginTop: '1.4rem',
            padding: '1rem 1.1rem',
            borderRadius: 6,
            border: '1px solid var(--orange)',
            background: 'rgba(180,95,6,0.06)',
          }}
        >
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--orange)' }}>{f.failTitle}</div>
          <p
            style={{
              fontSize: '0.92rem',
              lineHeight: 1.7,
              color: 'var(--text)',
              fontWeight: 500,
              margin: '0.4rem 0 0.9rem',
            }}
          >
            {errorText}
          </p>
          <a
            href={mailtoFallback(state.payload, language)}
            className="btn btn-ghost"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.92rem' }}
          >
            {f.mailFallback}
          </a>
        </div>
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
        {sending ? f.sending : state.phase === 'error' ? f.retry : t.contact.fields.submit}
      </button>
      <p
        style={{
          fontSize: '0.84rem',
          color: 'var(--text-subtle)',
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
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
      />
    </div>
  );
}

const fieldLabel: CSSProperties = {
  display: 'block',
  fontSize: '0.84rem',
  color: 'var(--text-subtle)',
  marginBottom: '0.4rem',
  letterSpacing: '0.02em',
};

const fieldInput: CSSProperties = {
  width: '100%',
  background: 'var(--surface-muted)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  padding: '0.65rem 0.85rem',
  color: 'var(--text)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.25s ease',
};
