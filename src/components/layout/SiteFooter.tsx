import { asset } from '../../lib/asset';
import { BUSINESS_REGISTRATION_NUMBER, CONTACT_EMAIL, MAIN_SITE_URL } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageProvider';
import { ExternalLinkIcon } from '../ExternalLinkIcon';

/** Navy footer with company details, as on the main site. */
export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer
      className="theme-dark px-5 md:px-10 pt-12 pb-8"
      style={{ background: '#0d1b3d', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3">
            <img src={asset('logo-mark.png')} alt="" className="logo-mark" style={{ height: 30, width: 'auto' }} />
            <div>
              <div style={{ fontSize: '1.08rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{t.contact.company}</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-subtle)', marginTop: '0.1rem' }}>
                {t.contact.companyEn}
              </div>
            </div>
          </div>
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.2rem', fontSize: '0.92rem' }}
          >
            {t.hero.mainSiteTitle}
            <ExternalLinkIcon size={13} />
          </a>
        </div>
        <div
          className="flex flex-col md:flex-row md:flex-wrap gap-x-6 gap-y-2 pt-6"
          style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}
        >
          <span>
            {t.footer.ceoLabel} : {t.contact.ceoName}
          </span>
          <span>
            {t.footer.bizNoLabel} : {BUSINESS_REGISTRATION_NUMBER}
          </span>
          <span>
            {t.footer.addrLabel} : {t.contact.labAddr}
          </span>
          <span>
            {t.contact.email} :{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline">
              {CONTACT_EMAIL}
            </a>
          </span>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between gap-4 pt-6"
          style={{ fontSize: '0.84rem', color: 'var(--text-subtle)' }}
        >
          <span>
            © 2026 {t.contact.company} — {t.footer.rights}
          </span>
          <div className="flex gap-5">
            <a href="#" className="link-underline">
              {t.footer.privacy}
            </a>
            <a href="#" className="link-underline">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
