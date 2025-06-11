const RainyMovieModals = [
  {
    id: 1,
    title: "기생ddddddddd충",
    director: "봉준호",
    modalImage: "/images/parasite_modal.jpg",
    defaultComments: [
      { user: "현지", text: "사회 구조를 날카롭게 찌른 영화" },
      { user: "도연", text: "엔딩이 잊히지 않아" },
    ],
  },
  {
    id: 2,
    title: "이터널 선샤인",
    director: "미셸 공드리",
    modalImage: "/images/eternal_modal.jpg",
    defaultComments: [
      { user: "익명", text: "기억과 사랑에 대한 철학적 질문" },
      { user: "익명", text: "OST도 최고야" },
    ],
  },
  {
    id: 3,
    title: "라라랜드",
    director: "데이미언 셔젤",
    modalImage: "/images/lalaland_modal.jpg",
    defaultComments: [
      { user: "익명", text: "음악과 색감이 예술" },
      { user: "익명", text: "현실과 이상의 경계선" },
    ],
  },
  {
    id: 4,
    title: "코코",
    director: "리 언크리치",
    modalImage: "/images/coco_modal.jpg",
    defaultComments: [
      { user: "익명", text: "죽은 자의 날을 아름답게 표현" },
      { user: "익명", text: "가족 이야기로 울컥" },
    ],
  },
];

// books, music 모달 데이터는 없을 경우 빈 배열로 유지
const RainyModalData = {
  movies: RainyMovieModals,
  books: [],   // 필요한 경우 추가
  music: []    // 필요한 경우 추가
};

export default RainyModalData;