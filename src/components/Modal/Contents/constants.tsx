import type { ColumnType } from 'antd/es/table';
import type { columnType, Setting } from './types';

export const ColumnByType = (type: columnType) => {
  let title = '기관명';

  switch (type) {
    case 'institutional':
      title = '기관명';
      break;
    case 'department':
      title = '부서명';
      break;
    case 'model':
      title = '모델명';
      break;
  }

  return Column.map((col, index) => {
    if (index === 1) col.title = title;
    return col;
  });
};

export const Column: ColumnType<Setting>[] = [
  {
    title: 'idx',
    key: 'idx',
    dataIndex: 'idx',
    align: 'center'
  },
  {
    title: '기관명',
    key: 'loc_name',
    dataIndex: 'loc_name',
    align: 'center'
  }
];
