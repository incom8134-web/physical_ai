export type Module = {
  code: string;
  ko: string;
  en: string;
  hours: number;
  week: string;
  weekEn: string;
  weeks: number[];
  topics: string[];
  topicsEn: string[];
  activity: string;
  activityEn: string;
  outputs: string[];
  outputsEn: string[];
};

export const modules: Module[] = [
  {
    code: 'M1',
    ko: '피지컬 AI 이해 및 프로젝트 발굴',
    en: 'Understand & Scope',
    hours: 6,
    week: '3주차',
    weekEn: 'Week 3',
    weeks: [3],
    topics: ['피지컬 AI의 정의', '소프트웨어 AI와의 차이', '주요 적용 분야', '프로젝트 사례'],
    topicsEn: ['Defining physical AI', 'How it differs from software AI', 'Key application areas', 'Project case studies'],
    activity: '현장 문제를 탐색하고 피지컬 AI 적용 기회를 찾아 본인 프로젝트 주제를 정합니다.',
    activityEn: 'Explore real-world problems, find opportunities to apply physical AI, and settle on your own project topic.',
    outputs: ['문제 정의서', '초기 프로젝트 아이디어'],
    outputsEn: ['Problem statement', 'Initial project idea'],
  },
  {
    code: 'M2',
    ko: '센서·구동부 및 시스템 구성 이해',
    en: 'Sensing & Actuation',
    hours: 12,
    week: '3주차',
    weekEn: 'Week 3',
    weeks: [3],
    topics: ['센서', '구동부·모터', '제어기', '입출력 구조', '시스템 아키텍처', '부품 선정 기준'],
    topicsEn: ['Sensors', 'Actuators & motors', 'Controllers', 'I/O structure', 'System architecture', 'Component selection criteria'],
    activity: '본인 프로젝트의 초기 시스템 구성을 작성하고 필요한 부품을 도출합니다.',
    activityEn: 'Draft an initial system configuration for your project and identify the parts you need.',
    outputs: ['초기 시스템 구성도', '부품 목록'],
    outputsEn: ['Initial system diagram', 'Parts list'],
  },
  {
    code: 'M3',
    ko: '제어·임베디드 시스템',
    en: 'Control & Embedded',
    hours: 12,
    week: '4주차',
    weekEn: 'Week 4',
    weeks: [4],
    topics: ['기본 제어 개념', '마이크로컨트롤러', '임베디드 시스템', 'HW–SW 통신', '구동부 제어'],
    topicsEn: ['Basic control concepts', 'Microcontrollers', 'Embedded systems', 'HW–SW communication', 'Actuator control'],
    activity: '본인 프로젝트 구성 요소의 기본 동작을 직접 구현합니다.',
    activityEn: 'Implement the basic operation of your project components yourself.',
    outputs: ['동작하는 기본 제어 시스템'],
    outputsEn: ['A working basic control system'],
  },
  {
    code: 'M4',
    ko: '인지·판단 AI 적용',
    en: 'Perception & Decision',
    hours: 12,
    week: '4주차',
    weekEn: 'Week 4',
    weeks: [4],
    topics: ['컴퓨터 비전', 'AI 인지', '판단 로직', 'VLA 개념', 'AI 모델과 물리 시스템 연결'],
    topicsEn: ['Computer vision', 'AI perception', 'Decision logic', 'VLA concepts', 'Connecting AI models to physical systems'],
    activity: '본인 프로젝트에 인지 또는 판단 기능을 연동합니다.',
    activityEn: 'Integrate a perception or decision-making feature into your project.',
    outputs: ['AI 기능이 통합된 프로젝트'],
    outputsEn: ['A project with AI features integrated'],
  },
  {
    code: 'M5',
    ko: '프로젝트 설계 및 프로토타이핑',
    en: 'Design & Prototype',
    hours: 12,
    week: '5주차',
    weekEn: 'Week 5',
    weeks: [5],
    topics: ['요구사항 정의', '시스템 아키텍처', 'HW–SW 계획', 'MVP 개념', '원가 산정', '일정', '위험요인'],
    topicsEn: ['Requirements definition', 'System architecture', 'HW–SW planning', 'MVP concept', 'Cost estimation', 'Scheduling', 'Risk factors'],
    activity: '프로젝트 설계서를 작성하고 프로토타입 제작에 착수합니다.',
    activityEn: 'Write your project design document and begin building the prototype.',
    outputs: ['프로젝트 설계서', '프로토타입(MVP) 계획'],
    outputsEn: ['Project design document', 'Prototype (MVP) plan'],
  },
  {
    code: 'M6',
    ko: '통합·검증·발표',
    en: 'Integrate & Verify',
    hours: 6,
    week: '5주차',
    weekEn: 'Week 5',
    weeks: [5],
    topics: ['시스템 통합', '시험', '문제 해결', '성능 검증', '시연 준비', '발표', '기초 사업화 기획'],
    topicsEn: ['System integration', 'Testing', 'Troubleshooting', 'Performance verification', 'Demo prep', 'Presentation', 'Basic commercialization planning'],
    activity: '프로토타입을 통합 검증하고 공개 발표를 준비합니다.',
    activityEn: 'Integrate and verify the prototype, and prepare for the public presentation.',
    outputs: ['동작하는 프로토타입(MVP)', '발표 자료', '기초 사업화 계획'],
    outputsEn: ['A working prototype (MVP)', 'Presentation materials', 'Basic commercialization plan'],
  },
];

