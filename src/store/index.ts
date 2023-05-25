import { createStore } from 'vuex';
import { DashboardStoreState } from './modules/dashboard/type';

export interface IRootState {
  dashboardStore: DashboardStoreState;
}

// Declare empty store first, dynamically register all modules later.
export default createStore<IRootState>({});
