export interface WisdomStoreState {
  wisdom_navtree: NavTree;
}

export type NavTreeNode = {
  name: string;
  pos_2?: NavTreeNode[];
  pos_4?: NavTreeNode[];
};

export type NavTree = {
  All: [{ pos_1: NavTreeNode[] }]; //전체기기
  sunap: [{ pos_1: NavTreeNode[] }]; //수납기
  cert: [{ pos_1: NavTreeNode[] }]; //제증명
  arrive: [{ pos_1: NavTreeNode[] }]; //도착확인
  phy: [{ pos_1: NavTreeNode[] }]; //신체계측
};