export type Stage = {
  num: string;
  ko: string;
  en: string;
  hours: number;
  desc: string;
  descEn: string;
  topics: string[];
  topicsEn: string[];
  activity: string;
  activityEn: string;
  outputs: string[];
  outputsEn: string[];
};

export const stages: Stage[] = [
  {
    num: '01',
    ko: '기초 학습',
    en: 'Foundation',
    hours: 12,
    desc: '피지컬 AI의 개념과 구성 요소, 소프트웨어 AI와의 차이를 이해합니다.',
    descEn: 'Understand the concepts and components of physical AI and how it differs from software AI.',
    topics: ['개념과 구성 요소', '소프트웨어 AI와의 차이', '적용 분야', '프로젝트 사례'],
    topicsEn: ['Concepts & components', 'Difference from software AI', 'Application areas', 'Project case studies'],
    activity: '기술을 넓게 훑는 대신, 프로젝트를 진행하는 데 필요한 범위에서 학습합니다.',
    activityEn: 'Instead of surveying the technology broadly, you learn only what you need to move your project forward.',
    outputs: ['기초 이해', '적용 분야 정리'],
    outputsEn: ['Foundational understanding', 'Summary of application areas'],
  },
  {
    num: '02',
    ko: '아이디어 발굴',
    en: 'Ideation',
    hours: 8,
    desc: '현장의 실제 문제를 찾고, 본인 프로젝트 주제를 도출합니다.',
    descEn: 'Find real problems in the field and derive your own project topic.',
    topics: ['현장 문제 탐색', '적용 기회 발굴', '아이디어 도출', '주제 선정'],
    topicsEn: ['Exploring field problems', 'Finding application opportunities', 'Idea generation', 'Topic selection'],
    activity: '9단계 발굴 절차 중 1~4단계를 다루고, 1차 멘토링에서 검토합니다.',
    activityEn: 'Covers steps 1–4 of a 9-step discovery process, reviewed in the first mentoring round.',
    outputs: ['문제 정의서', '초기 프로젝트 아이디어'],
    outputsEn: ['Problem statement', 'Initial project idea'],
  },
  {
    num: '03',
    ko: '프로젝트 설계',
    en: 'Design',
    hours: 12,
    desc: '요구사항, 시스템 구성, 기술 선정, 일정과 비용을 문서로 확정합니다.',
    descEn: 'Finalize requirements, system configuration, technology choices, schedule, and cost in a document.',
    topics: ['요구사항', '시스템 구성', '기술 선정', '일정·원가', '위험요인'],
    topicsEn: ['Requirements', 'System configuration', 'Technology selection', 'Schedule & cost', 'Risk factors'],
    activity: '2차 멘토링에서 설계서를 확정하고 제작 범위를 고정합니다.',
    activityEn: 'Finalize the design document and lock the build scope in the second mentoring round.',
    outputs: ['프로젝트 기획서', '프로젝트 설계서'],
    outputsEn: ['Project proposal', 'Project design document'],
  },
  {
    num: '04',
    ko: '제작 및 검증',
    en: 'Build & Verify',
    hours: 18,
    desc: '프로토타입(MVP)을 구현하고 성능을 검증·개선합니다.',
    descEn: 'Build the prototype (MVP) and verify and improve its performance.',
    topics: ['기본 동작 구현', 'AI 기능 연동', '시스템 통합', '성능 검증'],
    topicsEn: ['Basic operation implementation', 'AI feature integration', 'System integration', 'Performance verification'],
    activity: '3차 멘토링에서 기술적 병목을 함께 풀고, 4차에서 동작 안정성을 확인합니다.',
    activityEn: 'Work through technical bottlenecks together in the third mentoring round, and confirm operational stability in the fourth.',
    outputs: ['동작하는 프로토타입(MVP)', '개발 진척 보고서'],
    outputsEn: ['A working prototype (MVP)', 'Development progress report'],
  },
  {
    num: '05',
    ko: '사업화 이해',
    en: 'Commercialization',
    hours: 10,
    desc: '고객, 가치 제안, 수익 구조, 후속 사업화 경로를 학습합니다.',
    descEn: 'Learn about customers, value proposition, revenue structure, and the path to commercialization.',
    topics: ['고객 정의', '가치 제안', '수익 구조', '후속 사업화 경로'],
    topicsEn: ['Customer definition', 'Value proposition', 'Revenue structure', 'Path to commercialization'],
    activity: '공개 발표회에서 대외 실증 자료를 확보하고 후속 상담으로 연결합니다.',
    activityEn: 'Secure external validation material at the public demo day and connect it to follow-up consultations.',
    outputs: ['발표 자료', '사업화 계획서'],
    outputsEn: ['Presentation materials', 'Commercialization plan'],
  },
];

