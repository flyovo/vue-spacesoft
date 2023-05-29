import store from '@/store';
import { login, logout } from '@/api/user-api';
import { getDevice, updateDevice } from '@/api/device-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { DeviceStoreState } from './type';
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
  public getDevice(payload: { type: string; date: Date }) {
    const data = cloneDeep(DEVICE_MOCK[payload.type]);
    // const data = getDeviceData(payload.type);

    // this.SET_CHANGE_VALUE({
    //   key: `device_${payload.type}`,
    //   value: data
    // });

    return new Promise((resolve, reject) => {
      resolve(data); // Resolve the promise with the received data
    });
  }
}

export const DeviceStoreModule = getModule(DeviceStore);
