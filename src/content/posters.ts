// Campaign posters shown in the expandable carousel on the rental page.

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
      '지니에듀테크(주)는 다음 세대의 교육과 산업을 바꾸는 이 전환을 판매·대여, 교육, 컨설팅으로 지원합니다.',
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
    category: '해봇',
    categoryEn: 'Haebot',
    body: [
      '센서로 세상을 인식하고, AI가 판단하고 계획하고, 액추에이터가 직접 행동하고, 피드백으로 더 똑똑해집니다. 해봇은 이 순환을 한 대의 로봇에 담았습니다.',
      '양팔 매니퓰레이터와 메카넘 휠 베이스로 교육, 산업, 파트너십 현장을 모두 다룹니다.',
    ],
    bodyEn: [
      'Sensors perceive the world, AI decides and plans, actuators act, and feedback makes it smarter. Haebot puts that whole loop into one robot.',
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
      '아이디어가 현실이 되는 곳, 지니에듀테크(주). 교육, 연구, 제작, 스마트팜, 산업 솔루션 — 다섯 영역에서 AI와 로봇으로 현장의 문제를 함께 해결합니다.',
      '사람과 기술이 만드는 더 나은 미래를 위해, 해봇과 함께 배우고, 만들고, 실전을 경험합니다.',
    ],
    bodyEn: [
      'JINIE EDUTECH, where ideas become real. Education, research, fabrication, smart farming, industrial solutions — five areas where we solve real problems with AI and robots.',
      'Learning, building, and getting real-world experience with Haebot, toward a better future made by people and technology.',
    ],
  },
];