export const mentoring = [
  { round: '1차', roundEn: 'Round 1', week: 3, check: '문제 · 대상 사용자 · 해결안 · 적합성 · 실현성 · 범위', checkEn: 'Problem · target users · solution · fit · feasibility · scope', out: '프로젝트 타당성 검토서', outEn: 'Project feasibility review' },
  { round: '2차', roundEn: 'Round 2', week: 5, check: '시스템 구성 · 부품 · HW · SW · AI · 일정 · 원가', checkEn: 'System configuration · parts · HW · SW · AI · schedule · cost', out: '프로젝트 설계서 (확정)', outEn: 'Project design document (final)' },
  { round: '3차', roundEn: 'Round 3', week: 7, check: '제작 진척 · 기술적 병목 · 통합 · 개선 사항', checkEn: 'Build progress · technical bottlenecks · integration · improvements', out: '개발 진척 보고서', outEn: 'Development progress report' },
  { round: '4차', roundEn: 'Round 4', week: 9, check: '동작 안정성 · 성능 · 시연 · 적용 시나리오', checkEn: 'Operational stability · performance · demo · application scenarios', out: '발표 준비 완료 프로젝트', outEn: 'Presentation-ready project' },
];

export const weekPlan = [
  { weeks: [1, 2], label: '모집 · 선발', labelEn: 'Recruiting & selection', out: '선발 결과 보고서', outEn: 'Selection results report' },
  { weeks: [3], label: 'M1–M2 교육 (18H)', labelEn: 'M1–M2 training (18H)', out: '문제 정의서 · 시스템 구성도', outEn: 'Problem statement · system diagram' },
  { weeks: [4, 5], label: 'M3–M6 교육 (42H)', labelEn: 'M3–M6 training (42H)', out: '역량 진단 · 프로젝트 설계서', outEn: 'Skills assessment · project design document' },
  { weeks: [6, 7, 8], label: '프로토타입 제작', labelEn: 'Prototype build', out: '개발 진척 보고서', outEn: 'Development progress report' },
  { weeks: [9], label: '최종 검증', labelEn: 'Final verification', out: '발표 준비 완료서', outEn: 'Presentation readiness report' },
  { weeks: [10], label: '공개 발표회', labelEn: 'Public demo day', out: '발표 자료 · 사업화 계획', outEn: 'Presentation materials · commercialization plan' },
];

export const services = [
  {
    num: '01',
    title: '교육',
    subtitle: 'Education',
    targets: ['대학생', '산업체 재직자'],
    items: ['기초 개념과 AI·로보틱스', '로봇 체험과 조작 실습', '안전 교육과 실무 교재', '교육 콘텐츠 기반'],
  },
  {
    num: '02',
    title: '컨설팅',
    subtitle: 'Consulting',
    targets: ['사업가', '기업', '투자자'],
    items: ['기술 이해와 산업 기회', '활용 사례와 도입 방향', 'Demo·PoC 기획', '제안 서비스'],
  },
  {
    num: '03',
    title: 'CS / AS',
    subtitle: 'Support',
    targets: ['기업', '기관', '운영 조직'],
    items: ['운영 안내와 기술 지원', '사용 교육과 문제 대응', '유지관리·지원 연계', '범위 협의'],
  },
  {
    num: '04',
    title: '대여',
    subtitle: 'Rental',
    targets: ['기업', '대학', '전시', '행사'],
    items: ['로봇 대여와 전시 체험', '기업 쇼케이스·엔터테인먼트', '피지컬 AI 경험 프로그램', '협력 연계 활용'],
  },
];

export const journey = [
  { step: '01', label: '인식', sub: '피지컬 AI 세미나\n무엇이 달라질까?' },
  { step: '02', label: '체험', sub: '해봇 AI (Heabot AI)\n직접 보고 경험하기' },
  { step: '03', label: '교육', sub: '학생·재직자 학습\n어떻게 작동할까?' },
  { step: '04', label: '컨설팅', sub: '산업·업무 연결\n어디에 가치가 있을까?' },
  { step: '05', label: 'Demo/PoC', sub: '소규모 실증\n우리 환경에서도 될까?' },
  { step: '06', label: '도입·지원', sub: '교육·운영 지원\n지속 활용을 준비하기' },
];

