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
    name: 'Heabot AI (해봇 AI)',
    type: '양팔 · 이동형 베이스',
    spec: '자체 개발 플랫폼',
    desc: '양팔 매니퓰레이터와 이동형 카트 베이스를 결합한 자체 개발 플랫폼. 인지–판단–행동 전 과정을 한 대에서 실습합니다.',
    art: 'platform' as const,
  },
  {
    name: 'Heabot AI (해봇 AI)',
    type: '모듈러 구조',
    spec: '프레임 · 마운트 · 베이스',
    desc: '알루미늄 메인 프레임과 모터 마운트, 휠 브래킷이 모듈로 분리됩니다. 조립과 확장을 직접 다루며 기구 설계를 익힙니다.',
    art: 'platform' as const,
  },
  {
    name: 'Heabot AI (해봇 AI)',
    type: '개발 키트',
    spec: 'CAD 설계 연동',
    desc: '데스크탑 규모의 개발 키트. CAD 설계와 실물을 나란히 놓고 설계–제작–검증 흐름을 반복할 수 있습니다.',
    art: 'platform' as const,
  },
];

// ---------------------------------------------------------------------------
// Rental page content — Heabot AI (해봇 AI), JINIE EDUTECH's own platform
// ---------------------------------------------------------------------------

export type RentalUseCase = { title: string; titleEn: string; desc: string; descEn: string };
export type RentalRobot = {
  key: 'field' | 'modular' | 'kit';
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
    key: 'field',
    name: 'Heabot AI · 듀얼암 모바일',
    nameEn: 'Heabot AI · Dual-arm Mobile',
    tagline: '양팔 매니퓰레이터 + 이동형 베이스',
    taglineEn: 'Dual-arm manipulator on a mobile base',
    image: '/images/heabot-field.jpg',
    type: '양팔 조작 · 이동형',
    typeEn: 'Dual-arm · Mobile',
    specs: [
      { label: '조작', labelEn: 'Manipulation', value: '양팔 · 그리퍼', valueEn: 'Dual arms with grippers' },
      { label: '비전', labelEn: 'Vision', value: '뎁스 카메라 · 손목 카메라', valueEn: 'Depth camera · wrist cameras' },
      { label: '이동', labelEn: 'Locomotion', value: '캐스터 구동 베이스', valueEn: 'Castor-driven base' },
      { label: '전원', labelEn: 'Power', value: '탑재형 배터리 모듈', valueEn: 'On-board battery module' },
    ],
    desc: '양팔 조작과 자율 이동을 한 대에서 시연하는 지니에듀테크 자체 개발 플랫폼입니다. 물건을 집어 옮기고 지정 위치로 이동하는 시나리오를 통해, 인지–판단–행동 사이클이 실제로 어떻게 이어지는지 눈앞에서 확인할 수 있습니다.',
    descEn: 'JINIE EDUTECH’s own platform, demonstrating dual-arm manipulation and autonomous movement in a single machine. Pick-and-place and go-to-position scenarios show the sense-decide-act cycle playing out in front of you.',
    bestFor: ['대학 실습·캡스톤 수업', '전시·박람회 체험 부스', '기업 쇼케이스·제품 런칭', '방송·콘텐츠 촬영'],
    bestForEn: ['University labs & capstone courses', 'Exhibition & trade show booths', 'Corporate showcases & product launches', 'Broadcast & content shoots'],
    includes: ['전담 오퍼레이터 현장 지원', '시나리오 기획 및 리허설', '운반·설치·안전관리', '행사 특성에 맞춘 데모 구성'],
    includesEn: ['On-site support from a dedicated operator', 'Scenario planning & rehearsal', 'Transport, setup & safety management', 'Demo tailored to your event'],
  },
  {
    key: 'modular',
    name: 'Heabot AI · 모듈러 구성',
    nameEn: 'Heabot AI · Modular Build',
    tagline: '분해·조립이 가능한 모듈 구조',
    taglineEn: 'A build that comes apart and goes back together',
    image: '/images/heabot-modular.jpg',
    type: '모듈러 · 확장형',
    typeEn: 'Modular · Extensible',
    specs: [
      { label: '메인 프레임', labelEn: 'Main frame', value: '경량 알루미늄', valueEn: 'Lightweight aluminum' },
      { label: '휠 브래킷', labelEn: 'Wheel bracket', value: 'ABS+PC · 내충격', valueEn: 'ABS+PC, shock resistant' },
      { label: '베이스 플레이트', labelEn: 'Base plate', value: '알루미늄 합금 · 미끄럼 방지', valueEn: 'Aluminum alloy, anti-slip' },
      { label: '확장', labelEn: 'Extensibility', value: 'AI 모듈 증설 가능', valueEn: 'Ready for added AI modules' },
    ],
    desc: '메인 프레임, 모터 마운트, 휠 브래킷, 베이스 플레이트가 각각의 모듈로 분리됩니다. 완성품을 구경하는 대신 직접 뜯고 다시 조립하면서 기구 설계와 구동부 배치를 손으로 익힐 수 있어, 실습 수업과 워크숍에 특히 잘 맞습니다.',
    descEn: 'The main frame, motor mounts, wheel brackets, and base plate each come apart as separate modules. Instead of watching a finished machine, students take it apart and rebuild it — learning mechanical design and drivetrain layout by hand. A strong fit for lab courses and workshops.',
    bestFor: ['기구 설계 실습 수업', '조립·분해 워크숍', '메이커 교육 프로그램', '연구실 플랫폼 개조'],
    bestForEn: ['Mechanical design lab courses', 'Assembly & teardown workshops', 'Maker education programs', 'Lab platform customization'],
    includes: ['모듈 세트 및 조립 도구', '조립 순서 가이드', '안전 교육 및 현장 지도', '분실·파손 대응 예비 부품'],
    includesEn: ['Module set and assembly tools', 'Step-by-step build guide', 'Safety briefing and on-site guidance', 'Spare parts for loss or damage'],
  },
  {
    key: 'kit',
    name: 'Heabot AI · 개발 키트',
    nameEn: 'Heabot AI · Developer Kit',
    tagline: 'CAD 설계와 실물을 나란히',
    taglineEn: 'CAD model and hardware, side by side',
    image: '/images/heabot-kit.jpg',
    type: '데스크탑 · 개발용',
    typeEn: 'Desktop · Development',
    specs: [
      { label: '규모', labelEn: 'Scale', value: '데스크탑 설치형', valueEn: 'Desktop footprint' },
      { label: '설계', labelEn: 'Design', value: 'CAD 모델 연동', valueEn: 'Paired CAD model' },
      { label: '구성', labelEn: 'Contents', value: '본체 · 부품 · 제어 보드', valueEn: 'Body, parts, control board' },
      { label: '용도', labelEn: 'Use case', value: '설계–제작–검증 반복', valueEn: 'Design-build-verify iteration' },
    ],
    desc: '책상 위에 올려두고 쓰는 개발 키트입니다. 화면의 CAD 모델과 실물을 나란히 놓고 수정과 출력, 조립, 검증을 짧게 반복할 수 있어, 프로토타입을 빠르게 굴려봐야 하는 연구실과 교육 과정에 적합합니다.',
    descEn: 'A development kit sized for a desk. With the CAD model on screen beside the physical build, you can run short cycles of edit, print, assemble, and verify — suited to labs and courses that need to iterate on prototypes quickly.',
    bestFor: ['연구실 프로토타이핑', '교육 과정 실습 장비', '아이디어 검증(PoC)', '사내 기술 스터디'],
    bestForEn: ['Lab prototyping', 'Course lab equipment', 'Idea validation (PoC)', 'Internal technical study groups'],
    includes: ['키트 본체 및 부품 일체', 'CAD 파일 및 조립 문서', '초기 세팅 원격 지원', '대여 기간 중 기술 문의 대응'],
    includesEn: ['Kit body and full parts set', 'CAD files and build documentation', 'Remote support for initial setup', 'Technical Q&A throughout the rental'],
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
      '지니에듀테크는 다음 세대의 교육과 산업을 바꾸는 이 전환을 교육·컨설팅·로봇 대여 세 갈래로 지원합니다.',
    ],
    bodyEn: [
      'Software AI produces an answer on a screen. Physical AI carries that answer out in the real world — it sees through a camera, decides, and drives motors to produce a result.',
      'JINIE EDUTECH supports this shift across three tracks: education, consulting, and robot rental.',
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
    key: 'next-step',
    image: '/images/poster-next-step.jpg',
    title: '이제, 다음 단계는 피지컬 AI입니다',
    titleEn: 'The next step is Physical AI',
    category: '회사 소개',
    categoryEn: 'Company overview',
    body: [
      '지니에듀테크는 교육을 넘어 실제 문제를 해결하는 피지컬 AI로 더 큰 가치를 만들어 갑니다 — AI 교육·인재양성, 스마트팜·로봇, 3D 프린팅·시제품 제작, 소프트웨어·플랫폼.',
      '사업 파트너, 잠재 고객, 투자자 — 어느 위치에서 오시든 함께할 방식이 있습니다.',
    ],
    bodyEn: [
      'JINIE EDUTECH works beyond education, building value with physical AI that solves real problems — AI education and talent development, smart farm and robotics, 3D printing and prototyping, software and platforms.',
      'Business partners, prospective customers, investors — wherever you are coming from, there is a way to work together.',
    ],
  },
  {
    key: 'system',
    image: '/images/poster-system.jpg',
    title: '피지컬 AI 시스템 구성도',
    titleEn: 'Physical AI system architecture',
    category: '시스템 · 진행 절차',
    categoryEn: 'System & process',
    body: [
      '센서로 세상을 인식하고, 컨트롤러가 데이터를 처리하고, AI가 판단하고, 액추에이터가 행동하고, 피드백으로 다시 똑똑해지는 구조입니다.',
      '아이디어 도출 → 기획 → 설계 → 프로토타입 제작 → 검증·테스트 → 사업화까지, 프로젝트가 실제로 어떤 순서로 진행되는지 한 장에 정리했습니다.',
    ],
    bodyEn: [
      'Sensors perceive the world, a controller processes the data, AI decides, actuators act, and feedback makes the next cycle better.',
      'Idea → planning → design → prototype → verification → commercialization: one sheet showing the order a project actually runs in.',
    ],
  },
];

