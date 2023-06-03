<script lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import HeaderLoginMenu from '@/components/Layout/HeaderLoginMenu.vue';
import Logo from '@/components/Logo/index.vue';
import SideNavMenu from '@/components/Layout/SideNavMenu.vue';
import { defineComponent, ref, reactive, toRefs } from 'vue';
import {
  HEADER_HEIGHT,
  NAV_WIDTH,
  headerMenu,
  navMenu
} from '@/components/Layout/constants';
import router from '@/router';

export default defineComponent({
  name: 'Layout',
  components: {
    Logo,
    HeaderLoginMenu,
    RouterView,
    RouterLink,
    SideNavMenu
  },
  setup() {
    const userStateString = sessionStorage.getItem('spacesoft-userState');
    const userState =
      userStateString !== null ? JSON.parse(userStateString) : null;

    const state = reactive({
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
      userState,
      HEADER_HEIGHT: `${HEADER_HEIGHT}px`,
      NAV_WIDTH: NAV_WIDTH,
      ...toRefs(state),
      handleHeaderMenuClick,
      handleSideMenuClick,
      collapsed: ref(false)
    };
  },
  emits: {},
  methods: {
    onSubmit() {}
  },
  mounted() {
    if (!sessionStorage.getItem('spacesoft-userState')) {
      router.push(`/login`);
      return;
    }

    if (router.currentRoute.value.path === '/') {
      router.push(`/home`);
      return;
    }
  }
});
</script>

<template>
  <a-layout :style="{ width: '100vw' }">
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
          <a-menu-item v-for="menu in headerMenu" :key="menu?.key">
            <a-divider
              v-if="menu?.key % 2 === 0"
              type="vertical"
              :style="{ margin: '0 10px', borderLeft: '1px solid #fff' }" />
            <router-link v-else :to="menu.key">{{ menu.label }}</router-link>
          </a-menu-item>
        </a-menu>
        <HeaderLoginMenu
          :role="userState?.authority"
          :userName="userState?.user_name" />
      </div>
    </a-layout-header>
    <a-layout :style="{ height: 'fit-content', overflow: 'scroll' }">
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
          <SideNavMenu />
        </a-menu>
      </a-layout-sider>
      <a-layout>
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
    .ant-menu-item:nth-child(2n-1):hover:not(.ant-menu-item-selected):not(
      .ant-menu-submenu-selected
    ),
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected:nth-child(2n-1),
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item:nth-child(2n-1)::after {
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
  .ant-menu-sub {
    .ant-menu-item {
      a {
        display: inline-block;
        width: 100%;
      }
    }
  }

  .ant-menu-item {
    a {
      display: inline-block;
      width: calc(100% - 14px - 10px);
    }
  }
}
</style>
