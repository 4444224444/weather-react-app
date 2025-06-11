const SnowyMovieModals = [
  {
    id: 1,
    title: "snowy영화1",
    director: "봉준호",
    modalImage: "/images/parasite_modal.jpg",
    defaultComments: [
      { user: "현지", text: "사회 구조를 날카롭게 찌른 영화" },
      { user: "도연", text: "엔딩이 잊히지 않아" },
    ],
  },
  {
    id: 2,
    title: "snowy영화2",
    director: "미셸 공드리",
    modalImage: "/images/eternal_modal.jpg",
    defaultComments: [
      { user: "익명", text: "기억과 사랑에 대한 철학적 질문" },
      { user: "익명", text: "OST도 최고야" },
    ],
  },
  {
    id: 3,
    title: "snowy영화3",
    director: "데이미언 셔젤",
    modalImage: "/images/lalaland_modal.jpg",
    defaultComments: [
      { user: "익명", text: "음악과 색감이 예술" },
      { user: "익명", text: "현실과 이상의 경계선" },
    ],
  },
  {
    id: 4,
    title: "snowy영화4",
    director: "리 언크리치",
    modalImage: "/images/coco_modal.jpg",
    defaultComments: [
      { user: "익명", text: "죽은 자의 날을 아름답게 표현" },
      { user: "익명", text: "가족 이야기로 울컥" },
    ],
  },
];

const SnowyBookModals = [
  {
    id: 1,
    title: "연을 쫓는 아이",
    author: "할레드 호세이니",
    modalImage: "/images/kiterunner_modal.jpg",
    defaultComments: [
      { user: "익명", text: "가슴이 먹먹해지는 이야기" },
      { user: "익명", text: "용서와 우정에 대해 생각하게 해" },
    ],
  },
  {
    id: 2,
    title: "나미야 잡화점의 기적",
    author: "히가시노 게이고",
    modalImage: "/images/namiya_modal.jpg",
    defaultComments: [
      { user: "익명", text: "편지로 이어지는 따뜻한 이야기" },
      { user: "익명", text: "시간을 초월한 감동" },
    ],
  },
  {
    id: 3,
    title: "종의 기원",
    author: "정유정",
    modalImage: "/images/origin_modal.jpg",
    defaultComments: [
      { user: "익명", text: "섬뜩하지만 빠져드는 스토리" },
      { user: "익명", text: "주인공의 심리가 인상적" },
    ],
  },
  {
    id: 4,
    title: "달러구트 꿈 백화점",
    author: "이미예",
    modalImage: "/images/dallor_modal.jpg",
    defaultComments: [
      { user: "익명", text: "꿈과 현실 사이에서 위로받았어" },
      { user: "익명", text: "따뜻하고 몽환적인 느낌" },
    ],
  },
];

const SnowyMusicModals = [
  {
    id: 1,
    title: "Butterfly",
    artist: "BTS",
    modalImage: "/images/butterfly_modal.jpg",
    defaultComments: [
      { user: "익명", text: "잔잔한 멜로디가 날씨랑 잘 어울려" },
      { user: "익명", text: "청춘의 슬픔이 담긴 곡" },
    ],
  },
  {
    id: 2,
    title: "Good Day",
    artist: "IU",
    modalImage: "/images/goodday_modal.jpg",
    defaultComments: [
      { user: "익명", text: "맑은 날에 딱이야!" },
      { user: "익명", text: "아이유의 청량한 음색 최고" },
    ],
  },
  {
    id: 3,
    title: "Yellow",
    artist: "Coldplay",
    modalImage: "/images/yellow_modal.jpg",
    defaultComments: [
      { user: "익명", text: "햇살이 내리는 느낌이야" },
      { user: "익명", text: "기분이 좋아지는 노래" },
    ],
  },
  {
    id: 4,
    title: "Walking on Sunshine",
    artist: "Katrina and the Waves",
    modalImage: "/images/sunshine_modal.jpg",
    defaultComments: [
      { user: "익명", text: "진짜 걷고 싶은 날씨야" },
      { user: "익명", text: "신나고 경쾌해!" },
    ],
  },
];

const SnowyModalData = {
  movies: SnowyMovieModals,
  books: SnowyBookModals,
  music: SnowyMusicModals,
};

export default SnowyModalData;