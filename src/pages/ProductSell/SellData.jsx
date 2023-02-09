export const DESC_TXT = [
  { id: 0, text: '* 상품 이미지는 640x640에 최적화 되어 있습니다.' },
  {
    id: 1,
    text: '- 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여집니다.',
  },
  { id: 2, text: '- 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.' },
  { id: 3, text: '- 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다.' },
  { id: 4, text: '- 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.' },
  {
    id: 5,
    text: '- 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.',
  },
  {
    id: 6,
    text: '- 최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)',
  },
];

export const INPUT_DATA = [
  {
    id: 1,
    title: '제목',
    type: 'text',
    name: 'title',
    placeholder: '상품 제목을 입력해주세요',
  },
  { id: 2, title: '카테고리', type: 'select' },
  {
    id: 3,
    title: '거래지역',
    type: 'text',
    placeholder: '거래 지역을 입력해주세요',
    name: 'region',
  },
  {
    id: 4,
    title: '상태',
    type: 'radio',
    name: 'conditionId',
    value: '1',
  },
  {
    id: 5,
    title: '교환',
    type: 'radio',
    name: 'exchangeable',
    value: '1',
  },
  {
    id: 6,
    title: '가격',
    type: 'number',
    name: 'price',
    placeholder: '숫자만 입력해 주세요',
    width: '250px',
  },
  {
    id: 7,
    title: '상품설명',
    name: 'description',
    placeholder: '숫자만 입력해 주세요',
    width: '250px',
  },
];
