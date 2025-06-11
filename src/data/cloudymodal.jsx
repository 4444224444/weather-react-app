const CloudyMovieModals = [
  {
    id: 1,
    title: "장화홍련",
    director: "김종선",
    modalImage: "/images/parasite_modal.jpg",
    defaultComments: [
      { user: "세희", text: "이얏호" },
    ], 
  },
  {
    id: 2,
    title: "여고괴담",
    director: "임지오",
    modalImage: "/images/eternal_modal.jpg",
    defaultComments: [
      { user: "냥냥", text: "재밌었다!!" },
      { user: "멍멍", text: "정말 아름다운 이야기였어요" },
    ],
  },
  {
    id: 3,
    title: "콜",
    director: "김야호",
    modalImage: "/images/lalaland_modal.jpg",
    defaultComments: [
      { user: "권혁민", text: "음악과 색감이 예술" },
      { user: "박민규", text: "현실과 이상의 경계선" },
    ],
  },
  {
    id: 4,
    title: "US",
    director: "권혁민",
    modalImage: "/images/coco_modal.jpg",
    defaultComments: [
      { user: "정연수", text: "죽은 자의 날을 아름답게 표현" },
      { user: "심민지", text: "가족 이야기로 울컥" },
    ],
  },
];

const CloudyBookModals = [
  {
    id: 1,
    title: "구의 증명",
    author: "최진영",
    modalImage: "/images/kiterunner_modal.jpg",
    defaultComments: [
      { user: "혁민", text: "정말정신이아프다" },
      { user: "민혁", text: "구랑 담이 행복하세윤" },
    ],
  },
  {
    id: 2,
    title: "깊은슬픔",
    author: "신경숙",
    modalImage: "/images/namiya_modal.jpg",
    defaultComments: [
      { user: "우땨땨", text: "너무술프다" },
      { user: "헤헷", text: "정말정말슬프네요" },
    ],
  },
  {
    id: 3,
    title: "종의 기원",
    author: "정유정",
    modalImage: "/images/origin_modal.jpg",
    defaultComments: [
      { user: "냐냐냐", text: "너무 무서워" },
      { user: "하하하", text: "분량이 너무 길어요" },
    ],
  },
  {
    id: 4,
    title: "뱀에게 피어싱",
    author: "가네하라 히토미",
    modalImage: "/images/dallor_modal.jpg",
    defaultComments: [
      { user: "하라", text: "뱀 혓바닥이라뇨" },
      { user: "미토", text: "정말 재밌다!!!" },
    ],
  },
];

const CloudyMusicModals = [
  {
    id: 1,
    title: "있지",
    artist: "자우림",
    modalImage: "/images/butterfly_modal.jpg",
    defaultComments: [
      { user: "김윤아", text: "음~~냐냐냐냐!!!" },
      { user: "이계원", text: "청춘이다" },
    ],
  },
  {
    id: 2,
    title: "양",
    artist: "정우",
    modalImage: "/images/goodday_modal.jpg",
    defaultComments: [
      { user: "듀듀", text: "너무 슬프다 ㅠㅠ!" },
      { user: "댜댜", text: "=정말 슬프다 ㅠㅠ" },
    ],
  },
  {
    id: 3,
    title: "Ride Or Die",
    artist: "XYLO",
    modalImage: "/images/yellow_modal.jpg",
    defaultComments: [
      { user: "냐냐", text: "흐린날에딱이다" },
      { user: "뇨뇨", text: "과제합시다" },
    ],
  },
  {
    id: 4,
    title: "언젠가 너와 나",
    artist: "윤지영",
    modalImage: "/images/sunshine_modal.jpg",
    defaultComments: [
      { user: "영지", text: "저리 가세요" },
      { user: "지지", text: "명곡이다" },
    ],
  },
];

const CloudyModalData = {
  movies: CloudyMovieModals,
  books: CloudyBookModals,
  music: CloudyMusicModals,
};

export default CloudyModalData;