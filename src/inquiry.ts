/**
 * Inquiry delivery.
 *
 * The site is a static build with no server of its own, so the browser cannot
 * open an SMTP connection and cannot deliver mail by itself. The form posts to
 * a small relay service instead, which forwards the submission to the inbox
 * registered with the access key — no mail client opens on the visitor's
 * machine.
 *
 * Setup (one time, ~2 minutes):
 *   1. Go to https://web3forms.com and enter incom2794@naver.com.
 *   2. The access key arrives at that address by email.
 *   3. Put it in `.env` at the project root:  VITE_WEB3FORMS_KEY=<the key>
 *      (copy `.env.example` to `.env`), then rebuild.
 *
 * The destination inbox is whatever address the key was registered to, so the
 * key must be created with incom2794@naver.com — it is not set from here.
 *
 * Until a key is configured, the form does not pretend to send: it says the
 * relay is not connected and offers the email address as a fallback.
 */

export const CONTACT_EMAIL = 'incom2794@naver.com';

const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY ?? '').trim();

export const inquiryConfigured = ACCESS_KEY.length > 0;

export type InquiryPayload = {
  name: string;
  org: string;
  email: string;
  message: string;
  /** Honeypot — real people leave this empty. */
  company?: string;
};

export type InquiryResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'rejected' | 'network'; detail?: string };

export async function sendInquiry(payload: InquiryPayload, lang: 'ko' | 'en'): Promise<InquiryResult> {
  // A bot filled the hidden field — accept silently, deliver nothing.
  if (payload.company) return { ok: true };

  if (!inquiryConfigured) {
    return { ok: false, reason: 'not-configured' };
  }

  const isKo = lang === 'ko';
  const subject = isKo
    ? `[홈페이지 문의] ${payload.name}${payload.org ? ` · ${payload.org}` : ''}`
    : `[Website inquiry] ${payload.name}${payload.org ? ` · ${payload.org}` : ''}`;

  const body = {
    access_key: ACCESS_KEY,
    subject,
    from_name: payload.name,
    // Reply-to, so hitting reply in Naver Mail answers the visitor.
    email: payload.email,
    replyto: payload.email,
    [isKo ? '이름' : 'Name']: payload.name,
    [isKo ? '소속·회사' : 'Organization']: payload.org || '-',
    [isKo ? '이메일' : 'Email']: payload.email,
    [isKo ? '문의 내용' : 'Message']: payload.message,
    [isKo ? '접수 언어' : 'Submitted in']: isKo ? '한국어' : 'English',
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });

    const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;

    if (res.ok && data?.success) return { ok: true };
    return { ok: false, reason: 'rejected', detail: data?.message ?? `HTTP ${res.status}` };
  } catch (err) {
    return { ok: false, reason: 'network', detail: err instanceof Error ? err.message : String(err) };
  }
}

/** Fallback link, used only after a delivery failure — never as the happy path. */
export function mailtoFallback(payload: InquiryPayload, lang: 'ko' | 'en'): string {
  const isKo = lang === 'ko';
  const subject = isKo ? `[문의] ${payload.name}` : `[Inquiry] ${payload.name}`;
  const lines = isKo
    ? [`이름: ${payload.name}`, `소속·회사: ${payload.org}`, `이메일: ${payload.email}`, '', payload.message]
    : [`Name: ${payload.name}`, `Organization: ${payload.org}`, `Email: ${payload.email}`, '', payload.message];
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}
