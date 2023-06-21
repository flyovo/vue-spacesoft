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
    return new Promise((resolve, reject) => {
      const data = login(payload);
      // const data = cloneDeep(USER_MOCK[payload.type]);

      resolve(data); // Resolve the promise with the received data
    });
  }

  @Action({ rawError: true })
  public async Login(userInfo: { user_id: string; user_pwd: string }) {
    let { user_id, user_pwd } = userInfo;
    user_id = user_id.trim();

    return new Promise(async (resolve) => {
      // 로그인 API 연동 시 주석 해제
      const data = await login({ user_id, user_pwd });

      // 로그인 API 연동 시 주석
      // const data = cloneDeep(USER_MOCK.user);

      this.SET_CHANGE_VALUE({
        key: 'userState',
        value: {
          site: data.site,
          pos_1: data.POS_1,
          pos_4: data.POS_4,
          auth: data.AUTHORITY
        }
      });

      // 로그인 API 연동 시 주석 해제
      // if (resultCd === 200) {
      resolve(200);
      // 로그인 API 연동 시 주석 해제
      // }
    });
  }

  @Action({ rawError: true })
  public async Logout() {
    await logout();
    sessionStorage.removeItem('token');
  }
}

export const UserStoreModule = getModule(UserStore);
