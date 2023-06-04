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

export interface IColumn {
  title: string;
  dataIndex: string | string[];
  key: string;
  align?: 'left' | 'right' | 'center' | undefined;
  children?: IColumn[];
  customRender?: () => string;
}

export const rawDataColumns: IColumn[] = [
  {
    title: '구분',
    dataIndex: '구분',
    key: '구분',
    children: [
      {
        title: '날짜',
        dataIndex: '날짜',
        key: '날짜',
        align: 'center'
      },
      {
        title: '센터',
        dataIndex: '건물',
        key: '건물',
        align: 'center'
      },
      {
        title: '층',
        dataIndex: '층',
        key: '층',
        align: 'center'
      },
      {
        title: '구역',
        dataIndex: '위치',
        key: '위치',
        align: 'center'
      },
      {
        title: '설명',
        dataIndex: '설명',
        key: '설명',
        align: 'center'
      },
      {
        title: 'WISDOM ID',
        dataIndex: 'wisdom_id',
        key: 'wisdom_id',
        align: 'center'
      },
      {
        title: '장비모델',
        dataIndex: 'dev_model',
        key: 'dev_model',
        align: 'center'
      }
    ]
  },
  {
    title: '수납관련 사항',
    dataIndex: '수납관련 사항',
    key: '수납관련 사항',
    children: [
      {
        title: '수납타입',
        dataIndex: '수납타입',
        key: '수납타입',
        align: 'center'
      },
      {
        title: '등록번호',
        dataIndex: '등록번호',
        key: '등록번호',
        align: 'center'
      },
      {
        title: '수납건수',
        dataIndex: '수납건수',
        key: '수납건수',
        align: 'center'
      },
      {
        title: '수납 불가건수',
        dataIndex: '수납불가',
        key: '수납불가',
        align: 'center'
      },
      {
        title: '수납 금액',
        dataIndex: '수납금액',
        key: '수납금액',
        align: 'center'
      }
    ]
  },
  {
    title: '기타사항',
    dataIndex: '기타사항',
    key: '기타사항',
    children: [
      {
        title: '처방전 발행건수',
        dataIndex: '처방전 발급 건수',
        key: '처방전 발급 건수',
        align: 'center'
      },
      {
        title: '약국전송',
        dataIndex: '약국전송',
        key: '약국전송',
        align: 'center',
        customRender: () => '약국전송'
      },
      {
        title: '번호표발행',
        dataIndex: '번호표발행',
        key: '번호표발행',
        align: 'center',
        customRender: () => '번호표발행'
      }
    ]
  }
];

export const statisticsColumns: IColumn[] = [
  {
    title: '구분',
    dataIndex: '구분',
    key: '구분',
    children: [
      {
        title: '날짜',
        dataIndex: '날짜',
        key: '날짜',
        align: 'center'
      },
      {
        title: '센터',
        dataIndex: '건물',
        key: '건물',
        align: 'center'
      },
      {
        title: '층',
        dataIndex: '층',
        key: '층',
        align: 'center'
      },
      {
        title: '구역',
        dataIndex: '위치',
        key: '위치',
        align: 'center'
      },
      {
        title: '대수',
        dataIndex: '대수',
        key: '대수',
        align: 'center'
      }
    ]
  },
  {
    title: '수납관련 사항',
    dataIndex: '수납관련 사항',
    key: '수납관련 사항',
    children: [
      {
        title: '외래 수납',
        dataIndex: '외래 수납',
        key: '외래 수납',
        children: [
          {
            title: '수납건수',
            dataIndex: '외래수납-수납건수',
            key: '외래수납-수납건수',
            align: 'center'
          },
          {
            title: '수납 불가건수',
            dataIndex: '외래수납-수납불가',
            key: '외래수납-수납불가',
            align: 'center'
          },
          {
            title: '수납 금액',
            dataIndex: '외래수납-수납금액',
            key: '외래수납-수납금액',
            align: 'center'
          }
        ]
      },
      {
        title: '입퇴원비 수납',
        dataIndex: '입퇴원비 수납',
        key: '입퇴원비 수납',
        children: [
          {
            title: '중간수납',
            dataIndex: '중간수납',
            key: '중간수납',
            children: [
              {
                title: '수납건수',
                dataIndex: '중간수납-수납건수',
                key: '중간수납-수납건수',
                align: 'center'
              },
              {
                title: '수납 불가건수',
                dataIndex: '중간수납-수납불가',
                key: '중간수납-수납불가',
                align: 'center'
              },
              {
                title: '수납 금액',
                dataIndex: '중간수납-수납금액',
                key: '중간수납-수납금액',
                align: 'center'
              }
            ]
          },
          {
            title: '퇴원수납',
            dataIndex: '퇴원수납',
            key: '퇴원수납',
            children: [
              {
                title: '수납건수',
                dataIndex: '퇴원수납-수납건수',
                key: '퇴원수납-수납건수',
                align: 'center'
              },
              {
                title: '수납 불가건수',
                dataIndex: '퇴원수납-수납불가',
                key: '퇴원수납-수납불가',
                align: 'center'
              },
              {
                title: '수납 금액',
                dataIndex: '퇴원수납-수납금액',
                key: '퇴원수납-수납금액',
                align: 'center'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '기타사항',
    dataIndex: '기타사항',
    key: '기타사항',
    children: [
      {
        title: '처방전 발행건수',
        dataIndex: '처방전 발급 건수',
        key: '처방전 발급 건수',
        align: 'center'
      },
      {
        title: '약국전송',
        dataIndex: '약국전송',
        key: '약국전송',
        align: 'center',
        customRender: () => '약국전송'
      },
      {
        title: '번호표발행',
        dataIndex: '번호표발행',
        key: '번호표발행',
        align: 'center',
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

  대수: i + 1,

  Model: 'i80s',
  등록번호: '990273879',
  발급시간: '10:48',
  '증명서 종류': '진료비세부내역서',
  발급건수: 1
}));
