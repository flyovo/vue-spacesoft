<script lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import HeaderLoginMenu from '@/components/Layout/HeaderLoginMenu.vue';
import Logo from '@/components/Logo/index.vue';
import { defineComponent, ref, reactive, toRefs } from 'vue';
import {
  HEADER_HEIGHT,
  NAV_WIDTH,
  headerMenu,
  navMenu
} from '@/components/Layout/constants';

export default defineComponent({
  name: 'Layout',
  components: {
    Logo,
    HeaderLoginMenu,
    RouterView,
    RouterLink
  },
  props: {
    role: { type: String, required: false, default: 'admin' },
    userName: { type: String, required: false, default: '홍길동' }
  },
  setup() {
    console.log('headerMenu ::: ', headerMenu);
    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      selectedHeaderMenuKeys: [],
      openSideMenuKeys: [],
      selectedSideMenuKeys: [],
      headerMenu,
      navMenu
    });

    const handleHeaderMenuClick = (e: any) => {
      state.selectedSideMenuKeys = [];
    };

    const handleSideMenuClick = (e: any) => {
      state.selectedHeaderMenuKeys = [];
    };

    return {
      HEADER_HEIGHT: `${HEADER_HEIGHT}px`,
      NAV_WIDTH: NAV_WIDTH,
      ...toRefs(state),
      handleHeaderMenuClick,
      handleSideMenuClick,
      // selectedHeaderMenuKeys: ref(['1']),
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
          @click="handleHeaderMenuClick"
          v-model:selectedKeys="selectedHeaderMenuKeys"
          :style="{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            background: 'transparent',
            color: '#f0f4fc',
            borderBottom: 'unset',
            fontSize: '15px',
            marginLeft: '34px',
            height: '100%',
            padding: '10px 0'
          }">
          <a-menu-item
            v-for="menu in headerMenu"
            :key="menu?.key"
            :data-type="menu.type">
            <a-divider
              v-if="menu?.key % 2 === 0"
              type="vertical"
              :style="{ margin: '0 10px', borderLeft: '1px solid #fff' }" />
            <router-link v-else :to="menu.key">{{ menu.label }}</router-link>
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
          @click="handleSideMenuClick"
          v-model:selectedKeys="selectedSideMenuKeys"
          v-model:openKeys="openSideMenuKeys"
          :style="{
            height: '100%',
            background: '#f0f3f5',
            color: '#6c7780',
            fontSize: '14px'
          }">
          <template v-for="menu in navMenu" :key="menu.key">
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
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
.ant-layout-header {
  .ant-menu {
    height: 26px;
    li.ant-menu-item {
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

      a {
        color: #f0f4fc;
        display: flex;
      }
      &.ant-menu-item-selected a {
        color: #004c8d;
      }
      &.ant-menu-item-active a {
        color: #004c8d;
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
    color: transparent;
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

.ant-layout-sider {
  .ant-menu-item {
    a {
      display: inline-block;
      width: calc(100% - 14px - 10px);
    }
  }
}
</style>

<!-- 
.ant-layout-sider {
  .ant-menu-item,
  .ant-menu-submenu-title {
    padding: 0 !important;
    a {
      display: inline-block;
      width: calc(100% - 14px - 16px - 10px);
    }
  }
} 
-->