export const robots = [
  {
    name: '해봇 AI (Haebot AI)',
    type: '듀얼암 모바일 매니퓰레이터',
    spec: '양팔 · 그리퍼',
    desc: '두 팔로 물체를 집고 옮기는 이동형 매니퓰레이터. 머리의 스테레오 카메라로 주변을 인식합니다.',
    art: 'platform' as const,
  },
  {
    name: '해봇 AI (Haebot AI)',
    type: '메카넘 휠 베이스',
    spec: '전방향 주행',
    desc: '네 바퀴 모두 메카넘 휠 — 전후좌우·대각선 이동과 제자리 회전이 가능합니다.',
    art: 'platform' as const,
  },
  {
    name: '해봇 AI (Haebot AI)',
    type: '교육·연구 현장',
    spec: '실습 · 프로젝트',
    desc: '강의실과 연구실에 두고 쓰는 실습 플랫폼. 학생 프로젝트의 기반 장비로 활용합니다.',
    art: 'platform' as const,
  },
];

// ---------------------------------------------------------------------------
// Rental page content — Heabot AI (해봇 AI), JINIE EDUTECH's own platform
// ---------------------------------------------------------------------------

export type RentalUseCase = { title: string; titleEn: string; desc: string; descEn: string };
export type RentalRobot = {
  key: 'purchase' | 'term' | 'event';
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  image: string;
  type: string;
  typeEn: string;
  specs: { label: string; labelEn: string; value: string; valueEn: string }[];
  desc: string;
  descEn: string;
  bestFor: string[];
  bestForEn: string[];
  includes: string[];
  includesEn: string[];
};

export const rentalRobots: RentalRobot[] = [
  {
    key: 'purchase',
    name: '해봇 AI · 구매',
    nameEn: 'Haebot AI · Purchase',
    tagline: '상시 운용 · 연구 · 사업화',
    taglineEn: 'Full-time use, research, and product work',
    image: '/images/haebot-full.jpg',
    type: '듀얼암 모바일 매니퓰레이터',
    typeEn: 'Dual-arm mobile manipulator',
    specs: [
      { label: '조작', labelEn: 'Manipulation', value: '양팔 · 그리퍼', valueEn: 'Dual arms with grippers' },
      { label: '비전', labelEn: 'Vision', value: '헤드 스테레오 카메라', valueEn: 'Stereo camera in the head' },
      { label: '이동', labelEn: 'Locomotion', value: '메카넘 휠 · 전방향 주행', valueEn: 'Mecanum wheels · omnidirectional' },
      { label: '소프트웨어', labelEn: 'Software', value: 'AI 인지·판단 연동', valueEn: 'AI perception & decision' },
    ],
    desc: '해봇 AI를 직접 소유해 상시 운용합니다. 연구실의 기반 장비로, 자체 서비스 개발의 테스트베드로, 현장 도입의 실증 장비로 쓰실 때 가장 경제적입니다. 용도에 맞춰 그리퍼·센서 등 구성을 협의해 제작합니다.',
    descEn: 'Own a Haebot AI and run it full time. It is the most economical option as a lab’s base hardware, a testbed for your own service, or validation equipment for an on-site rollout. Grippers, sensors, and other parts are configured to your use.',
    bestFor: ['기업 도입 · 현장 실증', '연구실 기반 장비', '자체 서비스 · 제품 개발', '상설 전시 · 쇼룸'],
    bestForEn: ['Corporate adoption & on-site validation', 'Base hardware for a lab', 'Building your own service or product', 'Permanent exhibits & showrooms'],
    includes: ['설치 · 운용 교육', '사용 매뉴얼 · 기술 문서', '구매 후 유지보수 · 기술 지원', '기관 조달 · 납품 서류'],
    includesEn: ['Installation and operator training', 'User manual and technical documentation', 'Maintenance and technical support after purchase', 'Procurement and delivery paperwork'],
  },
  {
    key: 'term',
    name: '해봇 AI · 장기 대여',
    nameEn: 'Haebot AI · Long-term Rental',
    tagline: '학기 · 과제 기간 단위',
    taglineEn: 'By semester or project period',
    image: '/images/haebot-lab.jpg',
    type: '교육 · 연구용',
    typeEn: 'Education & research',
    specs: [
      { label: '기간', labelEn: 'Period', value: '학기 · 과제 기간 단위', valueEn: 'Semester or project period' },
      { label: '연계', labelEn: 'Paired with', value: '피지컬 AI 교육 과정', valueEn: 'Our physical AI course' },
      { label: '대상', labelEn: 'For', value: '대학 · 연구기관 · 기업 교육', valueEn: 'Universities, institutes, corporate training' },
      { label: '전환', labelEn: 'Upgrade path', value: '구매 전환 가능', valueEn: 'Convertible to purchase' },
    ],
    desc: '한 학기나 과제 기간 동안 해봇 AI를 두고 씁니다. 교육 과정과 묶어 실습 장비로 쓰거나, 구매 전에 충분히 검증해 보는 용도에 맞습니다. 대여 기간이 끝난 뒤 구매로 전환하실 수도 있습니다.',
    descEn: 'Keep a Haebot AI for a semester or a project period. It suits hands-on course equipment bundled with our training, or a thorough evaluation before buying. You can convert to a purchase when the rental ends.',
    bestFor: ['대학 실습 · 캡스톤 수업', '정부과제 · 연구 기간', '기업 사내 교육', '구매 전 검증'],
    bestForEn: ['University labs & capstone courses', 'Government projects & research periods', 'Corporate in-house training', 'Evaluation before buying'],
    includes: ['설치 · 운용 교육', '교육 과정 연계 실습 자료', '대여 기간 중 원격 기술 지원', '기간 종료 후 회수 또는 구매 전환'],
    includesEn: ['Installation and operator training', 'Practice material tied to the course', 'Remote technical support during the rental', 'Collection at the end, or conversion to purchase'],
  },
  {
    key: 'event',
    name: '해봇 AI · 단기 대여',
    nameEn: 'Haebot AI · Short-term Rental',
    tagline: '전시 · 행사 · 촬영',
    taglineEn: 'Exhibitions, events, and shoots',
    image: '/images/haebot-mecanum.jpg',
    type: '행사 · 시연용',
    typeEn: 'Events & demos',
    specs: [
      { label: '기간', labelEn: 'Period', value: '1일 ~ 수 주', valueEn: 'One day to several weeks' },
      { label: '운영', labelEn: 'Operation', value: '전담 오퍼레이터 동행', valueEn: 'Dedicated operator on site' },
      { label: '공간', labelEn: 'Space', value: '좁은 부스에서도 전방향 주행', valueEn: 'Omnidirectional even in tight booths' },
      { label: '구성', labelEn: 'Setup', value: '행사별 데모 시나리오', valueEn: 'Demo scenario per event' },
    ],
    desc: '박람회 부스, 제품 런칭, 컨퍼런스, 촬영 현장에 해봇 AI를 보내 드립니다. 메카넘 휠 덕분에 방향 전환 공간이 부족한 부스 안에서도 자유롭게 움직여, 관람객 앞에서 인지–판단–행동을 그대로 보여줍니다.',
    descEn: 'We send Haebot AI to trade show booths, product launches, conferences, and film sets. Its mecanum wheels let it move freely even in a booth with no room to turn, showing sense-decide-act right in front of visitors.',
    bestFor: ['전시 · 박람회 체험 부스', '제품 런칭 · 컨퍼런스', '기업 쇼케이스', '방송 · 영상 촬영'],
    bestForEn: ['Exhibition & trade show booths', 'Product launches & conferences', 'Corporate showcases', 'Broadcast & video shoots'],
    includes: ['전담 오퍼레이터 현장 지원', '데모 시나리오 기획 · 리허설', '운반 · 설치 · 철수 · 안전관리', '촬영 · 관람객 인터랙션 가이드'],
    includesEn: ['A dedicated operator on site', 'Demo scenario planning and rehearsal', 'Transport, setup, teardown & safety', 'Filming and visitor-interaction guide'],
  },
];

