/**
 * Site news — one entry per post, newest first.
 *
 * The site is a single-page app, so a post is not a file of its own: it is an
 * entry in this list, shown on the `#/updates` page and (the newest one) in a
 * band on the home page. Both languages sit side by side, as in data.ts, so the
 * page can switch language without a second lookup.
 */
export type UpdateImage = {
  src: string;
  alt: string;
  altEn: string;
  caption: string;
  captionEn: string;
};

export type UpdateEntry = {
  slug: string;
  /** ISO date — printed as 2026.11.22 in Korean and 2026-11-22 in English. */
  date: string;
  tag: string;
  tagEn: string;
  title: string;
  titleEn: string;
  /** Paragraphs, printed one under another. */
  body: string[];
  bodyEn: string[];
  images: UpdateImage[];
};

export const updates: UpdateEntry[] = [
  {
    slug: 'weekend-production-2026-11-22',
    date: '2026-11-22',
    tag: '제작 현장',
    tagEn: 'Workshop',
    title: '주말에도 돌아가는 지니에듀테크 제작 현장',
    titleEn: 'The Jinie EduTech production line keeps running through the weekend',
    body: [
      '남들 쉬는 일요일에도 지니에듀테크의 제작 라인은 멈추지 않습니다.',
      '피지컬 AI 로봇 해봇(HAEBOT)의 외장 하우징부터 경량 격자 브래킷·연결 파츠까지, 대형 3D 프린터들이 주말에도 쉬지 않고 부품을 찍어내고 있습니다.',
      '설계에 머무르지 않고 직접 출력하고 조립해 현장에 맞춰 고쳐 나가는 것 — 이것이 지니에듀테크가 로봇을 만드는 방식입니다.',
      '단기 대여부터 맞춤형 시제품·교육·현장 실증(PoC)까지 바로 대응할 수 있도록 제작 라인을 가동 중입니다.',
    ],
    bodyEn: [
      'Even on a Sunday, when everyone else is resting, the Jinie EduTech production line does not stop.',
      'From the outer housing of our Physical AI robot HAEBOT to lightweight lattice brackets and connector parts, our large-format 3D printers keep turning out parts through the weekend.',
      'We do not stop at the drawing: we print and assemble the parts ourselves and keep adjusting them to fit the field — that is how Jinie EduTech builds robots.',
      'The line is running so we can respond right away — from short-term rental to custom prototypes, training and on-site proof of concept (PoC).',
    ],
    images: [
      {
        src: '/images/updates/weekend-production-20261122-01.jpg',
        alt: '대형 3D 프린터 베드 위에 출력된 경량 격자 브래킷과 연결 파츠',
        altEn: 'Lightweight lattice brackets and connector parts printed on a large-format 3D printer bed',
        caption: '한 판씩 출력된 경량 격자 브래킷과 연결 파츠 — 무게를 덜면서 필요한 강도를 지키도록 형상을 다듬었습니다.',
        captionEn: 'Lightweight lattice brackets and connector parts, one plate at a time — shaped to shed weight while keeping the strength they need.',
      },
      {
        src: '/images/updates/weekend-production-20261122-02.jpg',
        alt: '해봇 외장 하우징을 출력 중인 대형 3D 프린터 내부',
        altEn: 'Inside a large-format 3D printer producing the HAEBOT outer housing',
        caption: '외장 하우징 출력 — 큰 형상도 한 번에 뽑을 수 있도록 대형 프린터를 돌립니다.',
        captionEn: 'Printing the outer housing — a large-format machine runs so even big shapes come out in one piece.',
      },
      {
        src: '/images/updates/weekend-production-20261122-03.jpg',
        alt: '작업대에서 출력이 끝난 해봇 하우징과 부품을 맞춰 보는 모습',
        altEn: 'Finished housing and printed parts checked on the workbench',
        caption: '출력이 끝난 하우징과 부품을 작업대에서 바로 맞춰 봅니다. 설계도에서 끝내지 않고 현장에 맞춰 고쳐 나갑니다.',
        captionEn: 'The finished housing and its parts are checked together on the bench. We do not stop at the drawing — we keep adjusting to the field.',
      },
    ],
  },
];

/** The newest entry, shown on the home page. */
export const latestUpdate: UpdateEntry = updates[0];
