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

type MenuItem = Required<MenuProps>['items'][number];

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
    key: 'sub2',
    icon: MedicineBoxOutlined,
    label: `수납기`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = j + 1;
      return {
        key: `sub2-${subKey}`,
        label: `sub2-${subKey}`
      };
    })
  },
  {
    key: 'sub3',
    icon: PrinterFilled,
    label: `순번기`,
    children: []
  },
  {
    key: 'sub4',
    icon: FileFilled,
    label: `제증명`,
    children: []
  },
  {
    key: 'sub5',
    icon: CheckSquareOutlined,
    label: `도착확인`,
    children: []
  },
  {
    key: 'sub6',
    icon: UserSwitchOutlined,
    label: `신체계측`,
    children: []
  },
  {
    key: 'sub7',
    icon: SettingFilled,
    label: `기기관리`,
    children: []
  },
  {
    key: 'sub8',
    icon: TeamOutlined,
    label: `회원관리`,
    children: []
  }
];
