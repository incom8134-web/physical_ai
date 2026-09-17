import { useState } from 'react';
import type { Lang } from './i18n';
import { modules, stages, mentoring, weekPlan } from './data';
import { Reveal } from './useReveal';
import { Breadcrumb, PageHero, SectionHeading, FinalCta, LockModal, mono } from './pageUtils';

const UNLOCKED_COUNT = 1; // M1 is a free preview; M2–M6 are locked
const TOTAL_HOURS = 60;

const equipmentSupport = [
  { label: '부품 · 센서', labelEn: 'Parts & sensors', limit: '프로젝트당 50만원', limitEn: '₩500,000 per project', note: '신청서 기준 사전 승인 후 구매', noteEn: 'Purchased after pre-approval based on a request form' },
  { label: '출력 · 가공 재료', labelEn: 'Printing & fabrication materials', limit: '프로젝트당 15만원', limitEn: '₩150,000 per project', note: '3D 출력 · 절삭 재료 포함', noteEn: 'Includes 3D printing and machining materials' },
  { label: '장비 사용', labelEn: 'Equipment use', limit: '무상', limitEn: 'Free', note: '예약제 운영, 안전교육 이수자에 한함', noteEn: 'Reservation-based, limited to those who completed safety training' },
  { label: '공용 소모품', labelEn: 'Shared consumables', limit: '총 100만원', limitEn: '₩1,000,000 total', note: '안전용품 · 공용 부자재 (전체 참여자 공동)', noteEn: 'Safety gear & shared materials (pooled across all participants)' },
];

const outcomeLayers = [
  { label: '교육 성과', labelEn: 'Learning outcomes', desc: '피지컬 AI 기초 이해, 기술 이해도 향상, 프로젝트 기획 역량', descEn: 'Foundational understanding of physical AI, improved technical literacy, and project planning skills', proof: '사전·사후 역량 진단', proofEn: 'Pre/post skills assessment' },
  { label: '프로젝트 성과', labelEn: 'Project outcomes', desc: '기획서 · 설계서 · 프로토타입 · 발표 자료', descEn: 'Proposal · design document · prototype · presentation materials', proof: '단계별 산출물 문서', proofEn: 'Stage-by-stage output documents' },
  { label: '사업화 성과', labelEn: 'Commercialization outcomes', desc: '기초 사업화 계획, 후속 사업 신청 · 기업 제안 · 투자 상담', descEn: 'Basic commercialization plan, follow-on program applications, corporate proposals, investment consultations', proof: '연계 실적 확인 자료', proofEn: 'Follow-up track record documentation' },
];

const participantTargets = [
  { label: '재직자', labelEn: 'Industry professionals', desc: '지역 중소기업 재직자 (제조·기계·전자 분야)', descEn: 'Employees of local SMEs (manufacturing, machinery, electronics)', seats: '6명', seatsEn: '6 seats' },
  { label: '예비창업자', labelEn: 'Aspiring founders', desc: '피지컬 AI 분야 창업을 준비 중인 개인·팀', descEn: 'Individuals or teams preparing to start a physical AI venture', seats: '3명', seatsEn: '3 seats' },
  { label: '기타', labelEn: 'Other', desc: '관련 전공 졸업예정자 등', descEn: 'Soon-to-graduate students in related fields, etc.', seats: '1명', seatsEn: '1 seat' },
];

