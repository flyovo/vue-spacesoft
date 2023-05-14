<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from 'vue';
// import { AntdButton, ButtonWrapper } from '../../style'
import { Column, ColumnByType } from './constants';
import { columnType } from './types';

export default defineComponent({
  name: 'IndividualSetting',
  props: {
    title: { type: String, required: true },
    columnType: { type: String as PropType<columnType>, required: true }
  },
  components: {},
  setup() {
    const state = reactive({
      isModalOpen: false,
      value: ''
    });
    const handleOk = (e: any) => {
      state.isModalOpen = false;
    };
    const handleCancel = (e: any) => {
      state.isModalOpen = false;
    };

    return {
      ...toRefs(state),
      handleOk,
      handleCancel,
      Column,
      ColumnByType
    };
  }
});
</script>

<template>
  <div class="setting-wrapper">
    <div class="setting-header">{{ title }}</div>
    <a-table :columns="ColumnByType(columnType)" :dataSource="[]" />
    <div class="setting-control-box">
      <a-input
        :style="{ marginBottom: '8px' }"
        :addonBefore="'명칭 : '"
        placeholder="텍스트"
        v-model:value="value" />
      <div class="button-wrapper">
        <a-button
          class="header-ant-button"
          :style="{ height: '40px', flex: '1 0 28%' }">
          추가
        </a-button>
        <a-button
          class="header-ant-button"
          :style="{ height: '40px', flex: '1 0 28%' }">
          수정
        </a-button>
        <a-button
          class="header-ant-button"
          :style="{ height: '40px', flex: '1 0 28%' }">
          삭제
        </a-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.setting-wrapper {
  .ant-table-thead > tr > th {
    height: 45px !important;
    padding: 0 !important;
    background-color: #818991 !important;
    font-family: SpoqaHanSansNeo;
    font-size: 16px;
    font-weight: 300;
    line-height: 2.25;
    color: #fff !important;
  }

  .ant-input-group-addon {
    border: 0;
    padding-left: 0;
  }

  .header-ant-button:hover,
  .header-ant-button:focus {
    color: #40a9ff;
    border-color: #40a9ff;
    background: #fff;
  }
}
</style>

<style scoped lang="scss">
@import 'src/views/Header/style.scss';
.setting-wrapper {
  flex: 1 0 28%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px #adbecc;
  background-color: #fcfcfc;
}

.setting-header {
  display: flex;
  height: 40px;
  align-items: center;
  padding: 10px;
  background-color: #d9dde1;
}

.setting-control-box {
  padding: 15px 27px;
}
</style>
