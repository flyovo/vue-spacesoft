export interface UserStoreState {
  userState: UserState;
}

export interface UserState {
  AUTHORITY: Auth;
  USER_ID: string;
  USER_NM: string;
  POS_1: string;
  POS_4: string;
}

type Auth = 'A' | 'P' | 'S';
// 부서별 조회할때 사용
// A or P 일때 'pos_4' where 조건 추가