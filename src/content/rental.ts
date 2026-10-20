// Rental page: Haebot sales and rental options, use cases and the order process.

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
    name: '해봇 · 구매',
    nameEn: 'Haebot · Purchase',
    tagline: '상시 운용 · 연구 · 사업화',
    taglineEn: 'Full-time use, research, and product work',
    image: '/images/haebot-full.jpg',
    type: '듀얼암 모바일 매니퓰레이터',
    typeEn: 'Dual-arm mobile manipulator',
    specs: [
      { label: '조작', labelEn: 'Manipulation', value: '양팔 · 그리퍼', valueEn: 'Dual arms with grippers' },
      { label: '비전', labelEn: 'Vision', value: '헤드 스테레오 카메라', valueEn: 'Stereo camera in the head' },
      {
        label: '이동',
        labelEn: 'Locomotion',
        value: '메카넘 휠 · 전방향 주행',
        valueEn: 'Mecanum wheels · omnidirectional',
      },
      { label: '소프트웨어', labelEn: 'Software', value: 'AI 인지·판단 연동', valueEn: 'AI perception & decision' },
    ],
    desc: '해봇을 직접 소유해 상시 운용합니다. 연구실의 기반 장비로, 자체 서비스 개발의 테스트베드로, 현장 도입의 실증 장비로 쓰실 때 가장 경제적입니다. 용도에 맞춰 그리퍼·센서 등 구성을 협의해 제작합니다.',
    descEn:
      'Own a Haebot and run it full time. It is the most economical option as a lab’s base hardware, a testbed for your own service, or validation equipment for an on-site rollout. Grippers, sensors, and other parts are configured to your use.',
    bestFor: ['기업 도입 · 현장 실증', '연구실 기반 장비', '자체 서비스 · 제품 개발', '상설 전시 · 쇼룸'],
    bestForEn: [
      'Corporate adoption & on-site validation',
      'Base hardware for a lab',
      'Building your own service or product',
      'Permanent exhibits & showrooms',
    ],
    includes: ['설치 · 운용 교육', '사용 매뉴얼 · 기술 문서', '구매 후 유지보수 · 기술 지원', '기관 조달 · 납품 서류'],
    includesEn: [
      'Installation and operator training',
      'User manual and technical documentation',
      'Maintenance and technical support after purchase',
      'Procurement and delivery paperwork',
    ],
  },
  {
    key: 'term',
    name: '해봇 · 장기 대여',
    nameEn: 'Haebot · Long-term Rental',
    tagline: '학기 · 과제 기간 단위',
    taglineEn: 'By semester or project period',
    image: '/images/haebot-lab.jpg',
    type: '교육 · 연구용',
    typeEn: 'Education & research',
    specs: [
      { label: '기간', labelEn: 'Period', value: '학기 · 과제 기간 단위', valueEn: 'Semester or project period' },
      { label: '연계', labelEn: 'Paired with', value: '피지컬 AI 교육 과정', valueEn: 'Our physical AI course' },
      {
        label: '대상',
        labelEn: 'For',
        value: '대학 · 연구기관 · 기업 교육',
        valueEn: 'Universities, institutes, corporate training',
      },
      { label: '전환', labelEn: 'Upgrade path', value: '구매 전환 가능', valueEn: 'Convertible to purchase' },
    ],
    desc: '한 학기나 과제 기간 동안 해봇을 두고 씁니다. 교육 과정과 묶어 실습 장비로 쓰거나, 구매 전에 충분히 검증해 보는 용도에 맞습니다. 대여 기간이 끝난 뒤 구매로 전환하실 수도 있습니다.',
    descEn:
      'Keep a Haebot for a semester or a project period. It suits hands-on course equipment bundled with our training, or a thorough evaluation before buying. You can convert to a purchase when the rental ends.',
    bestFor: ['대학 실습 · 캡스톤 수업', '정부과제 · 연구 기간', '기업 사내 교육', '구매 전 검증'],
    bestForEn: [
      'University labs & capstone courses',
      'Government projects & research periods',
      'Corporate in-house training',
      'Evaluation before buying',
    ],
    includes: [
      '설치 · 운용 교육',
      '교육 과정 연계 실습 자료',
      '대여 기간 중 원격 기술 지원',
      '기간 종료 후 회수 또는 구매 전환',
    ],
    includesEn: [
      'Installation and operator training',
      'Practice material tied to the course',
      'Remote technical support during the rental',
      'Collection at the end, or conversion to purchase',
    ],
  },
  {
    key: 'event',
    name: '해봇 · 단기 대여',
    nameEn: 'Haebot · Short-term Rental',
    tagline: '전시 · 행사 · 촬영',
    taglineEn: 'Exhibitions, events, and shoots',
    image: '/images/haebot-mecanum.jpg',
    type: '행사 · 시연용',
    typeEn: 'Events & demos',
    specs: [
      { label: '기간', labelEn: 'Period', value: '1일 ~ 수 주', valueEn: 'One day to several weeks' },
      { label: '운영', labelEn: 'Operation', value: '전담 오퍼레이터 동행', valueEn: 'Dedicated operator on site' },
      {
        label: '공간',
        labelEn: 'Space',
        value: '좁은 부스에서도 전방향 주행',
        valueEn: 'Omnidirectional even in tight booths',
      },
      { label: '구성', labelEn: 'Setup', value: '행사별 데모 시나리오', valueEn: 'Demo scenario per event' },
    ],
    desc: '박람회 부스, 제품 런칭, 컨퍼런스, 촬영 현장에 해봇을 보내 드립니다. 메카넘 휠 덕분에 방향 전환 공간이 부족한 부스 안에서도 자유롭게 움직여, 관람객 앞에서 인지–판단–행동을 그대로 보여줍니다.',
    descEn:
      'We send Haebot to trade show booths, product launches, conferences, and film sets. Its mecanum wheels let it move freely even in a booth with no room to turn, showing sense-decide-act right in front of visitors.',
    bestFor: ['전시 · 박람회 체험 부스', '제품 런칭 · 컨퍼런스', '기업 쇼케이스', '방송 · 영상 촬영'],
    bestForEn: [
      'Exhibition & trade show booths',
      'Product launches & conferences',
      'Corporate showcases',
      'Broadcast & video shoots',
    ],
    includes: [
      '전담 오퍼레이터 현장 지원',
      '데모 시나리오 기획 · 리허설',
      '운반 · 설치 · 철수 · 안전관리',
      '촬영 · 관람객 인터랙션 가이드',
    ],
    includesEn: [
      'A dedicated operator on site',
      'Demo scenario planning and rehearsal',
      'Transport, setup, teardown & safety',
      'Filming and visitor-interaction guide',
    ],
  },
];

