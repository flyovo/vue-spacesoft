import { UserState } from './type';

export const USER_INFO: UserState = {
  AUTHORITY: 'A',
  USER_ID: 'USER_ID',
  USER_NM: '사용자 A',
  site: '',
  POS_1: '본관',
  POS_4: '원무과'
};

type MockType = {
  [key: string]: UserState;
};

export const USER_MOCK: MockType = {
  user: USER_INFO
};
