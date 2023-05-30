import store from '@/store';
import { login, logout } from '@/api/user-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import type { UserStoreState } from './type';
import { cloneDeep } from 'lodash';
import { USER_MOCK } from './mock';

@Module({ dynamic: true, store, name: 'userStore', namespaced: true })
class UserStore extends VuexModule implements UserStoreState {
  public userState = cloneDeep(USER_MOCK.user);

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
  public getUser(payload: { type: string; date: Date }) {
    const data = cloneDeep(USER_MOCK[payload.type]);
    // const data = getUserData(payload.type);

    // this.SET_CHANGE_VALUE({
    //   key: `user_${payload.type}`,
    //   value: data
    // });

    return new Promise((resolve, reject) => {
      resolve(data); // Resolve the promise with the received data
    });
  }

  @Action({ rawError: true })
  public async Login(userInfo: { user_id: string; user_pwd: string }) {
    let { user_id, user_pwd } = userInfo;
    user_id = user_id.trim();

    const data = cloneDeep(USER_MOCK.user);
    // const { data, resultCd } = await login({ user_id, user_pwd });

    this.SET_CHANGE_VALUE({
      key: 'userState',
      value: { pos_1: data.POS_1, pos_4: data.POS_4 }
    });

    sessionStorage.setItem(
      'spacesoft-userState',
      JSON.stringify({
        authority: data.AUTHORITY,
        user_name: data.USER_NM,
        pos_1: data.POS_1,
        pos_4: data.POS_4
      })
    );
    // if (resultCd === 200) {
    return new Promise((resolve) => {
      resolve(200);
    });
    // }
  }

  @Action({ rawError: true })
  public async Logout() {
    await logout();
    sessionStorage.removeItem('token');
  }
}

export const UserStoreModule = getModule(UserStore);
