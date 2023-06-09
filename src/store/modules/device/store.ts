import store from '@/store';
import { getDevice, updateDevice, deleteDevice } from '@/api/device-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { DevPosType, DeviceStoreState } from './type';
import { cloneDeep } from 'lodash';
import { DEVICE_MOCK } from './mock';
import { Device } from '@/views/HeaderContent/types';

@Module({ dynamic: true, store, name: 'deviceStore', namespaced: true })
class DeviceStore extends VuexModule implements DeviceStoreState {
  public get_dev_list: Device[] = []; // Initialize with an empty array

  @Mutation
  private SET_CHANGE_VALUE(payload: { key: string; value: any }) {
    const { key, value } = payload;
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as any)[key] = value;
    }
  }

  @Action({ rawError: true })
  public ChangeValue(payload: { key: string; value: any }) {
    this.SET_CHANGE_VALUE(payload);
  }

  @Action({ rawError: true })
  public getDevice(payload: { type: string; params: { date: Date } }) {
    return new Promise((resolve, reject) => {
      const data = cloneDeep(DEVICE_MOCK[payload.type]);

      // API 호출
      // const data = getDevice(payload);

      resolve(data); // Resolve the promise with the received data
    });
  }

  @Action({ rawError: true })
  public async UpdateSitePos({
    bAdd,
    type,
    value
  }: {
    bAdd: boolean;
    type: DevPosType;
    value: { idx: number | string | undefined; name: string };
  }) {
    return new Promise((resolve) => {
      const body = {
        bAdd,
        type,
        value
      };

      // API 호출
      // const { data, resultCd } = await updateDevice(body);

      // if (resultCd === 200) {
      resolve(200);
    });
    // }
  }

  @Action({ rawError: true })
  public async DeleteSitePos({
    check,
    value
  }: {
    check: boolean;
    value: { idx: number | string | undefined; name: string; type: DevPosType };
  }) {
    return new Promise((resolve) => {
      const body = {
        check,
        value
      };

      // API 호출
      // const { data, resultCd } = await deleteDevice(body);

      // 442 예외처리 필요

      // resolve(data.status); //442 전달하는지..?
      resolve(check ? 442 : 200); // 테스트용으로 수정 필요
    });
  }
}

export const DeviceStoreModule = getModule(DeviceStore);
