import store from '@/store';
import { getStatisticsData } from '@/api/statistics-api';
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { StatisticsStoreState } from './type';
import { cloneDeep } from 'lodash';
import { STATISTICS_MOCK } from './mock';

@Module({ dynamic: true, store, name: 'statisticsStore', namespaced: true })
class StatisticsStore extends VuexModule implements StatisticsStoreState {
  public statistics_weeksunapcnt = {
    기관: 0,
    층: 0,
    구역: '',
    대수: 0,
    월건수: '0',
    월금액: '0',
    화건수: '0',
    화금액: '0',
    수건수: '0',
    수금액: '0',
    목건수: '0',
    목금액: '0',
    금건수: '0',
    금금액: '0',
    토건수: '0',
    토금액: '0',
    일건수: '0',
    일금액: '0'
  };

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
  public getStatisticsList(payload: { type: string; params: any }) {
    const data = cloneDeep(STATISTICS_MOCK[payload.type]);
    console.log(payload);
    // const data = getStatisticsData(payload);

    return new Promise((resolve, reject) => {
      resolve(data); // Resolve the promise with the received data
    });
  }
}

export const StatisticsStoreModule = getModule(StatisticsStore);
