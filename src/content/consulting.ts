// Consulting page: audiences, process and topics.

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
    descEn:
      'Guidance and hands-on connections for students considering a career in physical AI, and for teams preparing a capstone project or competition entry.',
    offers: [
      '분야 개요와 진로 로드맵 상담',
      '졸업작품·공모전 주제 발굴 코칭',
      '로봇 실습 연계 및 장비 자문',
      '포트폴리오·발표 자료 피드백',
    ],
    offersEn: [
      'Field overview and career roadmap consulting',
      'Coaching to find a capstone or competition topic',
      'Hands-on robot access and equipment advice',
      'Feedback on portfolios and presentation materials',
    ],
  },
  {
    key: 'startups',
    label: '초기 스타트업',
    labelEn: 'Early-stage startups',
    eyebrow: 'For Young Startups',
    headline: '아이디어를\n검증 가능한 제품으로',
    headlineEn: 'Turning an idea into\na testable product',
    desc: '피지컬 AI 아이템을 준비 중인 예비창업자와 초기 스타트업을 위해, 기술 타당성 검토부터 MVP·PoC 설계까지 실행 중심으로 돕습니다.',
    descEn:
      'Hands-on support for aspiring founders and early-stage startups building a physical AI product — from technical feasibility review to MVP/PoC design.',
    offers: [
      '기술·시장 타당성 진단',
      'MVP/PoC 범위 설계 및 로드맵',
      '정부지원사업·R&D 연계 자문',
      '투자 유치용 기술 자료 정리',
    ],
    offersEn: [
      'Technical & market feasibility assessment',
      'MVP/PoC scope design and roadmap',
      'Advice on government funding & R&D programs',
      'Preparing technical materials for fundraising',
    ],
  },
  {
    key: 'b2b',
    label: 'B2B · 기업',
    labelEn: 'B2B & Companies',
    eyebrow: 'For B2B & Companies',
    headline: '현장에 맞는\n도입 시나리오 설계',
    headlineEn: 'Designing an adoption\nscenario for your site',
    desc: '제조·물류·서비스 현장에 피지컬 AI를 도입하려는 기업을 위해, 업무 프로세스 분석부터 로봇 적용 시나리오, 조직 준비까지 함께 설계합니다.',
    descEn:
      'For companies adopting physical AI in manufacturing, logistics, or service settings — from process analysis to robot deployment scenarios and organizational readiness.',
    offers: [
      '업무 프로세스·적용 지점 진단',
      '업종별 활용 사례 및 도입 로드맵',
      'Demo·PoC 기획 및 현장 실증',
      '실무자 교육 및 조직 준비 컨설팅',
    ],
    offersEn: [
      'Diagnosing workflows and application points',
      'Industry use cases and an adoption roadmap',
      'Demo/PoC planning and on-site validation',
      'Staff training and organizational readiness consulting',
    ],
  },
  {
    key: 'investors',
    label: '투자자',
    labelEn: 'Investors',
    eyebrow: 'For Investors',
    headline: '기술을 이해하고\n판단할 수 있도록',
    headlineEn: 'Understand the technology\nwell enough to judge it',
    desc: '피지컬 AI 분야 투자를 검토하는 투자자와 심사역을 위해, 기술 브리핑과 기술 실사(Tech Due Diligence) 관점의 자료를 제공합니다.',
    descEn:
      'For investors and analysts evaluating physical AI opportunities — technology briefings and materials framed for technical due diligence.',
    offers: [
      '비전문가를 위한 기술 브리핑',
      '기술 실사(Tech DD) 체크리스트 자문',
      '포트폴리오사 로봇 데모 참관 주선',
      '시장·경쟁 기술 동향 리포트',
    ],
    offersEn: [
      'Technology briefings for non-specialists',
      'Advice on a technical due-diligence checklist',
      'Arranging robot demo visits for portfolio companies',
      'Market and competing-technology trend reports',
    ],
  },
];

export const consultingProcess = [
  {
    step: '01',
    title: '진단',
    titleEn: 'Diagnosis',
    desc: '현재 이해도, 목표, 제약 조건을 함께 확인합니다.',
    descEn: 'Together we assess your current understanding, goals, and constraints.',
  },
  {
    step: '02',
    title: '기회 분석',
    titleEn: 'Opportunity analysis',
    desc: '업종·상황에 맞는 피지컬 AI 활용 기회를 도출합니다.',
    descEn: 'We identify physical AI opportunities suited to your industry and situation.',
  },
  {
    step: '03',
    title: 'Demo·PoC',
    titleEn: 'Demo · PoC',
    desc: '실물 로봇으로 소규모 개념 검증을 설계·실행합니다.',
    descEn: 'We design and run a small-scale proof of concept with a real robot.',
  },
  {
    step: '04',
    title: '실행 로드맵',
    titleEn: 'Execution roadmap',
    desc: '도입·투자·창업 등 다음 단계를 위한 실행 계획을 제시합니다.',
    descEn: 'We lay out an execution plan for your next step — adoption, investment, or launching a company.',
  },
];

export const consultingTopics = [
  {
    title: '피지컬 AI 기술의 이해',
    titleEn: 'Understanding physical AI',
    desc: '인지-판단-제어(Sense-Decide-Act)와 VLA 구조 등 핵심 개념을 쉽게 설명합니다.',
    descEn: 'We explain core concepts like the Sense-Decide-Act loop and VLA architecture in plain terms.',
  },
  {
    title: '업종별 활용 사례',
    titleEn: 'Use cases by industry',
    desc: '제조·물류·서비스·교육 등 분야별 도입 사례와 적용 가능성을 분석합니다.',
    descEn:
      'We analyze adoption cases and applicability across manufacturing, logistics, service, education, and more.',
  },
  {
    title: 'Build vs Buy vs Rent',
    titleEn: 'Build vs. Buy vs. Rent',
    desc: '자체 개발, 솔루션 구매, 로봇 대여 중 상황에 맞는 접근을 판단합니다.',
    descEn: 'We help you decide between building in-house, buying a solution, or renting a robot.',
  },
  {
    title: 'Demo·PoC 설계',
    titleEn: 'Demo · PoC design',
    desc: '실물 로봇으로 소규모 개념 검증을 설계하고, 성공 기준을 함께 정의합니다.',
    descEn: 'We design a small-scale proof of concept with a real robot and define success criteria together.',
  },
  {
    title: '투자·사업화 판단 자료',
    titleEn: 'Materials for investment & business decisions',
    desc: '기술 실사, 사업 타당성 검토에 필요한 근거 자료를 정리해 드립니다.',
    descEn: 'We compile the supporting materials you need for technical due diligence and feasibility review.',
  },
  {
    title: '조직 준비 및 교육',
    titleEn: 'Organizational readiness & training',
    desc: '현업 인력이 피지컬 AI를 다룰 수 있도록 교육·운영 체계를 설계합니다.',
    descEn: 'We design training and operating structures so your staff can work with physical AI.',
  },
];
