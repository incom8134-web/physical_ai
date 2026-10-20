import { asset } from '../../lib/asset';
import { MAIN_SITE_URL } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageProvider';
import type { Page } from '../../lib/navigation';
import { ExternalLinkIcon } from '../ExternalLinkIcon';
import { monoText } from '../typography';

type SiteHeaderProps = {
  page: Page;
  activeSection: string;
  isScrolled: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onLogoClick: () => void;
  onSectionLink: (sectionId: string) => void;
};

export function SiteHeader({
  page,
  activeSection,
  isScrolled,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onLogoClick,
  onSectionLink,
}: SiteHeaderProps) {
  const { language, t, toggleLanguage } = useLanguage();
  // Every page opens on a navy band, so the header is navy until the page scrolls.
  const lightHeader = isScrolled || menuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-16 ${lightHeader ? 'theme-light' : 'theme-dark'}`}
        style={{
          borderBottom: '1px solid var(--border)',
          // Navy over the hero band, white once the page scrolls — as on the main site.
          background: lightHeader ? 'rgba(255,255,255,0.96)' : 'rgba(21,44,94,0.55)',
          color: 'var(--text)',
          backdropFilter: 'blur(12px)',
          transition: 'background 0.3s ease',
        }}
      >
        <a
          href="#top"
          onClick={e => {
            e.preventDefault();
            onLogoClick();
          }}
          className="flex items-center gap-3"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <img
            src={asset('logo-mark.png')}
            alt={t.contact.company}
            className="logo-mark"
            style={{ height: 32, width: 'auto' }}
          />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
              {language === 'ko' ? '지니에듀테크(주)' : 'JINIE EDUTECH'}
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-subtle)', whiteSpace: 'nowrap' }}>
              {language === 'ko' ? 'Jinie EduTech Co., Ltd.' : '지니에듀테크(주)'}
            </span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7" style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
          {t.nav.items.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                onSectionLink(item.href.slice(1));
              }}
              className={`link-underline ${page === 'home' && activeSection === item.href.slice(1) ? 'active' : ''}`}
              style={{ color: page === 'home' && activeSection === item.href.slice(1) ? 'var(--text)' : 'inherit' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5"
            style={{
              color: 'var(--accent)',
              fontWeight: 700,
              textDecoration: 'none',
              border: '1px solid var(--accent)',
              borderRadius: 999,
              padding: '0.32rem 0.85rem',
              background: 'var(--accent-soft)',
            }}
          >
            {t.nav.mainSite}
            <ExternalLinkIcon size={12} />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            style={{
              ...monoText('0.84rem'),
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              border: '1px solid var(--border)',
              borderRadius: 999,
              padding: '0.3rem 0.2rem',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--text-muted)',
            }}
          >
            <span
              style={{
                padding: '0.15rem 0.5rem',
                borderRadius: 999,
                background: language === 'ko' ? 'var(--button-bg)' : 'transparent',
                color: language === 'ko' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: language === 'ko' ? 800 : 500,
                transition: 'all 0.2s',
              }}
            >
              KO
            </span>
            <span
              style={{
                padding: '0.15rem 0.5rem',
                borderRadius: 999,
                background: language === 'en' ? 'var(--button-bg)' : 'transparent',
                color: language === 'en' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: language === 'en' ? 800 : 500,
                transition: 'all 0.2s',
              }}
            >
              EN
            </span>
          </button>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              onSectionLink('contact');
            }}
            className="btn btn-primary nav-cta"
            style={{ fontSize: '0.92rem', padding: '0.55rem 1.15rem' }}
          >
            {t.nav.cta}
          </a>
          <button
            className="md:hidden flex items-center justify-center"
            onClick={onToggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            style={{
              width: 38,
              height: 38,
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text)',
              cursor: 'pointer',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fade-in-up theme-light"
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            zIndex: 45,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            padding: '0.5rem 1.25rem 1.25rem',
          }}
        >
          {t.nav.items.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                onSectionLink(item.href.slice(1));
              }}
              style={{
                display: 'block',
                padding: '0.95rem 0',
                fontSize: '1.08rem',
                color: 'var(--text)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border-soft)',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCloseMenu}
            className="flex items-center justify-between"
            style={{
              padding: '0.95rem 0',
              fontSize: '1.08rem',
              fontWeight: 700,
              color: 'var(--accent)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border-soft)',
            }}
          >
            {t.nav.mainSite} · jcodeedu.com
            <ExternalLinkIcon size={14} />
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              onSectionLink('contact');
            }}
            className="btn btn-primary"
            style={{ marginTop: '1.1rem', padding: '0.8rem 1.2rem', fontSize: '1rem', width: '100%' }}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </>
  );
}