export default function EducationPage({ lang, t, onContact }: { lang: Lang; t: any; onContact: () => void }) {
  const p = t.pages.education;
  const [stageIdx, setStageIdx] = useState(0);
  const [moduleIdx, setModuleIdx] = useState(0);
  const [lockOpen, setLockOpen] = useState(false);

  const activeModule = modules[moduleIdx];
  const activeStage = stages[stageIdx];
  const isLocked = (i: number) => i >= UNLOCKED_COUNT;

  const selectModule = (i: number) => {
    if (isLocked(i)) {
      setLockOpen(true);
      return;
    }
    setModuleIdx(i);
  };

  return (
    <>
      <Breadcrumb label={lang === 'ko' ? '지니에듀테크' : 'JINIE EDUTECH'} eyebrow={p.eyebrow} />
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.subtitle}
        ctaPrimaryLabel={p.ctaPrimary}
        onCtaPrimary={onContact}
        ctaSecondaryLabel={p.ctaSecondary}
        onCtaSecondary={() => document.getElementById('edu-curriculum')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* STATS */}
      <section className="px-5 md:px-10 py-14" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {p.statLabels.map((l: string, i: number) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ ...mono('2rem'), fontWeight: 700, color: 'var(--beam)' }}>{p.statValues[i]}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--faint)', marginTop: '0.3rem' }}>{l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5-STAGE JOURNEY */}
      <section className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.journeyEyebrow} title={p.journeyTitle} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">
            <div className="lg:col-span-5 flex flex-col gap-2">
              {stages.map((s, i) => {
                const on = i === stageIdx;
                return (
                  <button
                    key={s.num}
                    onClick={() => setStageIdx(i)}
                    className="step-btn"
                    style={{
                      textAlign: 'left', border: '1px solid', borderColor: on ? 'var(--beam)' : 'var(--rail)',
                      background: on ? 'rgba(92,139,255,0.1)' : 'var(--deck)', borderRadius: 6,
                      padding: '0.95rem 1.1rem', cursor: 'pointer', display: 'flex', gap: '0.9rem', alignItems: 'center',
                    }}
                  >
                    <span style={{ ...mono('0.85rem'), color: on ? 'var(--beam)' : 'var(--faint)', fontWeight: 700, flexShrink: 0 }}>{s.num}</span>
                    <span>
                      <span style={{ fontSize: '0.98rem', fontWeight: 600, display: 'block' }}>{lang === 'ko' ? s.ko : s.en}</span>
                      <span style={{ fontSize: '0.76rem', color: 'var(--faint)' }}>{lang === 'ko' ? s.en : s.ko} · {s.hours}H</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <Reveal delay={100} className="lg:col-span-7">
              <div className="card" style={{ padding: '1.9rem', height: '100%' }}>
                <div className="flex items-baseline justify-between mb-3">
                  <span style={{ fontSize: '1.15rem', fontWeight: 700 }}>{lang === 'ko' ? activeStage.ko : activeStage.en}</span>
                  <span style={{ ...mono('0.72rem'), color: 'var(--amp)' }}>{activeStage.hours}H {lang === 'ko' ? '배정' : 'allocated'}</span>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginBottom: '1.3rem' }}>{lang === 'ko' ? activeStage.desc : activeStage.descEn}</p>
                <div className="flex gap-1.5 flex-wrap mb-5">
                  {(lang === 'ko' ? activeStage.topics : activeStage.topicsEn).map((tp, j) => (
                    <span key={j} style={{ ...mono('0.62rem'), color: 'var(--text)', border: '1px solid var(--rail)', background: 'var(--panel)', padding: '0.3rem 0.6rem', borderRadius: 3 }}>{tp}</span>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid var(--rail-soft)', paddingTop: '1.1rem' }}>
                  <div style={{ ...mono('0.62rem'), color: 'var(--faint)', marginBottom: '0.4rem' }}>{lang === 'ko' ? '본인 프로젝트에서 하는 일' : 'What you do in your project'}</div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text)', fontWeight: 300, margin: 0 }}>{lang === 'ko' ? activeStage.activity : activeStage.activityEn}</p>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  {(lang === 'ko' ? activeStage.outputs : activeStage.outputsEn).map((o, j) => (
                    <span key={j} style={{ ...mono('0.6rem'), color: 'var(--lock)', marginRight: 10 }}>✓ {o}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CURRICULUM CONSOLE */}
      <section id="edu-curriculum" className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.curriculumEyebrow} title={p.curriculumTitle} subtitle={p.curriculumSubtitle} />

          <div className="mt-10" style={{ border: '1px solid var(--rail)', background: 'var(--deck)', borderRadius: 4, overflow: 'hidden' }}>
            <div
              className="flex flex-wrap items-center justify-between gap-4 px-5 md:px-6 py-4"
              style={{ borderBottom: '1px solid var(--rail)', background: 'var(--panel)' }}
            >
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="blip" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lock)' }} />
                  <span style={{ ...mono('0.7rem'), color: 'var(--dim)' }}>{lang === 'ko' ? `총 ${TOTAL_HOURS}시간` : `${TOTAL_HOURS}H total`}</span>
                </div>
                <span style={{ ...mono('0.7rem'), color: 'var(--faint)' }}>{lang === 'ko' ? '이론 18 · 실습 42' : 'Theory 18 · Practice 42'}</span>
              </div>
              <span style={{ ...mono('0.65rem'), color: 'var(--amp)' }}>M1 {t.pages.previewBadge}</span>
            </div>

            {/* module tabs */}
            <div className="px-5 md:px-6 pt-6 pb-2">
              <div className="flex w-full" style={{ height: 62, gap: 2, borderRadius: 3, overflow: 'hidden' }}>
                {modules.map((m, i) => {
                  const on = i === moduleIdx && !isLocked(i);
                  const locked = isLocked(i);
                  return (
                    <button
                      key={m.code}
                      onClick={() => selectModule(i)}
                      style={{
                        flexGrow: m.hours, flexBasis: 0, minWidth: 0, border: 'none', cursor: 'pointer',
                        padding: '0 0.5rem', textAlign: 'left',
                        background: on ? 'var(--beam)' : locked ? 'var(--panel)' : 'rgba(92,139,255,0.16)',
                        color: on ? '#04070d' : locked ? 'var(--faint)' : 'var(--text)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden',
                        position: 'relative', opacity: locked ? 0.7 : 1,
                      }}
                    >
                      <span style={{ ...mono('0.64rem'), fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                        {m.code}
                        {locked && (
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="4" y="10" width="16" height="10" rx="2" />
                            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                          </svg>
                        )}
                      </span>
                      <span style={{ ...mono('0.76rem'), fontWeight: 700 }}>{m.hours}H</span>
                    </button>
                  );
                })}
              </div>
              <div style={{ ...mono('0.6rem'), color: 'var(--faint)', marginTop: '0.5rem' }}>
                {lang === 'ko' ? '막대 너비 = 배정 시간 · 잠긴 모듈을 눌러 잠금 해제 방법을 확인하세요' : 'Bar width = allotted hours · Tap a locked module to see how to unlock it'}
              </div>
            </div>

            {/* module detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12" style={{ borderTop: '1px solid var(--rail)' }}>
              <div className="lg:col-span-7 p-5 md:p-8" style={{ borderRight: '1px solid var(--rail)' }}>
                <div className="flex items-baseline justify-between mb-1">
                  <span style={{ ...mono('0.9rem'), color: 'var(--beam)', fontWeight: 700 }}>{activeModule.code}</span>
                  <span style={{ ...mono('0.68rem'), color: 'var(--faint)' }}>{activeModule.hours}H · {lang === 'ko' ? activeModule.week : activeModule.weekEn}</span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.015em', margin: '0.3rem 0 1.4rem' }}>
                  {lang === 'ko' ? activeModule.ko : activeModule.en}
                  <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--faint)', fontWeight: 400, marginTop: '0.2rem' }}>{lang === 'ko' ? activeModule.en : activeModule.ko}</span>
                </div>
                <div style={{ ...mono('0.66rem'), color: 'var(--faint)', marginBottom: '0.7rem' }}>{lang === 'ko' ? '교육 내용' : 'Topics covered'}</div>
                <div className="flex gap-1.5 flex-wrap mb-6">
                  {(lang === 'ko' ? activeModule.topics : activeModule.topicsEn).map((tp, j) => (
                    <span key={j} style={{ fontSize: '0.8rem', padding: '0.32rem 0.7rem', border: '1px solid var(--rail)', background: 'var(--panel)', borderRadius: 2, color: 'var(--text)' }}>{tp}</span>
                  ))}
                </div>
                <div style={{ paddingTop: '1.3rem', borderTop: '1px solid var(--rail-soft)' }}>
                  <div style={{ ...mono('0.66rem'), color: 'var(--faint)' }}>{lang === 'ko' ? '본인 프로젝트에서 하는 일' : 'Your project work'}</div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text)', fontWeight: 300, margin: '0.6rem 0 0' }}>{lang === 'ko' ? activeModule.activity : activeModule.activityEn}</p>
                </div>
              </div>
              <div className="lg:col-span-5 p-5 md:p-8" style={{ background: 'rgba(16,26,43,0.45)' }}>
                <div style={{ ...mono('0.66rem'), color: 'var(--faint)', marginBottom: '1rem' }}>{lang === 'ko' ? '손에 남는 산출물' : 'What you produce'}</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {(lang === 'ko' ? activeModule.outputs : activeModule.outputsEn).map((o, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.6rem', padding: '0.6rem 0', borderBottom: '1px solid var(--rail-soft)', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 300 }}>
                      <span style={{ color: 'var(--lock)' }}>✓</span>{o}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'var(--dim)', fontWeight: 300, marginTop: '1.4rem', marginBottom: 0 }}>
                  {lang === 'ko'
                    ? '수료 기준은 출석 시간이 아니라 이 산출물입니다. M2부터의 전체 내용은 교육 참여자에게 제공됩니다.'
                    : 'Completion is measured by these outputs, not attendance hours. Full detail from M2 onward is provided to enrolled participants.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT SUPPORT */}
      <section className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.supportEyebrow} title={p.supportTitle} subtitle={lang === 'ko' ? '장비 미보유자도 착수 가능하도록 실습 환경과 재료를 사업에서 제공합니다.' : 'We provide the practice environment and materials so no one is blocked by missing equipment.'} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {equipmentSupport.map((e, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card card-hover" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>{lang === 'ko' ? e.label : e.labelEn}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--faint)', marginTop: '0.25rem' }}>{lang === 'ko' ? e.note : e.noteEn}</div>
                  </div>
                  <span style={{ ...mono('0.85rem'), color: 'var(--beam)', fontWeight: 700, flexShrink: 0, textAlign: 'right' }}>{lang === 'ko' ? e.limit : e.limitEn}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.whyEyebrow} title={p.whyTitle} />
          <div className="mt-10">
            <div style={{ ...mono('0.68rem'), color: 'var(--faint)', marginBottom: '0.8rem' }}>{p.outcomesTitle}</div>
            <div className="card" style={{ overflow: 'hidden' }}>
              {outcomeLayers.map((o, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: i ? '1px solid var(--rail-soft)' : 'none' }}>
                  <div style={{ padding: '1rem 1.2rem', fontWeight: 600, fontSize: '0.92rem', background: 'var(--panel)' }}>{lang === 'ko' ? o.label : o.labelEn}</div>
                  <div style={{ padding: '1rem 1.2rem', fontSize: '0.86rem', color: 'var(--text)', fontWeight: 300, lineHeight: 1.7 }}>{lang === 'ko' ? o.desc : o.descEn}</div>
                  <div style={{ padding: '1rem 1.2rem', fontSize: '0.8rem', color: 'var(--faint)' }}>{lang === 'ko' ? o.proof : o.proofEn}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div style={{ ...mono('0.68rem'), color: 'var(--faint)', marginBottom: '0.8rem' }}>{p.audienceTitle}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {participantTargets.map((a, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="card card-hover" style={{ padding: '1.5rem' }}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span style={{ fontSize: '1rem', fontWeight: 600 }}>{lang === 'ko' ? a.label : a.labelEn}</span>
                      <span style={{ ...mono('0.75rem'), color: 'var(--beam)' }}>{lang === 'ko' ? a.seats : a.seatsEn}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--dim)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{lang === 'ko' ? a.desc : a.descEn}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENTORING + SCHEDULE */}
      <section className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div style={{ border: '1px solid var(--rail)', borderRadius: 4, padding: '1.6rem' }}>
            <span style={{ ...mono('0.7rem'), color: 'var(--faint)' }}>{p.mentoringTitle}</span>
            <div className="mt-4">
              {mentoring.map((m, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: '0.9rem', padding: '0.85rem 0', borderTop: i === 0 ? 'none' : '1px solid var(--rail-soft)' }}>
                  <div>
                    <span style={{ ...mono('0.75rem'), color: 'var(--amp)', fontWeight: 700 }}>{lang === 'ko' ? m.round : m.roundEn}</span>
                    <div><span style={{ ...mono('0.6rem'), color: 'var(--faint)' }}>{m.week}{lang === 'ko' ? '주차' : 'w'}</span></div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--dim)', fontWeight: 300, lineHeight: 1.6 }}>{lang === 'ko' ? m.check : m.checkEn}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--lock)', marginTop: '0.25rem' }}>{lang === 'ko' ? m.out : m.outEn}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid var(--rail)', borderRadius: 4, padding: '1.6rem' }}>
            <span style={{ ...mono('0.7rem'), color: 'var(--faint)' }}>{p.scheduleTitle}</span>
            <div className="mt-4">
              {weekPlan.map((w, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: '0.9rem', padding: '0.72rem 0', borderTop: i === 0 ? 'none' : '1px solid var(--rail-soft)', alignItems: 'baseline' }}>
                  <span style={{ ...mono('0.72rem'), color: 'var(--beam)' }}>
                    {w.weeks.length > 1 ? `${w.weeks[0]}–${w.weeks[w.weeks.length - 1]}${lang === 'ko' ? '주' : 'w'}` : `${w.weeks[0]}${lang === 'ko' ? '주' : 'w'}`}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.9rem' }}>{lang === 'ko' ? w.label : w.labelEn}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)', fontWeight: 300, marginTop: '0.15rem' }}>{lang === 'ko' ? w.out : w.outEn}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta title={p.finalTitle} subtitle={p.finalSubtitle} ctaLabel={t.pages.contactCta} onCta={onContact} />

      <LockModal
        open={lockOpen}
        title={t.pages.lockedTitle}
        body={t.pages.lockedBody}
        ctaLabel={t.pages.lockedCta}
        closeLabel={t.pages.lockedClose}
        onClose={() => setLockOpen(false)}
        onCta={() => { setLockOpen(false); onContact(); }}
      />
    </>
  );
}
