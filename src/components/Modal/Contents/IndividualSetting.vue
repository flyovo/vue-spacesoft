<script lang="ts">
import { DeviceStoreModule } from '@/store/modules/device/store';
import { DevPosType } from '@/store/modules/device/type';
import { defineComponent, PropType, reactive, ref, toRefs } from 'vue';
import { ColumnByType } from './constants';
import type { columnType } from './types';

export default defineComponent({
  name: 'IndividualSetting',
  props: {
    title: { type: String, required: true },
    type: { type: String as PropType<DevPosType>, required: true },
    columnType: { type: String as PropType<columnType>, required: true },
    dataSource: { type: Array, require: true, default: [] }
  },
  components: {},
  setup(props) {
    const state = reactive({
      isModalOpen: false,
      idx: '',
      value: ''
    });

    const handleOk = (e: any) => {
      state.isModalOpen = false;
    };

    const handleCancel = (e: any) => {
      state.isModalOpen = false;
    };

    const handleClickRow = (record: any, _index: any) => {
      return {
        onClick: () => {
          state.idx = record.idx;
          state.value = record.loc_name;
        }
      };
    };

    const handleUpdateSitePos = (bAdd: boolean) => {
      if (!state.value.trim()) {
        alert('텍스트를 입력해주세요.');
        return;
      }
      const body = {
        bAdd,
        type: props.type,
        value: {
          idx: !bAdd ? state.idx : undefined,
          name: state.value
        }
      };

      DeviceStoreModule.UpdateSitePos(body).then(async (resolve: any) => {
        if (resolve === 200) {
          if (bAdd) {
            alert('추가 되었습니다.');
          } else {
            alert('수정 되었습니다.');
          }
        }
      });
    };

    const handleDeleteSitePos = (check: boolean) => {
      const body = {
        check,
        value: {
          idx: state.idx,
          name: state.value,
          type: props.type
        }
      };

      DeviceStoreModule.DeleteSitePos(body).then(async (resolve: any) => {
        if (resolve === 442) {
          if (confirm('정말 삭제하시겠습니까?')) {
            handleDeleteSitePos(false);
          }
        }
        if (resolve === 442) {
          alert('삭제 되었습니다.');
        }
      });
    };

    return {
      ...toRefs(state),
      ColumnByType,
      handleOk,
      handleCancel,
      handleClickRow,
      handleUpdateSitePos,
      handleDeleteSitePos
    };
  }
});
</script>

<template>
  <div class="setting-wrapper">
    <div class="setting-header">{{ title }}</div>
    <a-table
      :columns="ColumnByType(columnType)"
      :dataSource="dataSource"
      :pagination="false"
      :scroll="{ y: 300 }"
      :customRow="handleClickRow" />
    <div class="setting-control-box">
      <a-input
        :style="{ marginBottom: '8px' }"
        :addonBefore="'명칭 : '"
        placeholder="텍스트"
        v-model:value="value" />
      <div class="button-wrapper">
        <a-button
          class="header-ant-button"
          :style="{ height: '40px', flex: '1 0 28%' }"
          @click="handleUpdateSitePos(true)">
          추가
        </a-button>
        <a-button
          class="header-ant-button"
          :style="{ height: '40px', flex: '1 0 28%' }"
          @click="handleUpdateSitePos(false)">
          수정
        </a-button>
        <a-button
          class="header-ant-button"
          :style="{ height: '40px', flex: '1 0 28%' }"
          @click="handleDeleteSitePos(true)">
          삭제
        </a-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.setting-wrapper {
  .ant-table-wrapper {
    height: calc(100% - 150px);
  }

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
@import 'src/views/HeaderContent/style.scss';
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
