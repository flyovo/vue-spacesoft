import store from '@/store';
import { getRawData } from '@/api/rawdata-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { RawDataStoreState } from './type';
import { cloneDeep } from 'lodash';
import { RAWDATA_MOCK } from './mock';

@Module({ dynamic: true, store, name: 'rawdataStore', namespaced: true })
class RawDataStore extends VuexModule implements RawDataStoreState {
  public raw_data_sunap = [];

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
  public getRawDataList(payload: { type: string; params: any }) {
    return new Promise((resolve, reject) => {
      // const data = getRawData(payload);
      const data = cloneDeep(RAWDATA_MOCK[payload.type]);
      console.log(payload);

      resolve(data); // Resolve the promise with the received data
    });
  }
}

export const RawDataStoreModule = getModule(RawDataStore);
