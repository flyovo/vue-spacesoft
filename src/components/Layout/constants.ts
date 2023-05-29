import {
  HomeOutlined,
  MedicineBoxOutlined,
  PrinterFilled,
  FileFilled,
  CheckSquareOutlined,
  UserSwitchOutlined,
  SettingFilled,
  TeamOutlined
} from '@ant-design/icons-vue';
import type { MenuProps } from 'antd';
import { Key } from 'ant-design-vue/lib/_util/type';

export const HEADER_HEIGHT = 80;
export const NAV_WIDTH = 248;

export type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  key: Key,
  label: string,
  icon?: Node,
  children?: MenuItem[],
  type?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

export const headerMenu: MenuProps['items'] = [
  getItem('device-management', `기기관리`),
  { key: 2, type: 'divider' },
  getItem('auto-shutdown-settings', `자동 종료 설정`),
  { key: 4, type: 'divider' },
  getItem('managing-accounts', `사용자 계정 관리`)
];

export const navMenu: MenuProps['items'] = [
  {
    key: 'home',
    icon: HomeOutlined,
    label: `HOME`
  },
  {
    key: 'sunap',
    icon: MedicineBoxOutlined,
    label: `수납기`,
    children: [
      // {
      //   key: 'raw-data',
      //   label: 'Raw 데이터',
      //   children: [
      //     {
      //       key: '1',
      //       label: '본관',
      //       children: [{ key: 'raw-data', label: '내분비내과' }]
      //     },
      //     {
      //       key: '2',
      //       label: '신관'
      //     }
      //   ]
      // }
    ]
  },
  // {
  //   key: 'sub3',
  //   icon: PrinterFilled,
  //   label: `순번기`,
  //   children: []
  // },
  {
    key: 'cert',
    icon: FileFilled,
    label: `제증명`,
    children: [
      // {
      //   key: 'A동',
      //   label: 'A동',
      //   children: [
      //     {
      //       key: '1층',
      //       label: '1층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     }
      //   ]
      // },
      // {
      //   key: 'R동',
      //   label: 'R동',
      //   children: [
      //     {
      //       key: '2층',
      //       label: '2층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     }
      //   ]
      // },
      // {
      //   key: 'B동',
      //   label: 'B동',
      //   children: [
      //     {
      //       key: '1층',
      //       label: '1층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     },
      //     {
      //       key: '2층',
      //       label: '2층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     },
      //     {
      //       key: '3층',
      //       label: '3층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     },
      //     {
      //       key: '4층',
      //       label: '4층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     },
      //     {
      //       key: '5층',
      //       label: '5층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     },
      //     {
      //       key: '6층',
      //       label: '6층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     }
      //   ]
      // },
      // {
      //   key: 'C동',
      //   label: 'C동',
      //   children: [
      //     {
      //       key: '1층',
      //       label: '1층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     }
      //   ]
      // }
    ]
  },
  {
    key: 'arrive',
    icon: CheckSquareOutlined,
    label: `도착확인`,
    children: []
  },
  {
    key: 'phy',
    icon: UserSwitchOutlined,
    label: `신체계측`,
    children: [
      // {
      //   key: 'C동',
      //   label: 'C동',
      //   children: [
      //     {
      //       key: '5층',
      //       label: '5층',
      //       children: [{ key: '원무과', label: '원무과' }]
      //     }
      //   ]
      // }
    ]
  }
  // {
  //   key: 'sub7',
  //   icon: SettingFilled,
  //   label: `기기관리`,
  //   children: []
  // },
  // {
  //   key: 'sub8',
  //   icon: TeamOutlined,
  //   label: `회원관리`,
  //   children: []
  // }
];
