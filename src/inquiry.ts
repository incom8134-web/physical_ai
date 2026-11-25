// Web3Forms delivers to the inbox registered with VITE_WEB3FORMS_KEY.
// Without a key, the contact form opens a prefilled mailto link.

export const CONTACT_EMAIL = 'incom2794@naver.com';

const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY ?? '').trim();

export const inquiryConfigured = ACCESS_KEY.length > 0;

export type InquiryPayload = {
  name: string;
  org: string;
  email: string;
  message: string;
  /** What the inquiry is about, already in the visitor's language. */
  type?: string;
  /** Honeypot — real people leave this empty. */
  company?: string;
};

export type InquiryResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'rejected' | 'network'; detail?: string };

export async function sendInquiry(
  payload: InquiryPayload,
  lang: 'ko' | 'en',
): Promise<InquiryResult> {
  // A bot filled the hidden field — accept silently, deliver nothing.
  if (payload.company) return { ok: true };

  if (!inquiryConfigured) {
    return { ok: false, reason: 'not-configured' };
  }

  const isKo = lang === 'ko';
  // The type leads the subject so purchase leads are obvious in the inbox list.
  const tag = payload.type ? `[${payload.type}] ` : '';
  const subject = isKo
    ? `${tag}[홈페이지 문의] ${payload.name}${payload.org ? ` · ${payload.org}` : ''}`
    : `${tag}[Website inquiry] ${payload.name}${payload.org ? ` · ${payload.org}` : ''}`;

  const body = {
    access_key: ACCESS_KEY,
    subject,
    from_name: payload.name,
    // Reply-to, so hitting reply in Naver Mail answers the visitor.
    email: payload.email,
    replyto: payload.email,
    [isKo ? '문의 유형' : 'Inquiry type']: payload.type ?? '-',
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

    const data = (await res.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (res.ok && data?.success) return { ok: true };
    return { ok: false, reason: 'rejected', detail: data?.message ?? `HTTP ${res.status}` };
  } catch (err) {
    return {
      ok: false,
      reason: 'network',
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * The visitor's message as plain text — the body of the mailto link, and what
 * the "copy the message" button puts on the clipboard when no mail app opens.
 */
export function plainInquiry(payload: InquiryPayload, lang: 'ko' | 'en'): string {
  const isKo = lang === 'ko';
  return (
    isKo
      ? [
          `문의 유형: ${payload.type ?? '-'}`,
          `이름: ${payload.name}`,
          `소속·회사: ${payload.org || '-'}`,
          `이메일: ${payload.email}`,
          '',
          payload.message,
        ]
      : [
          `Inquiry type: ${payload.type ?? '-'}`,
          `Name: ${payload.name}`,
          `Organization: ${payload.org || '-'}`,
          `Email: ${payload.email}`,
          '',
          payload.message,
        ]
  ).join('\n');
}

/**
 * The mailto link that carries the visitor's message. It is the whole delivery
 * path while no relay key is configured, and the fallback when one is and the
 * relay fails.
 */
export function mailtoFallback(payload: InquiryPayload, lang: 'ko' | 'en'): string {
  const isKo = lang === 'ko';
  const tag = payload.type ? `[${payload.type}] ` : '';
  const subject = isKo ? `${tag}[문의] ${payload.name}` : `${tag}[Inquiry] ${payload.name}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainInquiry(payload, lang))}`;
}
