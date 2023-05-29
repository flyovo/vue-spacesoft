import { NavTree } from './type';

const NAV_TREE: NavTree = {
  All: [
    {
      pos_1: [
        {
          name: 'A동',
          pos_2: [
            {
              name: '1층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        },
        {
          name: 'R동',
          pos_2: [
            {
              name: '2층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        },
        {
          name: 'B동',
          pos_2: [
            {
              name: '1층',
              pos_4: [
                {
                  name: '간호부'
                },
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '2층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '3층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '4층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '5층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '6층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        },
        {
          name: 'C동',
          pos_2: [
            {
              name: '1층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '5층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  sunap: [
    {
      pos_1: [
        {
          name: 'A동',
          pos_2: [
            {
              name: '1층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        },
        {
          name: 'R동',
          pos_2: [
            {
              name: '2층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        },
        {
          name: 'B동',
          pos_2: [
            {
              name: '1층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '2층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '3층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '4층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '5층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            },
            {
              name: '6층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        },
        {
          name: 'C동',
          pos_2: [
            {
              name: '1층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  cert: [
    {
      pos_1: [
        {
          name: 'B동',
          pos_2: [
            {
              name: '1층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  arrive: [
    {
      pos_1: []
    }
  ],
  phy: [
    {
      pos_1: [
        {
          name: 'C동',
          pos_2: [
            {
              name: '5층',
              pos_4: [
                {
                  name: '원무과'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

type MockType = {
  [key: string]: NavTree;
};

export const WISDOM_MOCK: MockType = {
  get_nav_tree: NAV_TREE
};
