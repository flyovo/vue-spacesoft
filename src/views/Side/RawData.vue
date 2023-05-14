<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { CalendarTwoTone } from '@ant-design/icons-vue';
import {
  rawDataSourceData,
  rawDataColumns,
  statisticsColumns,
  statisticsSourceData
} from './constants';
import { throwStatement } from '@babel/types';

export default defineComponent({
  name: 'RawData',
  components: {
    CalendarTwoTone
  },
  props: {
    pos1: {
      type: String,
      required: true,
      default: '본관 10층'
    },
    pos2: {
      type: String,
      required: true,
      default: '내분비내과'
    }
  },
  setup() {
    const state = reactive({
      dataSource: rawDataSourceData,
      columns: rawDataColumns,
      // currentPage: 1,
      // pageSize: 10
      durationButtons: [
        { value: 'all', label: '전체 날짜' },
        { value: 'thisMonth', label: '당월' },
        { value: 'oneMonth', label: '1 개월' },
        { value: 'twoMonth', label: '2 개월' },
        { value: 'threeMonth', label: '3 개월' },
        { value: 'yearly', label: '연간 조회' },
        { value: 'custom', label: '기간 조회' }
      ],
      typeButtons: [
        { value: 'all', label: '수납 전체' },
        { value: 'outpatient', label: '외래 수납' },
        { value: 'interim', label: '중간금/퇴원 수납' }
      ]
    });

    const selectedDuration = ref('all');
    const selectedType = ref('all');

    return { ...toRefs(state), selectedDuration, selectedType };
  },
  methods: {
    handleDurationButtonClick(button: any) {
      this.selectedDuration = button.value;
      // Perform action on button click
    },
    handleTypeButtonClick(button: any) {
      this.selectedType = button.value;

      if (button.value !== 'all') {
        this.columns = statisticsColumns;
        this.dataSource = statisticsSourceData;
        return;
      }

      this.columns = rawDataColumns;
      this.dataSource = rawDataSourceData;
    }
  }
});
</script>

<template>
  <a-breadcrumb separator=">" :style="{ marginBottom: '24px' }">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item>수납기</a-breadcrumb-item>
    <a-breadcrumb-item>Raw 데이터</a-breadcrumb-item>
    <a-breadcrumb-item>본관</a-breadcrumb-item>
    <a-breadcrumb-item>내분비내과</a-breadcrumb-item>
  </a-breadcrumb>

  <div class="content-header">
    <div class="button-group-wrapper">
      <div class="button-group" :style="{ marginBottom: '10px' }">
        <a-typography>기간 선택</a-typography>
        <a-button-group v-model="selectedDuration">
          <a-button
            v-for="(button, index) in durationButtons"
            :key="index"
            :value="button.value"
            @click="handleDurationButtonClick(button)">
            {{ button.label }}
          </a-button>
        </a-button-group>
      </div>

      <div class="button-group" :style="{ marginBottom: '18px' }">
        <a-typography>수납 타입 선택</a-typography>
        <a-button-group v-model="selectedType">
          <a-button
            v-for="(button, index) in typeButtons"
            :key="index"
            :value="button.value"
            @click="handleTypeButtonClick(button)">
            {{ button.label }}
          </a-button>
        </a-button-group>
      </div>
    </div>

    <div class="content-header-title">
      <span class="pos1">{{ pos1 }}&nbsp;</span>
      <!-- &nbsp; -->
      <span class="pos2">{{ pos2 }}</span>
    </div>
  </div>

  <hr class="vertical-hr" />

  <div :style="{ margin: '25px 0' }">
    <span :style="{ color: '#6b7082' }">
      <CalendarTwoTone twoToneColor="#6b7082" />
      2022년 07월 29일 ~ 2023 03월 31일
    </span>
  </div>

  <a-table :columns="columns" :dataSource="dataSource" bordered size="middle" />
</template>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
}

.content-header {
  display: flex;
  justify-content: space-between;

  .button-group-wrapper {
    .button-group {
      display: flex;
      gap: 18px;
      align-items: center;
    }
  }
  .content-header-title {
    font-family: 'SpoqaHanSansNeo';
    font-size: 42px;
    font-weight: 500;
    line-height: 0.67;
    text-align: right;
    .pos1 {
      color: #004c8d;
    }
    .pos2 {
      color: #1d2226;
    }
  }
}
</style>
