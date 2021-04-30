const qnaList = [
  {
    q: '소비영역 1. 나는 저축보다 소비가 많은 편이다?',
    a: [
      { answer: '소비가 많다', score: 5 },
      { answer: '저축이 많다', score: 0 },
    ]
  },
  {
    q: '소비영역 2. 평소에 배달앱과 온라인쇼핑을 즐겨한다',
    a: [
      { answer: '그렇다', score: 5 },
      { answer: '아니다', score: 0 },
    ]
  },
  {
    q: '소비영역 3. 친구들과 만나면 술과 안주는 필수다',
    a: [
      { answer: '당연하다', score: 5 },
      { answer: '아니다', score: 0 },
    ]
  },
  {
    q: '소비영역 4. 생활비로 인한 대출이나 리볼빙이 있다',
    a: [
      { answer: '그렇다', score: 5 },
      { answer: '아니다', score: 0 },
    ]
  },
  {
    q: '소비영역 5. 나는 부모님의 연금이자 노후자금이다',
    a: [
      { answer: '부모님 노후준비가 부족하시다', score: 5 },
      { answer: '아니다. 충분하다', score: 0 },
    ]
  },
  {
    q: '저축영역 1. 연간 저축계획이나 목표액 없이 저축한다',
    a: [
      { answer: '계획없이 일단 저축한다', score: 5 },
      { answer: '아니다. 목표와 계획에 맞게 저축한다', score: 0 },
    ]
  },
  {
    q: '저축영역 2. 결혼이나 은퇴를 위한 미래자금이 준비되어 있다',
    a: [
      { answer: '각각의 포트폴리오가 있다.', score: 5 },
      { answer: '아직 준비하지 않았다', score: 0 },
    ]
  },
  {
    q: '저축영역 3. 실직이나 재해, 건강 악화로 인한 위험에 대비가 되어있다.',
    a: [
      { answer: '차질없이 위험 대비가 되어있다.', score: 5 },
      { answer: '아직 마땅히 준비하고 있지 않다', score: 0 },
    ]
  },
  {
    q: '저축영역 4. 궁극적인 재무목표는 내집마련이다',
    a: [
      { answer: '그렇다.', score: 5 },
      { answer: '다른 궁극적인 목표가 있다.', score: 0 },
    ]
  },
  {
    q: '투자영역 1. 분산투자를 활용한 투자포트폴리오를 가지고 있다.',
    a: [
      { answer: '그러하다.', score: 5 },
      { answer: '아직 포트폴리오가 없다', score: 0 },
    ]
  },
  {
    q: '투자영역 2. 주식과 채권, 펀드의 차이점을 정확히 설명할 수 있다',
    a: [
      { answer: '각각의 장단점도 숙지하고 있다.', score: 5 },
      { answer: '사실 차이점을 잘 모르겠다', score: 0 },
    ]
  },
  {
    q: '투자영억 3. 월급의 20% 이상을 투자를 위해 저축한다.',
    a: [
      { answer: '그러하다.', score: 5 },
      { answer: '아니다', score: 0 },
    ]
  },
  {
    q: '투자영역 4. 한번 매수한 주식을 일주일 이상 가지고 있지 않는다.',
    a: [
      { answer: '그렇다. 바로 매도 타이밍을 잡는다', score: 5 },
      { answer: '아니다. 사고 진득하게 가지고 있는다', score: 0 },
    ]
  },
]

const infoList = [
  {
    from: 10,
    to: 20,
    mLeft: '10%',
    name: '토끼',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 21,
    to: 30,
    mLeft: '25%',
    name: '고양이',
    desc: '사람들은 당신이 꼼꼼하고 철저하다고 생각합니다. 심지어 종종 신경질적이라고 생각할 때도 있죠. 하지만 노력이 결실을 맺을 때 당신은 칭찬을 기쁘게 받아들입니다. (이것은 자기 자신을 받아들인다는 긍정적인 의미입니다.) 만약 당신이 충동적으로 행동한다면 사람들은 정말 놀랄 겁니다. 신중하게 행동하는 것은 대개 지혜를 드러내게 마련입니다. 당신은 친구들이 당신에게 조언을 구할 만큼 믿음직한 사람입니다.'
  },
  {
    from: 31,
    to: 40,
    mLeft: '40%',
    name: '표범',
    desc: '사람들은 당신이 분별 있고 현실적이며 겸손하다고 생각합니다. 당신은 당신에게 향하는 신뢰와 충성에 보답하는 사람으로 정평이 나 있습니다. 당신을 잘 아는 사람이라면 당신이 친구들에게 갖는 믿음을 깨거나 친구 사이를 이간질하기 어렵다는 걸 알 겁니다. 하지만 그 신뢰가 깨진다면, 당신은 꽤 큰 영향을 받습니다.'
  },
  {
    from: 41,
    to: 50,
    mLeft: '55%',
    name: '알파카',
    desc: '사람들은 당신이 생기 넘치고 매력적인 한편 현실적이기도 하다고 생각합니다. 당신이 인기 있는 데다가 침착함과 꾸밈없는 솔직함까지 지녔다고 생각하죠. 또한 당신이 언제나 친구들을 위하는 이해심 많고 사려깊은 사람이라고 생각합니다.'
  },
  {
    from: 51,
    to: 60,
    mLeft: '70%',
    name: '유니콘',
    desc: '사람들은 당신이 흥분을 잘 하고 다소 충동적이라고 생각합니다. 하지만 당신은 타고난 리더입니다! 의사 결정도 빠르게 내리죠. 사람들은 당신을 대범하고 모험심이 강한 사람으로 생각합니다. 또한 당신의 열정을 인정하고 높이 사기 때문에 당신의 동료, 친구로서 지내기를 좋아합니다.'
  },
  {
    from: 61,
    to: 70,
    mLeft: '85%',
    name: '사자',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  }
]