// Campaign posters shown in the expandable carousel below the rental robots.
export type PosterCard = {
  key: string;
  image: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  body: string[];
  bodyEn: string[];
};

export const posterCards: PosterCard[] = [
  {
    key: 'physical-ai',
    image: '/images/poster-physical-ai.jpg',
    title: 'AI는 생각할 수 있습니다. 하지만 행동할 수 있을까요?',
    titleEn: 'AI can think. But can it act?',
    category: '피지컬 AI 소개',
    categoryEn: 'Introducing Physical AI',
    body: [
      '소프트웨어 AI는 화면 안에서 답을 만들어 냅니다. 피지컬 AI는 그 답을 현실에서 실행합니다 — 카메라로 보고, 판단하고, 모터를 움직여 결과를 만듭니다.',
      '지니에듀테크는 다음 세대의 교육과 산업을 바꾸는 이 전환을 판매·대여, 교육, 컨설팅으로 지원합니다.',
    ],
    bodyEn: [
      'Software AI produces an answer on a screen. Physical AI carries that answer out in the real world — it sees through a camera, decides, and drives motors to produce a result.',
      'JINIE EDUTECH supports this shift through sales and rental, training, and consulting.',
    ],
  },
  {
    key: 'haebot',
    image: '/images/poster-haebot.jpg',
    title: 'AI가 세상을 이해하고 직접 행동하는 시대',
    titleEn: 'The age of AI that understands the world and acts on it',
    category: '해봇 AI',
    categoryEn: 'Haebot AI',
    body: [
      '센서로 세상을 인식하고, AI가 판단하고 계획하고, 액추에이터가 직접 행동하고, 피드백으로 더 똑똑해집니다. 해봇 AI는 이 순환을 한 대의 로봇에 담았습니다.',
      '양팔 매니퓰레이터와 메카넘 휠 베이스로 교육, 산업, 파트너십 현장을 모두 다룹니다.',
    ],
    bodyEn: [
      'Sensors perceive the world, AI decides and plans, actuators act, and feedback makes it smarter. Haebot AI puts that whole loop into one robot.',
      'With dual arms and a mecanum-wheel base, it covers education, industry, and partnership work alike.',
    ],
  },
  {
    key: 'design-system',
    image: '/images/poster-design-system.jpg',
    title: '시스템을 설계하라',
    titleEn: 'Design the system',
    category: '시스템 구성',
    categoryEn: 'System architecture',
    body: [
      '센서가 세상을 감지하고, 컨트롤러가 데이터를 처리하고, AI가 판단하고 결정하고, 액추에이터가 현실을 움직이고, 피드백이 결과를 다시 반영합니다.',
      '카메라·센서, 엣지 컨트롤러, AI 모델, 모터·구동부 — 작은 부품들이 모여 피지컬 AI 시스템을 이룹니다.',
    ],
    bodyEn: [
      'Sensors sense the world, a controller processes the data, AI decides, actuators move the real world, and feedback feeds the result back in.',
      'Cameras and sensors, an edge controller, an AI model, motors and drives — small parts that together make a physical AI system.',
    ],
  },
  {
    key: 'journey',
    image: '/images/poster-journey.jpg',
    title: '피지컬 AI 프로젝트 여정 — 8단계',
    titleEn: 'The physical AI project journey — 8 steps',
    category: '프로젝트 로드맵',
    categoryEn: 'Project roadmap',
    body: [
      '학습 → 문제 발굴 → 아이디어 → 설계 → 구축 → 검증 → 사업화 → 발표. 아이디어에서 발표까지 한눈에 보는 로드맵입니다.',
      '복잡한 AI를 실행 가능한 피지컬 AI 프로젝트로 — 교육 과정은 이 순서를 따라 진행됩니다.',
    ],
    bodyEn: [
      'Learn → find the problem → idea → design → build → validate → commercialize → present. The whole road from idea to demo day on one page.',
      'Turning complex AI into a physical AI project you can actually build — our course follows this order.',
    ],
  },
  {
    key: 'barriers',
    image: '/images/poster-barriers.jpg',
    title: '왜 Physical AI는 시작하기 어려울까요?',
    titleEn: 'Why is Physical AI hard to start?',
    category: '진입 장벽 4가지',
    categoryEn: 'Four barriers to entry',
    body: [
      '아이디어는 있지만 실제로 만들기까지는 넘어야 할 장벽이 많습니다. 학습(무엇부터 배울까), 기획·검증(어떻게 프로젝트로 만들까), 장비·제작(무엇으로 만들까), 사업화(어떻게 비즈니스로 연결할까).',
      '기술을 아는 것과 프로젝트를 만드는 것은 다릅니다. 교육 과정은 이 네 장벽을 순서대로 넘도록 설계되어 있습니다.',
    ],
    bodyEn: [
      'Having an idea is not the same as building one. Four barriers stand in the way: learning (where do I start), planning and validation (how does this become a project), equipment and fabrication (what do I build it with), and commercialization (how does it become a business).',
      'Knowing the technology and delivering a project are different things. The course is built to clear these four barriers in order.',
    ],
  },
  {
    key: 'ideas',
    image: '/images/poster-ideas.jpg',
    title: 'IDEAS INTO REALITY — 함께, 더 큰 가능성을 만듭니다',
    titleEn: 'Ideas into reality — building bigger possibilities together',
    category: '회사 소개',
    categoryEn: 'Company overview',
    body: [
      '아이디어가 현실이 되는 곳, 지니에듀테크. 교육, 연구, 제작, 스마트팜, 산업 솔루션 — 다섯 영역에서 AI와 로봇으로 현장의 문제를 함께 해결합니다.',
      '사람과 기술이 만드는 더 나은 미래를 위해, 해봇 AI와 함께 배우고, 만들고, 실전을 경험합니다.',
    ],
    bodyEn: [
      'JINIE EDUTECH, where ideas become real. Education, research, fabrication, smart farming, industrial solutions — five areas where we solve real problems with AI and robots.',
      'Learning, building, and getting real-world experience with Haebot AI, toward a better future made by people and technology.',
    ],
  },
];

