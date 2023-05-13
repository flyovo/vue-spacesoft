<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import Logo from '@/components/Logo/index.vue';
import { HEADER_HEIGHT, NAV_WIDTH, headerMenu, navMenu } from './constants.ts';
import HeaderLoginMenu from './HeaderLoginMenu.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Logo,
    HeaderLoginMenu
  },
  props: {
    role: { type: String, required: true, default: 'admin' },
    userName: { type: String, required: true, default: '홍길동' }
  },
  setup() {
    console.log(navMenu);

    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openHeaderMenuKeys: ['sub1'],
      selectedHeaderMenuKeys: ['sub1'],
      openSideMenuKeys: [],
      selectedSideMenuKeys: []
    });

    const onOpenChange = (openSideMenuKeys: string[]) => {
      console.log('openSideMenuKeys ::: ', openSideMenuKeys);
      const latestOpenKey = openSideMenuKeys.find(
        (key) => state.openSideMenuKeys.indexOf(key) === -1
      );
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openSideMenuKeys = openSideMenuKeys;
      } else {
        state.openSideMenuKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };

    return {
      HEADER_HEIGHT: `${HEADER_HEIGHT}px`,
      NAV_WIDTH: NAV_WIDTH,
      headerMenu: headerMenu,
      navMenu: navMenu,
      onOpenChange,
      ...toRefs(state),
      // selectedHeaderMenuKeys: ref(['1']),
      // selectedSideMenuKeys: ref(['1']),
      collapsed: ref(false)
    };
  },
  emits: {},
  methods: {
    onSubmit() {}
  }
});
</script>

<template>
  <a-layout :style="{ width: '100vw', height: '100vh' }">
    <a-layout-header
      :style="{
        display: 'flex',
        height: HEADER_HEIGHT,
        padding: 0,
        backgroundColor: '#004c8d'
      }">
      <Logo :width="`${NAV_WIDTH}px`" :height="HEADER_HEIGHT" />
      <div
        :style="{
          display: 'flex',
          flex: 'auto 1',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '17px 28px'
        }">
        <a-menu
          mode="horizontal"
          v-model:selectedKeys="selectedHeaderMenuKeys"
          v-model:openKeys="openHeaderMenuKeys"
          :style="{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            background: 'transparent',
            color: '#f0f4fc',
            borderBottom: 'unset',
            fontSize: '15px',
            marginLeft: '34px'
          }">
          <a-menu-item
            v-for="menu in headerMenu"
            :key="menu.key"
            :data-type="menu.type">
            <a-divider
              v-if="menu.key % 2 === 0"
              type="vertical"
              :style="{ margin: '0 10px', borderLeft: '1px solid #fff' }" />
            <span v-else>
              {{ menu.label }}
            </span>
          </a-menu-item>
        </a-menu>
        <HeaderLoginMenu :role="role" :userName="userName" />
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        :width="`${NAV_WIDTH + 1}px`"
        :style="{ borderRight: '1px solid #adbecc' }">
        <a-menu
          mode="inline"
          @openChange="onOpenChange"
          v-model:selectedKeys="selectedSideMenuKeys"
          v-model:openKeys="openSideMenuKeys"
          :style="{
            height: '100%',
            background: '#f0f3f5',
            color: '#6c7780',
            fontSize: '14px'
          }">
          <template v-for="menu in navMenu" :key="menu.key">
            <a-menu-item v-if="!menu.children" :key="menu.key">
              <component v-if="menu.icon" :is="menu.icon"></component>
              {{ menu.label }}
            </a-menu-item>
            <a-sub-menu v-else :key="menu.key">
              <template #title>
                <component v-if="menu.icon" :is="menu.icon"></component>
                {{ menu.label }}
              </template>
              <a-menu-item
                v-for="child in menu.children"
                :key="child.key"
                :style="{
                  color: '#6c7780',
                  fontSize: '14px'
                }">
                <user-outlined />
                {{ child.label }}
              </a-menu-item>
            </a-sub-menu>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <a-layout-content
          :style="{
            padding: '24px 41px',
            margin: 0,
            minHeight: 280,
            backgroundColor: '#e8edf0'
          }">
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
.ant-layout-header {
  .ant-menu {
    height: 26px;
    .ant-menu-item {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 4px 9px !important;
      border-radius: 13px;
      order: 0 !important;

      &[data-type='divider'] {
        padding: 0 !important;
        &:hover {
          color: #f0f4fc !important;
          background-color: transparent !important;
        }
      }
    }
    .ant-menu-item-divider {
      padding: 0;
      height: 50%;
      margin: auto 10px;
      border-inline-start: 1px solid #fff;
    }
  }

  .ant-menu-light
    .ant-menu-item:hover:not(.ant-menu-item-selected):not(
      .ant-menu-submenu-selected
    ),
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover::after {
    color: #004c8d;
    background-color: #f0f4fc;
  }

  .ant-menu-light.ant-menu-horizontal > .ant-menu-item::after,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover::after,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected::after {
    border-right: 0;
    border-right-width: 0;
    border-bottom: 0;
  }
}
</style>
