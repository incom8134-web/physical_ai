// CS / AS page — from the 2026.10.06 company deck (slide 7, with slides 9–11).
// The deck's notes say in-house repair, warranties and SLAs are not confirmed
// and the scope is agreed per customer, so nothing here promises them.

export const supportAreas = [
  {
    title: '운영 안내와 기술 지원',
    titleEn: 'Operating guidance & technical support',
    desc: '장비 구성과 기본 운영 방법을 안내하고, 운영 중에 생기는 기술적인 질문에 답합니다.',
    descEn: 'We walk you through the setup and day-to-day operation, and answer technical questions as they come up.',
  },
  {
    title: '사용 교육과 문제 대응',
    titleEn: 'User training & troubleshooting',
    desc: '현장 담당자가 직접 다룰 수 있도록 사용 교육을 진행하고, 문제가 생기면 원인을 함께 확인해 대응합니다.',
    descEn:
      'We train your staff to run the robot themselves, and when something goes wrong we work out the cause with you.',
  },
  {
    title: '유지관리 · 지원 연계',
    titleEn: 'Maintenance & support referrals',
    desc: '점검이나 유지관리가 필요할 때 알맞은 지원 경로로 연결해, 장비를 계속 쓸 수 있도록 돕습니다.',
    descEn:
      'When inspection or maintenance is needed, we connect you to the right support path so the equipment stays in use.',
  },
];

export const supportAudiences = [
  {
    title: '기업',
    titleEn: 'Companies',
    desc: '로봇을 도입했거나 Demo·PoC를 마치고 실제 운영으로 넘어가는 기업',
    descEn: 'Companies that have brought in a robot, or are moving from a Demo/PoC into real operation',
  },
  {
    title: '기관',
    titleEn: 'Institutions',
    desc: '대학·연구소처럼 여러 사람이 같은 장비를 함께 쓰는 기관',
    descEn: 'Universities, labs and other institutions where many people share the same equipment',
  },
  {
    title: '운영 조직',
    titleEn: 'Operating teams',
    desc: '교육장·전시장 등에서 로봇을 매일 운영하는 현장 팀',
    descEn: 'On-site teams running robots every day in classrooms, showrooms and exhibitions',
  },
];

export const supportProcess = [
  {
    step: '01',
    title: '문의 접수',
    titleEn: 'Tell us',
    desc: '사용 중인 장비, 운영 환경, 겪고 있는 문제를 알려주세요.',
    descEn: 'Tell us about your equipment, how it is used, and the problem you are facing.',
  },
  {
    step: '02',
    title: '상황 확인',
    titleEn: 'Review',
    desc: '현재 상태와 필요한 지원 내용을 함께 확인합니다.',
    descEn: 'Together we review the current state and the support you need.',
  },
  {
    step: '03',
    title: '지원 범위 협의',
    titleEn: 'Agree the scope',
    desc: '장비와 운영 조건에 맞춰 지원 범위와 방식을 정합니다.',
    descEn: 'We agree the scope and form of support to fit your equipment and operating conditions.',
  },
  {
    step: '04',
    title: '지원 진행',
    titleEn: 'Support',
    desc: '운영 안내·교육·문제 대응을 진행하고, 필요하면 유지관리 지원으로 연결합니다.',
    descEn: 'We provide guidance, training and troubleshooting, and connect you to maintenance support when needed.',
  },
];

// Slide 9: the six-step path from first contact to ongoing use. CS/AS is the last step.
export const supportJourney = [
  { title: '인식', titleEn: 'Awareness', desc: '피지컬 AI 세미나', descEn: 'Physical AI seminar' },
  { title: '체험', titleEn: 'Experience', desc: '로봇 직접 보고 경험하기', descEn: 'See and try the robots' },
  { title: '교육', titleEn: 'Education', desc: '학생·재직자 학습', descEn: 'Students and staff learn' },
  { title: '컨설팅', titleEn: 'Consulting', desc: '산업·업무 연결', descEn: 'Connect it to your work' },
  { title: 'Demo / PoC', titleEn: 'Demo / PoC', desc: '소규모 실증', descEn: 'Small-scale validation' },
  {
    title: '도입 · 지원',
    titleEn: 'Adoption & support',
    desc: '교육·운영 지원',
    descEn: 'Training and operating support',
  },
];