export const rentalUseCases: RentalUseCase[] = [
  {
    title: '기업 도입',
    titleEn: 'Corporate adoption',
    desc: '현장 실증부터 상시 운용까지 — 먼저 대여로 검증하고 구매로 이어가는 방식이 가장 흔합니다.',
    descEn: 'From on-site validation to full-time operation — most customers rent to validate, then buy.',
  },
  {
    title: '대학·연구',
    titleEn: 'Universities & research',
    desc: '실습 수업, 캡스톤 프로젝트, 연구 장비 — 학과 예산에 맞춰 구매와 학기 단위 대여 중 선택합니다.',
    descEn:
      'Lab courses, capstone projects, research equipment — buy it or rent by the semester, whichever fits the budget.',
  },
  {
    title: '전시·행사',
    titleEn: 'Exhibitions & events',
    desc: '박람회 부스, 제품 런칭, 컨퍼런스 — 단기 대여로 관람객의 발길을 잡는 체험 콘텐츠를 만듭니다.',
    descEn: 'Trade show booths, product launches, conferences — short-term rentals that draw visitors in.',
  },
  {
    title: '방송·콘텐츠',
    titleEn: 'Broadcast & content',
    desc: '촬영·유튜브·광고 등 미디어 제작을 위한 로봇 섭외와 현장 연출을 지원합니다.',
    descEn: 'We support robot booking and on-site direction for filming, YouTube, ads, and other media production.',
  },
];

export const rentalProcess = [
  {
    step: '01',
    title: '문의 접수',
    titleEn: 'Inquiry',
    desc: '구매인지 대여인지, 용도와 기간을 알려주시면 담당자가 24시간 내 연락드립니다.',
    descEn: 'Tell us whether you are buying or renting, plus the use and duration — we reply within 24 hours.',
  },
  {
    step: '02',
    title: '구성 상담',
    titleEn: 'Configuration',
    desc: '어떤 구성이 필요한지, 추가 모듈이나 커스터마이징이 필요한지 함께 정합니다.',
    descEn: 'We settle which configuration you need, and whether extra modules or customization are involved.',
  },
  {
    step: '03',
    title: '견적·계약',
    titleEn: 'Quote & contract',
    desc: '구매가 또는 대여료, 운반·설치 범위를 반영한 견적서를 전달드립니다. 기관 조달 서류도 지원합니다.',
    descEn:
      'We send a quote covering purchase price or rental fee plus transport and setup, and support procurement paperwork.',
  },
  {
    step: '04',
    title: '납품·설치·교육',
    titleEn: 'Delivery, setup & training',
    desc: '현장에 설치하고 운용 교육까지 진행합니다. 대여는 철수까지, 구매는 이후 유지보수까지 이어집니다.',
    descEn:
      'We install on site and train your operators. Rentals run through teardown; purchases continue into maintenance.',
  },
];
