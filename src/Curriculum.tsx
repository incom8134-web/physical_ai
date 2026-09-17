import { useCallback, useEffect, useRef, useState } from 'react';
import { mentoring, modules, stages, weekPlan } from './data';

type Lens = 'module' | 'stage';

const TOTAL = 60;

function Mono({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.06em', ...style }}>
      {children}
    </span>
  );
}

export default function Curriculum() {
  const [lens, setLens] = useState<Lens>('module');
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  const items = lens === 'module' ? modules : stages;
  const count = items.length;
  const active = items[Math.min(idx, count - 1)];

  const go = useCallback(
    (next: number) => {
      setIdx(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      if (idx >= count - 1) {
        setPlaying(false);
      } else {
        setIdx(idx + 1);
      }
    }, 2200);
    return () => clearTimeout(t);
  }, [playing, idx, count]);

  const switchLens = (l: Lens) => {
    setLens(l);
    setIdx(0);
    setPlaying(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); setPlaying(false); go(idx + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setPlaying(false); go(idx - 1); }
  };

  const isModule = lens === 'module';
  const code = isModule ? modules[idx].code : stages[idx].num;
  const title = isModule ? modules[idx].ko : stages[idx].ko;
  const en = isModule ? modules[idx].en : stages[idx].en;
  const hours = active.hours;
  const topics = active.topics;
  const activity = isModule ? modules[idx].activity : stages[idx].activity;
  const when = isModule ? modules[idx].week : `${stages[idx].hours}시간 배정`;

  // Outputs accumulated up to and including the active step
  const ledger = items.flatMap((it, i) =>
    it.outputs.map(o => ({ text: o, step: i, owner: isModule ? modules[i].code : stages[i].num })),
  );
  const cumulative = items.slice(0, idx + 1).reduce((s, it) => s + it.hours, 0);
  const activeWeeks = isModule ? modules[idx].weeks : [];

  return (
    <section id="curriculum" className="px-5 md:px-10 py-20 md:py-28" style={{ borderTop: '1px solid var(--rail)' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-10">
          <div className="md:col-span-6">
            <h2 style={{ fontSize: 'clamp(2rem, 4.4vw, 3.2rem)', lineHeight: 1.12, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>
              커리큘럼을 직접<br />
              눌러보며 확인하세요
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, maxWidth: '46ch', margin: 0 }}>
              각 단계가 문서와 결과물을 남기고, 그것이 다음 단계의 입력물이 됩니다.
              아래에서 단계를 선택하면 무엇을 배우고 무엇이 손에 남는지 바로 확인할 수 있습니다.
            </p>
          </div>
        </div>

        {/* CONSOLE */}
        <div style={{ border: '1px solid var(--rail)', background: 'var(--deck)', borderRadius: 4, overflow: 'hidden' }}>

          {/* Console header */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 px-5 md:px-6 py-4"
            style={{ borderBottom: '1px solid var(--rail)', background: 'var(--panel)' }}
          >
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="blip" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lock)' }} />
                <Mono style={{ color: 'var(--dim)' }}>총 60시간</Mono>
              </div>
              <Mono style={{ color: 'var(--faint)' }}>이론 18 · 실습 42</Mono>
              <Mono style={{ color: 'var(--faint)' }}>10명 · 10주</Mono>
            </div>

            <div className="flex items-center gap-1" style={{ border: '1px solid var(--rail)', borderRadius: 3, padding: 2 }}>
              {(['module', 'stage'] as Lens[]).map(l => (
                <button
                  key={l}
                  onClick={() => switchLens(l)}
                  aria-pressed={lens === l}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '0.05em',
                    padding: '0.38rem 0.85rem',
                    borderRadius: 2,
                    border: 'none',
                    cursor: 'pointer',
                    background: lens === l ? 'var(--beam)' : 'transparent',
                    color: lens === l ? '#04070d' : 'var(--dim)',
                    fontWeight: lens === l ? 700 : 400,
                    transition: 'background 0.15s, color 0.15s',
                  }}
                >
                  {l === 'module' ? '모듈 M1–M6' : '학습 5단계'}
                </button>
              ))}
            </div>
          </div>

          {/* Hour allocation rail — proportional, clickable */}
          <div className="px-5 md:px-6 pt-6 pb-2">
            <div className="flex items-baseline justify-between mb-2">
              <Mono style={{ color: 'var(--faint)' }}>시간 배분</Mono>
              <Mono style={{ color: 'var(--amp)', fontSize: '0.72rem' }}>
                {cumulative}H / {TOTAL}H 누적
              </Mono>
            </div>
            <div
              ref={railRef}
              role="tablist"
              aria-label="커리큘럼 단계"
              tabIndex={0}
              onKeyDown={onKey}
              className="flex w-full"
              style={{ height: 52, gap: 2, borderRadius: 3, overflow: 'hidden' }}
            >
              {items.map((it, i) => {
                const on = i === idx;
                const done = i < idx;
                return (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={on}
                    onClick={() => { setPlaying(false); setIdx(i); }}
                    style={{
                      flexGrow: it.hours,
                      flexBasis: 0,
                      minWidth: 0,
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0 0.5rem',
                      textAlign: 'left',
                      background: on ? 'var(--beam)' : done ? 'rgba(92,139,255,0.22)' : 'var(--panel)',
                      color: on ? '#04070d' : done ? 'var(--text)' : 'var(--dim)',
                      transition: 'background 0.2s, color 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                      {isModule ? modules[i].code : stages[i].num}
                    </span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', fontWeight: 700, opacity: on ? 1 : 0.75 }}>
                      {it.hours}H
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between mt-2">
              <Mono style={{ color: 'var(--faint)', fontSize: '0.62rem' }}>
                막대 너비 = 배정 시간 · ← → 키로 이동
              </Mono>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setPlaying(false); go(idx - 1); }}
                  aria-label="이전 단계"
                  style={navBtn}
                >
                  ←
                </button>
                <button
                  onClick={() => { setPlaying(p => !p); if (idx === count - 1) setIdx(0); }}
                  style={{ ...navBtn, width: 'auto', padding: '0 0.75rem', color: playing ? 'var(--amp)' : 'var(--dim)' }}
                >
                  {playing ? '정지' : '순서대로 보기'}
                </button>
                <button
                  onClick={() => { setPlaying(false); go(idx + 1); }}
                  aria-label="다음 단계"
                  style={navBtn}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Detail + ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ borderTop: '1px solid var(--rail)', marginTop: '1rem' }}>
            <div className="lg:col-span-7 p-5 md:p-8" style={{ borderRight: '1px solid var(--rail)' }}>
              <div key={`${lens}-${idx}`} className="latch">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--beam)',
                      border: '1px solid var(--beam)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 2,
                    }}
                  >
                    {code}
                  </span>
                  <Mono style={{ color: 'var(--faint)' }}>{when}</Mono>
                </div>

                <h3 style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.3, margin: '0 0 0.3rem' }}>
                  {title}
                </h3>
                <Mono style={{ color: 'var(--faint)', fontSize: '0.72rem' }}>{en}</Mono>

                <div style={{ marginTop: '1.8rem' }}>
                  <Mono style={{ color: 'var(--faint)' }}>다루는 내용</Mono>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {topics.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.82rem',
                          padding: '0.32rem 0.7rem',
                          border: '1px solid var(--rail)',
                          background: 'var(--panel)',
                          borderRadius: 2,
                          color: 'var(--text)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1.8rem', paddingTop: '1.5rem', borderTop: '1px solid var(--rail)' }}>
                  <Mono style={{ color: 'var(--faint)' }}>본인 프로젝트에서 하는 일</Mono>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text)', fontWeight: 300, margin: '0.6rem 0 0', maxWidth: '52ch' }}>
                    {activity}
                  </p>
                </div>

                {isModule && (
                  <div style={{ marginTop: '1.8rem' }}>
                    <Mono style={{ color: 'var(--faint)' }}>10주 일정에서의 위치</Mono>
                    <div className="flex gap-1 mt-3">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(w => {
                        const on = activeWeeks.includes(w);
                        const mentor = mentoring.find(m => m.week === w);
                        return (
                          <div key={w} className="flex-1" style={{ minWidth: 0 }}>
                            <div
                              title={mentor ? `${w}주차 · ${mentor.round} 멘토링` : `${w}주차`}
                              style={{
                                height: 26,
                                background: on ? 'var(--beam)' : 'var(--panel)',
                                border: '1px solid',
                                borderColor: on ? 'var(--beam)' : 'var(--rail)',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background 0.2s',
                              }}
                            >
                              {mentor && (
                                <span style={{ width: 5, height: 5, borderRadius: '50%', background: on ? '#04070d' : 'var(--amp)' }} />
                              )}
                            </div>
                            <div style={{ textAlign: 'center', marginTop: 4 }}>
                              <Mono style={{ fontSize: '0.56rem', color: on ? 'var(--beam)' : 'var(--faint)' }}>{w}</Mono>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <Mono style={{ color: 'var(--faint)', fontSize: '0.62rem', display: 'block', marginTop: '0.6rem' }}>
                      <span style={{ color: 'var(--amp)' }}>●</span> 표시된 주차에 멘토링 회차가 있습니다
                    </Mono>
                  </div>
                )}
              </div>
            </div>

            {/* Output ledger */}
            <div className="lg:col-span-5 p-5 md:p-8" style={{ background: 'rgba(16,26,43,0.45)' }}>
              <div className="flex items-baseline justify-between mb-4">
                <Mono style={{ color: 'var(--faint)' }}>손에 남는 산출물</Mono>
                <Mono style={{ color: 'var(--lock)', fontSize: '0.72rem' }}>
                  {ledger.filter(l => l.step <= idx).length} / {ledger.length}
                </Mono>
              </div>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {ledger.map((l, i) => {
                  const got = l.step <= idx;
                  return (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.7rem',
                        padding: '0.6rem 0',
                        borderBottom: '1px solid var(--rail-soft)',
                        opacity: got ? 1 : 0.32,
                        transition: 'opacity 0.3s',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.6rem',
                          color: got ? 'var(--lock)' : 'var(--faint)',
                          flexShrink: 0,
                          width: 22,
                        }}
                      >
                        {got ? '완료' : ''}
                      </span>
                      <span style={{ fontSize: '0.88rem', fontWeight: got ? 400 : 300, color: got ? 'var(--text)' : 'var(--dim)' }}>
                        {l.text}
                      </span>
                      <Mono style={{ marginLeft: 'auto', color: 'var(--faint)', fontSize: '0.6rem', flexShrink: 0 }}>{l.owner}</Mono>
                    </li>
                  );
                })}
              </ul>

              <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--dim)', fontWeight: 300, marginTop: '1.5rem', marginBottom: 0 }}>
                수료 기준은 출석 시간이 아니라 이 목록입니다. 기획서 · 프로토타입 · 사업화 계획이 모두 채워졌을 때 과정이 끝납니다.
              </p>
            </div>
          </div>
        </div>

        {/* MENTORING + WEEK PLAN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <div style={{ border: '1px solid var(--rail)', borderRadius: 4, padding: '1.5rem' }}>
            <Mono style={{ color: 'var(--faint)' }}>프로젝트별 멘토링 4회차</Mono>
            <div className="mt-4">
              {mentoring.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '52px 1fr',
                    gap: '0.9rem',
                    padding: '0.85rem 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--rail-soft)',
                  }}
                >
                  <div>
                    <Mono style={{ color: 'var(--amp)', fontWeight: 700, fontSize: '0.75rem' }}>{m.round}</Mono>
                    <div><Mono style={{ color: 'var(--faint)', fontSize: '0.6rem' }}>{m.week}주차</Mono></div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--dim)', fontWeight: 300, lineHeight: 1.6 }}>{m.check}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--lock)', marginTop: '0.25rem' }}>{m.out}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid var(--rail)', borderRadius: 4, padding: '1.5rem' }}>
            <Mono style={{ color: 'var(--faint)' }}>10주 운영 일정</Mono>
            <div className="mt-4">
              {weekPlan.map((w, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '68px 1fr',
                    gap: '0.9rem',
                    padding: '0.72rem 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--rail-soft)',
                    alignItems: 'baseline',
                  }}
                >
                  <Mono style={{ color: 'var(--beam)', fontSize: '0.72rem' }}>
                    {w.weeks.length > 1 ? `${w.weeks[0]}–${w.weeks[w.weeks.length - 1]}주` : `${w.weeks[0]}주`}
                  </Mono>
                  <div>
                    <div style={{ fontSize: '0.9rem' }}>{w.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)', fontWeight: 300, marginTop: '0.15rem' }}>{w.out}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const navBtn: React.CSSProperties = {
  width: 30,
  height: 26,
  border: '1px solid var(--rail)',
  background: 'transparent',
  color: 'var(--dim)',
  cursor: 'pointer',
  borderRadius: 2,
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.68rem',
  lineHeight: 1,
};
