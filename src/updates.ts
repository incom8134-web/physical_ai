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
    slug: 'pipa-busan-innovation-forum-2026-11-24',
    date: '2026-11-24',
    tag: '협회 활동',
    tagEn: 'Association',
    title: '[PIPA] 글로컬 기업 협의체 자문단 출범식 및 제2회 부산 기업 혁신 포럼 참석',
    titleEn: '[PIPA] Attending the Glocal Corporate Council Advisory Board Launch and the 2nd Busan Corporate Innovation Forum',
    body: [
      '어제 하루는 (사)부산정보기술협회(PIPA) 회장으로서 부산 산학협력과 AI·제조 혁신 현장을 바쁘게 오갔습니다.',
      "오전에는 부산 코모도호텔에서 열린 '글로컬 기업 협의체 자문단 출범식'(동아대·동서대·부산라이즈혁신원 등)에 참석해 기업과 대학이 함께 만드는 지속가능한 산학협력 생태계를 논의했습니다. 코모도호텔의 정겨운 호작도도 오랜만에 담아 보았습니다.",
      "오후에는 아스티호텔 부산 그랜드볼룸에서 열린 '2026 제2회 부산 기업 혁신 포럼'(부산경제진흥원 주최·주관, PIPA 후원)으로 이어졌습니다. \"AI와 제조업을 잇다, 부산의 새로운 미래를 열다\"라는 주제처럼, 지역 기업들이 AI 전환의 해법을 찾고 서로 연결될 수 있도록 협회도 현장에서 발로 뛰며 힘을 보태겠습니다.",
      '아무것도 하지 않으면 아무 일도 일어나지 않는다.',
      'MH정신, 이성웅',
      '문의: 010-4588-2794',
    ],
    bodyEn: [
      'Yesterday was a full day moving between Busan\'s industry–academia sites and the front lines of AI and manufacturing innovation as chairman of the Pusan IT Partners Association (PIPA).',
      "In the morning I attended the launch of the Glocal Corporate Council Advisory Board at the Busan Commodore Hotel (with Dong-A University, Dongseo University, the Busan Rise Innovation Center and others), where we discussed a sustainable industry–academia ecosystem that companies and universities build together. I also took a moment to photograph the hotel's warm-hearted tiger-and-magpie folk painting, something I had not seen in a long while.",
      'In the afternoon the day continued at the 2026 2nd Busan Corporate Innovation Forum in the Grand Ballroom of Asti Hotel Busan (hosted by the Busan Economic Promotion Agency, sponsored by PIPA). Under the theme "Connecting AI and Manufacturing, Opening Busan\'s New Future," PIPA will keep working on the ground so that local companies can find their way to AI transformation and connect with one another.',
      'If you do nothing, nothing happens.',
      'MH Spirit, Lee Seong-ung',
      'Inquiries: 010-4588-2794',
    ],
    images: [
      {
        src: '/images/updates/pipa-busan-innovation-forum-20261124-01.jpg',
        alt: "'글로컬 기업 협의체 자문단 출범식' 현장 — 부산 코모도호텔, 2026. 11. 23.(월) 10:00",
        altEn: 'The Glocal Corporate Council Advisory Board launch at the Busan Commodore Hotel, November 23, 2026, 10:00',
        caption:
          '기업과 대학이 함께 만드는 지속가능한 산학협력 생태계 — 동아대·동서대·부산라이즈혁신원 등과 함께한 글로컬 기업 협의체 자문단 출범식.',
        captionEn:
          'A sustainable industry–academia ecosystem built by companies and universities — the Glocal Corporate Council Advisory Board launch with Dong-A University, Dongseo University, the Busan Rise Innovation Center and others.',
      },
      {
        src: '/images/updates/pipa-busan-innovation-forum-20261124-02.jpg',
        alt: "'2026 제2회 부산 기업 혁신 포럼' 무대 — 아스티호텔 부산 그랜드볼룸",
        altEn: 'The stage of the 2026 2nd Busan Corporate Innovation Forum at the Grand Ballroom of Asti Hotel Busan',
        caption:
          "'AI와 제조업을 잇다, 부산의 새로운 미래를 열다' — 부산경제진흥원 주최·주관, PIPA 후원으로 2026. 11. 23.(월) 14:00~17:00 열린 포럼.",
        captionEn:
          '"Connecting AI and Manufacturing, Opening Busan\'s New Future" — hosted by the Busan Economic Promotion Agency and sponsored by PIPA, November 23, 2026, 14:00–17:00.',
      },
      {
        src: '/images/updates/pipa-busan-innovation-forum-20261124-03.jpg',
        alt: '부산 코모도호텔에 걸린 호작도 부조 — 까치와 호랑이를 새긴 전통 문양',
        altEn: 'A Hojakdo relief at the Busan Commodore Hotel — the traditional magpie-and-tiger motif',
        caption:
          '코모도호텔의 정겨운 호작도 — 바쁜 하루 사이 오랜만에 담아 본 부산의 얼굴입니다.',
        captionEn:
          'The warm-hearted Hojakdo at the Commodore Hotel — a face of Busan I had not photographed in a long while.',
      },
    ],
  },
  {
    slug: 'pipa-pukyong-forum-2026-11-27',
    date: '2026-11-23',
    tag: '행사·포럼',
    tagEn: 'Forum',
    title: '[PIPA×부경대] 조선·해양·플랜트 피지컬 AI 테크 포럼',
    titleEn: '[PIPA × Pukyong National University] Shipbuilding · Offshore · Plant Physical AI Tech Forum',
    body: [
      "AI가 화면을 넘어 스스로 보고 판단하고 움직이는 '피지컬 AI' 시대, 부산 지역 산업과 대학이 현장에서 답을 찾습니다.",
      "오는 11월 27일(금) 오전 10시, 광안리 아쿠아팰리스호텔 3층 오리온홀에서 국립부경대학교 공과대학과 (사)부산정보기술협회(PIPA)가 함께 '2026 조선·해양·플랜트 피지컬 AI 테크 포럼'을 엽니다.",
      '(사)부산정보기술협회 회장으로서 지역 IT·제조 기업과 대학을 잇는 초광역 산학협력, 실증(PoC) 거점 구축, 그리고 현장형 인재 양성의 방향을 함께 나누려 합니다.',
      '부산에서 시작하는 피지컬 AI 실증과 인재 양성, 말보다 현장의 결과로 보여드리겠습니다.',
      'https://www.haebotai.com',
      '아무것도 하지 않으면 아무 일도 일어나지 않는다.',
      'MH정신, 이성웅 · 행사 문의 010-4588-2794',
    ],
    bodyEn: [
      "In the era of 'Physical AI' that sees, judges and moves on its own beyond the screen, Busan's industries and universities are looking for answers in the field.",
      'On Friday, November 27 at 10 a.m., the College of Engineering at Pukyong National University and the Pusan IT Partners Association (PIPA) will open the 2026 Shipbuilding · Offshore · Plant Physical AI Tech Forum at the Orion Hall on the 3rd floor of the Aqua Palace Hotel in Gwangalli.',
      'As chairman of PIPA, I look forward to sharing the direction of cross-regional industry–academia cooperation that connects local IT and manufacturing companies with universities, the building of proof-of-concept (PoC) sites, and the training of talent for the field.',
      'The physical AI deployment and talent development that begin in Busan — we will show them through results in the field rather than in words.',
      'https://www.haebotai.com',
      'If you do nothing, nothing happens.',
      'MH Spirit, Lee Seong-ung · Forum inquiries 010-4588-2794',
    ],
    images: [
      {
        src: '/images/updates/pipa-pukyong-forum-20261123-01.jpg',
        alt: "'2026 조선·해양·플랜트 피지컬 AI 테크 포럼' 포스터 — 국립부경대학교와 부산정보기술협회(PIPA) 공동 주최",
        altEn: "Poster for the 2026 Shipbuilding · Offshore · Plant Physical AI Tech Forum, co-hosted by Pukyong National University and PIPA",
        caption:
          "2026. 11. 27.(금) 10:00~13:00, 광안리 아쿠아팰리스호텔 3층 오리온홀 — 피지컬 AI 기반 산업 적용 사례, 실증(PoC) 및 현장 도입 전략, 사족보행 로봇 등 로봇 시연이 함께 다뤄집니다.",
        captionEn:
          'Friday, November 27, 2026, 10:00–13:00, Orion Hall (3F), Aqua Palace Hotel, Gwangalli — the forum covers industrial applications of physical AI, proof-of-concept and on-site deployment strategies, and robot demonstrations including quadruped robots.',
      },
    ],
  },
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
