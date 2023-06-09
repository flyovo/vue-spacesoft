<script lang="ts">
import { DeviceStoreModule } from '@/store/modules/device/store';
import { DevPosList } from '@/store/modules/device/type';
import { defineComponent, reactive, toRefs, onMounted, ref } from 'vue';
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
    const dataSource = ref([]);

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        const result = (await DeviceStoreModule.getDevice({
          type,
          params: { date: new Date() }
        })) as DevPosList[];

        dataSource.value = result;
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData('site_post_list');
    });

    return {
      ...toRefs(state),
      dataSource
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
      <IndividualSetting
        :title="'기관 설정'"
        :columnType="'institutional'"
        :type="'pos_1'"
        :dataSource="dataSource.filter((data) => data.type === 'pos_1')" />
      <IndividualSetting
        :title="'관리 부서 설정'"
        :columnType="'department'"
        :type="'pos_4'"
        :dataSource="dataSource.filter((data) => data.type === 'pos_2')" />
      <IndividualSetting
        :title="'모델명 설정'"
        :columnType="'model'"
        :type="'dev_model'"
        :dataSource="dataSource.filter((data) => data.type === 'pos_4')" />
    </a-row>
    <a-row :style="{ gap: '10px' }">
      <IndividualSetting
        :title="'기관 설정'"
        :columnType="'institutional'"
        :type="'pos_2'"
        :dataSource="dataSource.filter((data) => data.type === 'dev_model')" />
      <IndividualSetting
        :title="'관리 부서 설정'"
        :columnType="'department'"
        :type="'dev_type'"
        :dataSource="dataSource.filter((data) => data.type === 'dev_type')" />
      <IndividualSetting
        :title="'모델명 설정'"
        :columnType="'model'"
        :type="'op_prog'"
        :dataSource="dataSource.filter((data) => data.type === 'op_prog')" />
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
