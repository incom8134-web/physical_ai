// Education page: course modules, five learning stages, mentoring and the 10-week schedule.

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
    topicsEn: [
      'Defining physical AI',
      'How it differs from software AI',
      'Key application areas',
      'Project case studies',
    ],
    activity: '현장 문제를 탐색하고 피지컬 AI 적용 기회를 찾아 본인 프로젝트 주제를 정합니다.',
    activityEn:
      'Explore real-world problems, find opportunities to apply physical AI, and settle on your own project topic.',
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
    topicsEn: [
      'Sensors',
      'Actuators & motors',
      'Controllers',
      'I/O structure',
      'System architecture',
      'Component selection criteria',
    ],
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
    topicsEn: [
      'Basic control concepts',
      'Microcontrollers',
      'Embedded systems',
      'HW–SW communication',
      'Actuator control',
    ],
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
    topicsEn: [
      'Computer vision',
      'AI perception',
      'Decision logic',
      'VLA concepts',
      'Connecting AI models to physical systems',
    ],
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
    topicsEn: [
      'Requirements definition',
      'System architecture',
      'HW–SW planning',
      'MVP concept',
      'Cost estimation',
      'Scheduling',
      'Risk factors',
    ],
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
    topicsEn: [
      'System integration',
      'Testing',
      'Troubleshooting',
      'Performance verification',
      'Demo prep',
      'Presentation',
      'Basic commercialization planning',
    ],
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
    activityEn:
      'Instead of surveying the technology broadly, you learn only what you need to move your project forward.',
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
    topicsEn: [
      'Basic operation implementation',
      'AI feature integration',
      'System integration',
      'Performance verification',
    ],
    activity: '3차 멘토링에서 기술적 병목을 함께 풀고, 4차에서 동작 안정성을 확인합니다.',
    activityEn:
      'Work through technical bottlenecks together in the third mentoring round, and confirm operational stability in the fourth.',
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
  {
    round: '1차',
    roundEn: 'Round 1',
    week: 3,
    check: '문제 · 대상 사용자 · 해결안 · 적합성 · 실현성 · 범위',
    checkEn: 'Problem · target users · solution · fit · feasibility · scope',
    out: '프로젝트 타당성 검토서',
    outEn: 'Project feasibility review',
  },
  {
    round: '2차',
    roundEn: 'Round 2',
    week: 5,
    check: '시스템 구성 · 부품 · HW · SW · AI · 일정 · 원가',
    checkEn: 'System configuration · parts · HW · SW · AI · schedule · cost',
    out: '프로젝트 설계서 (확정)',
    outEn: 'Project design document (final)',
  },
  {
    round: '3차',
    roundEn: 'Round 3',
    week: 7,
    check: '제작 진척 · 기술적 병목 · 통합 · 개선 사항',
    checkEn: 'Build progress · technical bottlenecks · integration · improvements',
    out: '개발 진척 보고서',
    outEn: 'Development progress report',
  },
  {
    round: '4차',
    roundEn: 'Round 4',
    week: 9,
    check: '동작 안정성 · 성능 · 시연 · 적용 시나리오',
    checkEn: 'Operational stability · performance · demo · application scenarios',
    out: '발표 준비 완료 프로젝트',
    outEn: 'Presentation-ready project',
  },
];

export const weekPlan = [
  {
    weeks: [1, 2],
    label: '모집 · 선발',
    labelEn: 'Recruiting & selection',
    out: '선발 결과 보고서',
    outEn: 'Selection results report',
  },
  {
    weeks: [3],
    label: 'M1–M2 교육 (18H)',
    labelEn: 'M1–M2 training (18H)',
    out: '문제 정의서 · 시스템 구성도',
    outEn: 'Problem statement · system diagram',
  },
  {
    weeks: [4, 5],
    label: 'M3–M6 교육 (42H)',
    labelEn: 'M3–M6 training (42H)',
    out: '역량 진단 · 프로젝트 설계서',
    outEn: 'Skills assessment · project design document',
  },
  {
    weeks: [6, 7, 8],
    label: '프로토타입 제작',
    labelEn: 'Prototype build',
    out: '개발 진척 보고서',
    outEn: 'Development progress report',
  },
  {
    weeks: [9],
    label: '최종 검증',
    labelEn: 'Final verification',
    out: '발표 준비 완료서',
    outEn: 'Presentation readiness report',
  },
  {
    weeks: [10],
    label: '공개 발표회',
    labelEn: 'Public demo day',
    out: '발표 자료 · 사업화 계획',
    outEn: 'Presentation materials · commercialization plan',
  },
];
