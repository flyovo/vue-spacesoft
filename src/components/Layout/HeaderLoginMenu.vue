<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import router from '@/router';
import { authType } from './constants';
import type { Auth } from '@/store/modules/user/type';

export default defineComponent({
  name: 'HeaderLoginMenu',
  components: {
    UserOutlined,
    PoweroffOutlined
  },
  props: {
    role: { type: String as () => Auth, required: true },
    userName: { type: String, required: true }
  },
  methods: {
    handleLogout() {
      sessionStorage.removeItem('spacesoft-userState');
      router.push(`/login`);
    }
  },
  computed: {
    roleLabel() {
      return authType[this.role] || '';
    }
  }
});
</script>

<template>
  <div class="header-account">
    <div class="header-account-info">
      <UserOutlined :style="{ fontSize: '20px', color: '#e6edf2' }" />
      {{ roleLabel }} {{ userName }}
    </div>
    <a-button
      @click="handleLogout"
      :style="{
        width: '45px',
        height: '100%',
        border: 'none',
        padding: '0',
        backgroundColor: 'transparent'
      }">
      <PoweroffOutlined :style="{ fontSize: '26px', color: '#e8edf0' }" />
    </a-button>
  </div>
</template>

<style lang="scss" scoped>
.header-account {
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 15px;
}
.header-account-info {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 14px;

  color: #e6edf2;
  img {
    content: url(/images/account.png);
  }
}
</style>
