export type TableDataType = {
  key: number;
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
};

export const rawDataColumns = [
  {
    title: '구분',
    children: [
      {
        title: '날짜',
        dataIndex: '날짜',
        key: '날짜'
      },
      {
        title: '센터',
        dataIndex: '건물',
        key: '건물'
      },
      {
        title: '층',
        dataIndex: '층',
        key: '층'
      },
      {
        title: '구역',
        dataIndex: '위치',
        key: '위치'
      },
      {
        title: '설명',
        dataIndex: '설명',
        key: '설명'
      },
      {
        title: 'WISDOM ID',
        dataIndex: 'wisdom_id',
        key: 'wisdom_id'
      },
      {
        title: '장비모델',
        dataIndex: 'dev_model',
        key: 'dev_model'
      }
    ]
  },
  {
    title: '수납관련 사항',
    children: [
      {
        title: '수납타입',
        dataIndex: '수납타입',
        key: '수납타입'
      },
      {
        title: '등록번호',
        dataIndex: '등록번호',
        key: '등록번호'
      },
      {
        title: '수납건수',
        dataIndex: '수납건수',
        key: '수납건수'
      },
      {
        title: '수납 불가건수',
        dataIndex: '수납불가',
        key: '수납불가'
      },
      {
        title: '수납 금액',
        dataIndex: '수납금액',
        key: '수납금액'
      }
    ]
  },
  {
    title: '기타사항',
    children: [
      {
        title: '처방전 발행건수',
        dataIndex: '처방전 발급 건수',
        key: '처방전 발급 건수'
      },
      {
        title: '약국전송',
        dataIndex: '약국전송',
        key: '약국전송',
        customRender: () => '약국전송'
      },
      {
        title: '번호표발행',
        dataIndex: '번호표발행',
        key: '번호표발행',
        customRender: () => '번호표발행'
      }
    ]
  }
];

// export const data = [...Array(100)].map((_, i) => ({
export const rawDataSourceData = [...Array(100)].map((_, i) => ({
  key: i,
  수납타입: '외래',
  날짜: '2023-03-14',
  요일: '화',
  건물: 'B동',
  층: '1층',
  위치: '외래복합기',
  부서: '원무과',
  세부위치: 'B 왼2',
  wisdom_id: 'test20',
  dev_model: 'i80s',
  chart_no: '190503776',
  수납시간: '06:51',
  수납건수: 0,
  수납불가: 1,
  수납금액: 0,
  '처방전 발급 건수': 0,

  설명: i + 1,

  Model: 'i80s',
  등록번호: '990273879',
  발급시간: '10:48',
  '증명서 종류': '진료비세부내역서',
  발급건수: 1
}));

export const statisticsColumns = [
  {
    title: '구분',
    children: [
      {
        title: '날짜',
        dataIndex: '날짜',
        key: '날짜'
      },
      {
        title: '센터',
        dataIndex: '건물',
        key: '건물'
      },
      {
        title: '층',
        dataIndex: '층',
        key: '층'
      },
      {
        title: '구역',
        dataIndex: '위치',
        key: '위치'
      },
      {
        title: '대수',
        dataIndex: '대수',
        key: '대수'
      }
    ]
  },
  {
    title: '수납관련 사항',
    children: [
      {
        title: '외래수납',
        children: [
          {
            title: '수납건수',
            dataIndex: '외래수납-수납건수',
            key: '외래수납-수납건수'
          },
          {
            title: '수납 불가건수',
            dataIndex: '외래수납-수납불가',
            key: '외래수납-수납불가'
          },
          {
            title: '수납 금액',
            dataIndex: '외래수납-수납금액',
            key: '외래수납-수납금액'
          }
        ]
      },
      {
        title: '입퇴원비 수납',
        children: [
          {
            title: '중간수납',
            children: [
              {
                title: '수납건수',
                dataIndex: '중간수납-수납건수',
                key: '중간수납-수납건수'
              },
              {
                title: '수납 불가건수',
                dataIndex: '중간수납-수납불가',
                key: '중간수납-수납불가'
              },
              {
                title: '수납 금액',
                dataIndex: '중간수납-수납금액',
                key: '중간수납-수납금액'
              }
            ]
          },
          {
            title: '퇴원수납',
            children: [
              {
                title: '수납건수',
                dataIndex: '퇴원수납-수납건수',
                key: '퇴원수납-수납건수'
              },
              {
                title: '수납 불가건수',
                dataIndex: '퇴원수납-수납불가',
                key: '퇴원수납-수납불가'
              },
              {
                title: '수납 금액',
                dataIndex: '퇴원수납-수납금액',
                key: '퇴원수납-수납금액'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '기타사항',
    children: [
      {
        title: '처방전 발행건수',
        dataIndex: '처방전 발급 건수',
        key: '처방전 발급 건수'
      },
      {
        title: '약국전송',
        dataIndex: '약국전송',
        key: '약국전송',
        customRender: () => '약국전송'
      },
      {
        title: '번호표발행',
        dataIndex: '번호표발행',
        key: '번호표발행',
        customRender: () => '번호표발행'
      }
    ]
  }
];

export const statisticsSourceData = [...Array(100)].map((_, i) => ({
  key: i,
  수납타입: '외래',
  날짜: '2023-03-14',
  요일: '화',
  건물: 'B동',
  층: '1층',
  위치: '외래복합기',
  부서: '원무과',
  세부위치: 'B 왼2',
  wisdom_id: 'test20',
  dev_model: 'i80s',
  chart_no: '190503776',
  수납시간: '06:51',
  '외래수납-수납건수': 0,
  '외래수납-수납불가': 1,
  '외래수납-수납금액': 0,
  '중간수납-수납건수': 0,
  '중간수납-수납불가': 1,
  '중간수납-수납금액': 0,
  '퇴원수납-수납건수': 0,
  '퇴원수납-수납불가': 1,
  '퇴원수납-수납금액': 0,
  '처방전 발급 건수': 0,

  설명: i + 1,

  Model: 'i80s',
  등록번호: '990273879',
  발급시간: '10:48',
  '증명서 종류': '진료비세부내역서',
  발급건수: 1
}));