export const rentalUseCases: RentalUseCase[] = [
  { title: '기업 도입', titleEn: 'Corporate adoption', desc: '현장 실증부터 상시 운용까지 — 먼저 대여로 검증하고 구매로 이어가는 방식이 가장 흔합니다.', descEn: 'From on-site validation to full-time operation — most customers rent to validate, then buy.' },
  { title: '대학·연구', titleEn: 'Universities & research', desc: '실습 수업, 캡스톤 프로젝트, 연구 장비 — 학과 예산에 맞춰 구매와 학기 단위 대여 중 선택합니다.', descEn: 'Lab courses, capstone projects, research equipment — buy it or rent by the semester, whichever fits the budget.' },
  { title: '전시·행사', titleEn: 'Exhibitions & events', desc: '박람회 부스, 제품 런칭, 컨퍼런스 — 단기 대여로 관람객의 발길을 잡는 체험 콘텐츠를 만듭니다.', descEn: 'Trade show booths, product launches, conferences — short-term rentals that draw visitors in.' },
  { title: '방송·콘텐츠', titleEn: 'Broadcast & content', desc: '촬영·유튜브·광고 등 미디어 제작을 위한 로봇 섭외와 현장 연출을 지원합니다.', descEn: 'We support robot booking and on-site direction for filming, YouTube, ads, and other media production.' },
];