export const rentalUseCases: RentalUseCase[] = [
  { title: '대학·연구', titleEn: 'Universities & research', desc: '실습 수업, 캡스톤 프로젝트, 연구용 대여 — 구매 없이 실물 로봇으로 학습합니다.', descEn: 'Lab courses, capstone projects, research rentals — learn with real robots without buying one.' },
  { title: '전시·박람회', titleEn: 'Exhibitions & trade shows', desc: '부스 체험 콘텐츠로 관람객의 발길을 잡고, 브랜드 메시지를 로봇 데모로 전달합니다.', descEn: 'Draw visitors in with hands-on booth content and deliver your brand message through a robot demo.' },
  { title: '기업 행사', titleEn: 'Corporate events', desc: '제품 런칭, 컨퍼런스, 사내 행사에서 피지컬 AI를 직접 보여주는 쇼케이스를 구성합니다.', descEn: 'Build a showcase that puts physical AI on display at product launches, conferences, and internal events.' },
  { title: '방송·콘텐츠', titleEn: 'Broadcast & content', desc: '촬영·유튜브·광고 등 미디어 제작을 위한 로봇 섭외와 현장 연출을 지원합니다.', descEn: 'We support robot booking and on-site direction for filming, YouTube, ads, and other media production.' },
];

export const rentalProcess = [
  { step: '01', title: '문의 접수', titleEn: 'Inquiry', desc: '행사 일정, 장소, 목적을 알려주시면 담당자가 24시간 내 연락드립니다.', descEn: 'Tell us your event date, location, and goal, and we\'ll get back to you within 24 hours.' },
  { step: '02', title: '시나리오 상담', titleEn: 'Scenario consultation', desc: '어떤 로봇이, 어떤 데모를, 얼마나 필요한지 함께 설계합니다.', descEn: 'We work with you to plan which robot, which demo, and how much you need.' },
  { step: '03', title: '견적·일정 확정', titleEn: 'Quote & schedule', desc: '대여 기간, 운반·설치 범위를 반영한 견적서를 전달드립니다.', descEn: 'We send a quote reflecting the rental period and the scope of transport and setup.' },
  { step: '04', title: '현장 설치·시연', titleEn: 'On-site setup & demo', desc: '전담 오퍼레이터가 동행해 설치부터 시연, 철수까지 함께합니다.', descEn: 'A dedicated operator accompanies you from setup through the demo and teardown.' },
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
