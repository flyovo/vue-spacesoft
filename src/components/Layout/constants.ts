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
import type { Key } from 'ant-design-vue/lib/_util/type';
import type { Auth } from '@/store/modules/user/type';
import type { NavType } from './types';

export const authType: { [key in Auth]: string } = {
  A: '병원 총괄 관리자',
  P: '기관 / 부서 관리자',
  S: 'Super Admin'
};

export const labelByNavType: { [key in NavType as string]: string } = {
  sunap: '수납기',
  cert: '제증명',
  arrive: '도착확인',
  phy: '신체계측'
};

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
    label: labelByNavType['sunap'],
    children: []
  },
  {
    key: 'cert',
    icon: FileFilled,
    label: labelByNavType['cert'],
    children: []
  },
  {
    key: 'arrive',
    icon: CheckSquareOutlined,
    label: labelByNavType['arrive'],
    children: []
  },
  {
    key: 'phy',
    icon: UserSwitchOutlined,
    label: labelByNavType['phy'],
    children: []
  }
];