export const rentalProcess = [
  { step: '01', title: '문의 접수', titleEn: 'Inquiry', desc: '구매인지 대여인지, 용도와 기간을 알려주시면 담당자가 24시간 내 연락드립니다.', descEn: 'Tell us whether you are buying or renting, plus the use and duration — we reply within 24 hours.' },
  { step: '02', title: '구성 상담', titleEn: 'Configuration', desc: '어떤 구성이 필요한지, 추가 모듈이나 커스터마이징이 필요한지 함께 정합니다.', descEn: 'We settle which configuration you need, and whether extra modules or customization are involved.' },
  { step: '03', title: '견적·계약', titleEn: 'Quote & contract', desc: '구매가 또는 대여료, 운반·설치 범위를 반영한 견적서를 전달드립니다. 기관 조달 서류도 지원합니다.', descEn: 'We send a quote covering purchase price or rental fee plus transport and setup, and support procurement paperwork.' },
  { step: '04', title: '납품·설치·교육', titleEn: 'Delivery, setup & training', desc: '현장에 설치하고 운용 교육까지 진행합니다. 대여는 철수까지, 구매는 이후 유지보수까지 이어집니다.', descEn: 'We install on site and train your operators. Rentals run through teardown; purchases continue into maintenance.' },
];

// ---------------------------------------------------------------------------
// Consulting page content
// ---------------------------------------------------------------------------

export type ConsultingAudience = {
  key: 'students' | 'startups' | 'b2b' | 'investors';
  label: string;
  labelEn: string;
  eyebrow: string;
  headline: string;
  headlineEn: string;
  desc: string;
  descEn: string;
  offers: string[];
  offersEn: string[];
};

export const consultingAudiences: ConsultingAudience[] = [
  {
    key: 'students',
    label: '학생',
    labelEn: 'Students',
    eyebrow: 'For Students',
    headline: '진로와 프로젝트로\n피지컬 AI를 연결합니다',
    headlineEn: 'Connecting physical AI\nto your path and projects',
    desc: '피지컬 AI 분야로 진로를 고민하는 학생, 졸업 프로젝트나 공모전을 준비하는 팀을 위한 방향 제시와 실습 연계를 제공합니다.',
    descEn: 'Guidance and hands-on connections for students considering a career in physical AI, and for teams preparing a capstone project or competition entry.',
    offers: ['분야 개요와 진로 로드맵 상담', '졸업작품·공모전 주제 발굴 코칭', '로봇 실습 연계 및 장비 자문', '포트폴리오·발표 자료 피드백'],
    offersEn: ['Field overview and career roadmap consulting', 'Coaching to find a capstone or competition topic', 'Hands-on robot access and equipment advice', 'Feedback on portfolios and presentation materials'],
  },
  {
    key: 'startups',
    label: '초기 스타트업',
    labelEn: 'Early-stage startups',
    eyebrow: 'For Young Startups',
    headline: '아이디어를\n검증 가능한 제품으로',
    headlineEn: 'Turning an idea into\na testable product',
    desc: '피지컬 AI 아이템을 준비 중인 예비창업자와 초기 스타트업을 위해, 기술 타당성 검토부터 MVP·PoC 설계까지 실행 중심으로 돕습니다.',
    descEn: 'Hands-on support for aspiring founders and early-stage startups building a physical AI product — from technical feasibility review to MVP/PoC design.',
    offers: ['기술·시장 타당성 진단', 'MVP/PoC 범위 설계 및 로드맵', '정부지원사업·R&D 연계 자문', '투자 유치용 기술 자료 정리'],
    offersEn: ['Technical & market feasibility assessment', 'MVP/PoC scope design and roadmap', 'Advice on government funding & R&D programs', 'Preparing technical materials for fundraising'],
  },
  {
    key: 'b2b',
    label: 'B2B · 기업',
    labelEn: 'B2B & Companies',
    eyebrow: 'For B2B & Companies',
    headline: '현장에 맞는\n도입 시나리오 설계',
    headlineEn: 'Designing an adoption\nscenario for your site',
    desc: '제조·물류·서비스 현장에 피지컬 AI를 도입하려는 기업을 위해, 업무 프로세스 분석부터 로봇 적용 시나리오, 조직 준비까지 함께 설계합니다.',
    descEn: 'For companies adopting physical AI in manufacturing, logistics, or service settings — from process analysis to robot deployment scenarios and organizational readiness.',
    offers: ['업무 프로세스·적용 지점 진단', '업종별 활용 사례 및 도입 로드맵', 'Demo·PoC 기획 및 현장 실증', '실무자 교육 및 조직 준비 컨설팅'],
    offersEn: ['Diagnosing workflows and application points', 'Industry use cases and an adoption roadmap', 'Demo/PoC planning and on-site validation', 'Staff training and organizational readiness consulting'],
  },
  {
    key: 'investors',
    label: '투자자',
    labelEn: 'Investors',
    eyebrow: 'For Investors',
    headline: '기술을 이해하고\n판단할 수 있도록',
    headlineEn: 'Understand the technology\nwell enough to judge it',
    desc: '피지컬 AI 분야 투자를 검토하는 투자자와 심사역을 위해, 기술 브리핑과 기술 실사(Tech Due Diligence) 관점의 자료를 제공합니다.',
    descEn: 'For investors and analysts evaluating physical AI opportunities — technology briefings and materials framed for technical due diligence.',
    offers: ['비전문가를 위한 기술 브리핑', '기술 실사(Tech DD) 체크리스트 자문', '포트폴리오사 로봇 데모 참관 주선', '시장·경쟁 기술 동향 리포트'],
    offersEn: ['Technology briefings for non-specialists', 'Advice on a technical due-diligence checklist', 'Arranging robot demo visits for portfolio companies', 'Market and competing-technology trend reports'],
  },
];

