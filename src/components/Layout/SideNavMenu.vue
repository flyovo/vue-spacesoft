<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { MenuItem, navMenu } from '@/components/Layout/constants';
import { WisdomStoreModule } from '@/store/modules/wisdom/store';

export default defineComponent({
  name: 'SideNavMenu',
  components: {},
  setup() {
    const customNavMenu = ref([]);

    function parseNavTree(pos: string, navTree: any): any[] {
      return Object.keys(navTree)
        .filter((key: string) => key !== 'All')
        .map((key: string) => {
          let item = navTree[key];
          if (pos === 'root') item = item[0];

          const pos_1 = item?.pos_1;
          const pos_2 = item?.pos_2;
          const pos_4 = item?.pos_4;
          let children = [];

          if (pos_4) {
            children = pos_4.map((posItem: any) => {
              return {
                key: posItem.name,
                label: posItem.name
              };
            });
          } else if (pos_2) {
            children = parseNavTree('pos_2', pos_2);
          } else if (pos_1) {
            children = parseNavTree('pos_1', pos_1);
          }

          const tree = {
            key: item.name,
            label: item.name,
            children
          };

          if (pos_1) {
            tree.key = key;
            tree.label = key;
          }

          return tree;
        });
    }

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        const result = await WisdomStoreModule.getWisdom({
          type: type,
          date: new Date()
        });

        const parseNavMenu = parseNavTree('root', result);

        customNavMenu.value = navMenu?.map((menu: MenuItem) => {
          return {
            ...menu,
            children: parseNavMenu.find((c) => {
              return menu?.key === c.key;
            })?.children
          };
        });
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData('get_nav_tree');
    });

    return {
      navMenu,
      customNavMenu
    };
  },
  methods: {}
});
</script>

<template>
  <template v-for="menu in customNavMenu" :key="menu.key">
    <a-menu-item v-if="!menu?.children">
      <component
        v-if="menu.icon"
        :is="menu.icon"
        :style="{ marginRight: '10px' }" />
      <router-link :to="menu.key">{{ menu.label }}</router-link>
    </a-menu-item>
    <a-sub-menu v-else :key="menu.key">
      <template #title>
        <component
          v-if="menu.icon"
          :is="menu.icon"
          :style="{ marginRight: '10px' }" />
        {{ menu.label }}
      </template>
      <a-menu-item :key="`${menu.key}-statistics`">
        <router-link
          :to="{
            path: 'statistics',
            query: {
              type: menu.key
            }
          }"
          :style="{
            color: '#6c7780',
            fontSize: '14px'
          }"
          >통계
        </router-link>
      </a-menu-item>
      <a-sub-menu
        v-for="child in menu.children"
        :key="`${menu.key}-${child.key}`"
        :style="{
          color: '#6c7780',
          fontSize: '14px'
        }">
        <template #title>
          <component
            v-if="child.icon"
            :is="child.icon"
            :style="{ marginRight: '10px' }" />
          {{ child.label }}
        </template>
        <a-sub-menu
          v-for="child1 in child.children"
          :key="`${menu.key}-${child.key}-${child1.key}`"
          :style="{
            color: '#6c7780',
            fontSize: '14px'
          }">
          <template #title>
            <component
              v-if="child1.icon"
              :is="child1.icon"
              :style="{ marginRight: '10px' }" />
            {{ child1.label }}
          </template>
          <a-menu-item
            v-for="child2 in child1.children"
            :key="`${menu.key}-${child.key}-${child1.key}-${child2.key}`"
            :style="{
              color: '#6c7780',
              fontSize: '14px'
            }">
            <router-link
              :to="{
                path: 'raw-data',
                query: {
                  type: menu.key,
                  pos1: child.key,
                  pos2: child1.key,
                  pos4: child2.key
                }
              }"
              >{{ child2.label }}
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-sub-menu>
  </template>
</template>

<style lang="scss"></style>
