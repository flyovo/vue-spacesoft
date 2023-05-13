<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { deviceColumn, deviceDataSource } from './constants';

export default defineComponent({
  name: 'DeviceManagement',
  props: {
    title: { type: String, required: false, default: '기기관리' }
  },
  setup() {
    const state = reactive({
      deviceColumn: deviceColumn,
      deviceDataSource: deviceDataSource
    });

    const handleClickGroupManegement = (e: any) => {};

    return {
      ...toRefs(state),
      handleClickGroupManegement
    };
  }
});
</script>

<template>
  <section>
    <div class="content-title">{{ title }}</div>
    <div class="button-wrapper">
      <a-button
        class="antd-styled-button"
        :style="{ height: '34px' }"
        @click="handleClickGroupManegement">
        그룹 관리
      </a-button>
      <a-button class="antd-styled-button" :style="{ height: '34px' }">
        신규 기기 추가
      </a-button>
    </div>
    <hr class="vertical-hr" />
    <a-table
      :style="{ height: 'calc(100% - 141px)', overflow: 'scroll' }"
      :scroll="{ x: '100%', y: 'calc(100% - 141px - 100px)' }"
      :columns="deviceColumn"
      :dataSource="deviceDataSource"
      :showHeader="true"
      :pagination="false" />
  </section>
</template>

<style scoped lang="scss">
@import './style.scss';

section {
  height: 100%;
}

.antd-styled-button,
.ant-btn:hover,
.ant-btn:focus,
.ant-btn:active {
  border: solid 1px #2f3942;
  background-color: #36424d;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.38;
  text-align: center;
  color: #fff;
}
</style>

<style lang="scss">
.ant-table-thead > tr > th {
  color: #004c8d !important;
  font-size: 14px;
  font-weight: 700 !important;
  line-height: 1.14;
  background-color: #f7fbfc !important;
}
</style>
