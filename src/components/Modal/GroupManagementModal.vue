<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import IndividualSetting from './Contents/IndividualSetting.vue';

export default defineComponent({
  name: 'GroupManagementModal',
  props: {
    visible: { type: Boolean, required: true },
    closeModal: { type: Function, required: true }
  },
  components: {
    IndividualSetting
  },
  setup(props) {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  },
  methods: {
    handleOk(e: any) {
      this.closeModal();
    },
    handleCancel(e: any) {
      this.closeModal();
    }
  }
});
</script>

<template>
  <a-modal
    :visible="visible"
    title="그룹 관리"
    centered
    width="80%"
    @ok="handleOk"
    @cancel="handleCancel"
    :bodyStyle="{ backgroundColor: '#e8edf0' }">
    <template #footer>
      <a-button
        key="back"
        @click="handleOk"
        :style="{
          width: '100%',
          height: '50px',
          backgroundColor: '#4ca7db',
          color: '#f7fbfc',
          fontSize: '16px',
          borderColor: 'transparent',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }">
        완료
      </a-button>
    </template>
    <a-row :style="{ gap: '10px', marginBottom: '15px' }">
      <IndividualSetting :title="'기관 설정'" :columnType="'institutional'" />
      <IndividualSetting :title="'관리 부서 설정'" :columnType="'department'" />
      <IndividualSetting :title="'모델명 설정'" :columnType="'model'" />
    </a-row>
    <a-row :style="{ gap: '10px' }">
      <IndividualSetting :title="'기관 설정'" :columnType="'institutional'" />
      <IndividualSetting :title="'관리 부서 설정'" :columnType="'department'" />
      <IndividualSetting :title="'모델명 설정'" :columnType="'model'" />
    </a-row>
  </a-modal>
</template>

<style lang="scss">
@import './style.scss';
</style>

<style scoped lang="scss">
.ant-modal-title {
  font-family: SpoqaHanSansNeo;
  font-size: 30px;
  line-height: 1.2;
  color: #2d3038;
}
</style>
