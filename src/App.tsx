import { useEffect, useRef, useState } from 'react';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { absoluteUrl } from './config/site';
import { HOME_SECTION_IDS, pageFromHash, type Page } from './lib/navigation';
import { ConsultingPage } from './pages/ConsultingPage';
import { EducationPage } from './pages/EducationPage';
import { HomePage } from './pages/home/HomePage';
import { RentalPage } from './pages/RentalPage';
import { SupportPage } from './pages/SupportPage';

export function App() {
  const [page, setPage] = useState<Page>(() => pageFromHash());
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Section to scroll to once the home page has rendered (set when a header
  // link is used from a subpage).
  const pendingSectionId = useRef<string | null>(null);

  const openPage = (next: Page) => {
    setPage(next);
    window.location.hash = next === 'home' ? '' : `/${next}`;
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    if (page !== 'home') {
      pendingSectionId.current = sectionId;
      openPage('home');
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToTop = () => {
    if (page !== 'home') openPage('home');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [page]);

  // Follow the back/forward buttons.
  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Canonical URL and og:url must be absolute, so they are set from SITE_URL.
  useEffect(() => {
    const href = absoluteUrl(page === 'home' ? '' : `#/${page}`);
    upsertHeadTag('link[rel="canonical"]', 'link', { rel: 'canonical' }, 'href', href);
    upsertHeadTag('meta[property="og:url"]', 'meta', { property: 'og:url' }, 'content', href);
  }, [page]);

  // Finish a header-link jump that started on a subpage.
  useEffect(() => {
    if (page !== 'home' || !pendingSectionId.current) return;
    const sectionId = pendingSectionId.current;
    pendingSectionId.current = null;
    requestAnimationFrame(() => {
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 60);
    });
  }, [page]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the header link of the section in view (home page only).
  useEffect(() => {
    if (page !== 'home') return;
    const sections = HOME_SECTION_IDS.map(id => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 },
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [page]);

  const contact = () => scrollToSection('contact');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <SiteHeader
        page={page}
        activeSection={activeSection}
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(open => !open)}
        onCloseMenu={() => setMenuOpen(false)}
        onLogoClick={goToTop}
        onSectionLink={scrollToSection}
      />

      {page === 'home' && <HomePage onOpenPage={openPage} />}
      {page === 'education' && <EducationPage onContact={contact} />}
      {page === 'consulting' && <ConsultingPage onContact={contact} />}
      {page === 'support' && <SupportPage onContact={contact} />}
      {page === 'rental' && <RentalPage onContact={contact} />}

      <SiteFooter />
    </div>
  );
}

function upsertHeadTag(
  selector: string,
  tag: 'link' | 'meta',
  identity: Record<string, string>,
  attribute: string,
  value: string,
) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(tag);
    Object.entries(identity).forEach(([name, val]) => element!.setAttribute(name, val));
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}
