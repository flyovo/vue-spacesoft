import store from '@/store';
import { login, logout } from '@/api/user-api';
import { getWisdomData } from '@/api/wisdom-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { WisdomStoreState } from './type';
import { cloneDeep } from 'lodash';
import { WISDOM_MOCK } from './mock';

@Module({ dynamic: true, store, name: 'wisdomStore', namespaced: true })
class WisdomStore extends VuexModule implements WisdomStoreState {
  public wisdom_navtree: any;

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
  public getWisdom(payload: { type: string; date: Date }) {
    const data = cloneDeep(WISDOM_MOCK[payload.type]);
    // const data = getWisdomData(payload.type);

    // this.SET_CHANGE_VALUE({
    //   key: `wisdom_${payload.type}`,
    //   value: data
    // });

    return new Promise((resolve, reject) => {
      resolve(data); // Resolve the promise with the received data
    });
  }
}

export const WisdomStoreModule = getModule(WisdomStore);