export const consultingProcess = [
  { step: '01', title: '진단', titleEn: 'Diagnosis', desc: '현재 이해도, 목표, 제약 조건을 함께 확인합니다.', descEn: 'Together we assess your current understanding, goals, and constraints.' },
  { step: '02', title: '기회 분석', titleEn: 'Opportunity analysis', desc: '업종·상황에 맞는 피지컬 AI 활용 기회를 도출합니다.', descEn: 'We identify physical AI opportunities suited to your industry and situation.' },
  { step: '03', title: 'Demo·PoC', titleEn: 'Demo · PoC', desc: '실물 로봇으로 소규모 개념 검증을 설계·실행합니다.', descEn: 'We design and run a small-scale proof of concept with a real robot.' },
  { step: '04', title: '실행 로드맵', titleEn: 'Execution roadmap', desc: '도입·투자·창업 등 다음 단계를 위한 실행 계획을 제시합니다.', descEn: 'We lay out an execution plan for your next step — adoption, investment, or launching a company.' },
];

export const consultingTopics = [
  { title: '피지컬 AI 기술의 이해', titleEn: 'Understanding physical AI', desc: '인지-판단-제어(Sense-Decide-Act)와 VLA 구조 등 핵심 개념을 쉽게 설명합니다.', descEn: 'We explain core concepts like the Sense-Decide-Act loop and VLA architecture in plain terms.' },
  { title: '업종별 활용 사례', titleEn: 'Use cases by industry', desc: '제조·물류·서비스·교육 등 분야별 도입 사례와 적용 가능성을 분석합니다.', descEn: 'We analyze adoption cases and applicability across manufacturing, logistics, service, education, and more.' },
  { title: 'Build vs Buy vs Rent', titleEn: 'Build vs. Buy vs. Rent', desc: '자체 개발, 솔루션 구매, 로봇 대여 중 상황에 맞는 접근을 판단합니다.', descEn: 'We help you decide between building in-house, buying a solution, or renting a robot.' },
  { title: 'Demo·PoC 설계', titleEn: 'Demo · PoC design', desc: '실물 로봇으로 소규모 개념 검증을 설계하고, 성공 기준을 함께 정의합니다.', descEn: 'We design a small-scale proof of concept with a real robot and define success criteria together.' },
  { title: '투자·사업화 판단 자료', titleEn: 'Materials for investment & business decisions', desc: '기술 실사, 사업 타당성 검토에 필요한 근거 자료를 정리해 드립니다.', descEn: 'We compile the supporting materials you need for technical due diligence and feasibility review.' },
  { title: '조직 준비 및 교육', titleEn: 'Organizational readiness & training', desc: '현업 인력이 피지컬 AI를 다룰 수 있도록 교육·운영 체계를 설계합니다.', descEn: 'We design training and operating structures so your staff can work with physical AI.' },
];

export const customers = [
  { type: '기업 경영진', path: ['로봇 체험', '직원 교육', '컨설팅', 'Demo·PoC', '운영 지원'] },
  { type: '대학·학생', path: ['기술 입문', '로봇 체험', '학생 실습', '프로젝트·연구'] },
  { type: '사업가·투자자', path: ['기술 브리핑', '기회 분석', '컨설팅', '사업·투자 검토'] },
  { type: '행사·전시', path: ['로봇 대여', '쇼케이스', '관람객 체험', '브랜드 콘텐츠'] },
];
