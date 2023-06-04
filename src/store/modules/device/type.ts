import { Device } from '@/views/HeaderContent/types';

export interface DeviceStoreState {
  get_dev_list: Device[];
}

export interface DevPosList {
  idx: number;
  type: DevPosType;
  loc_name: string;
  updatedate: string | Date;
}

export type DevPosType =
  | 'pos_1'
  | 'pos_2'
  | 'pos_4'
  | 'dev_model'
  | 'dev_type'
  | 'op_prog';
