import store from '@/store';
import { login, logout } from '@/api/user-api';
import { getDashboardData } from '@/api/dashboard-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { DashboardStoreState } from './type';
import { cloneDeep } from 'lodash';
import { DASHBOARD_MOCK } from './mock';

@Module({ dynamic: true, store, name: 'dashboardStore', namespaced: true })
class DashboardStore extends VuexModule implements DashboardStoreState {
  public dashboard_qsissuecnt = [];
  public dashboard_qswaitavgcnt = [];
  public dashboard_qswaitavgtime = [];

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
  public getDashboard(payload: { type: string; params: { date: Date } }) {
    return new Promise((resolve, reject) => {
      // const data = getDashboardData(payload);
      const data = cloneDeep(DASHBOARD_MOCK[payload.type]);

      // this.SET_CHANGE_VALUE({
      //   key: `dashboard_${payload.type}`,
      //   value: data
      // });

      resolve(data); // Resolve the promise with the received data
    });
  }
}

export const DashboardStoreModule = getModule(DashboardStore);
