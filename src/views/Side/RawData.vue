<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { CalendarTwoTone } from '@ant-design/icons-vue';
import {
  rawDataSourceData,
  rawDataColumns,
  statisticsColumns,
  statisticsSourceData
} from './constants';
import VueDatepickerUi from 'vue-datepicker-ui';
import 'vue-datepicker-ui/lib/vuedatepickerui.css';

export default defineComponent({
  name: 'RawData',
  components: {
    CalendarTwoTone,
    Datepicker: VueDatepickerUi
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
      selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)
      ],
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

    const pageSizeOptions = ref<string[]>(['15', '30', '50']);
    const current = ref(1);
    const pageSizeRef = ref(15);
    const total = ref(state.dataSource.length);
    const onShowSizeChange = (current: number, pageSize: number) => {
      console.log(pageSize);
      pageSizeRef.value = pageSize;
    };

    return {
      ...toRefs(state),
      selectedDuration,
      selectedType,
      pageSizeOptions,
      current,
      pageSize: pageSizeRef,
      total,
      onShowSizeChange
    };
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
        <Datepicker range v-model="selectedDate" lang="ko" />
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

    <div class="content-position-title">
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

  <a-table
    :class="
      selectedType === 'all'
        ? `ant-table-striped-raw-data`
        : `ant-table-striped-statistics`
    "
    :columns="columns"
    :dataSource="dataSource"
    size="middle"
    bordered
    :rowClassName="
      (record, index) => (index % 2 === 1 ? 'table-striped' : null)
    " />

  <a-pagination
    size="small"
    v-model:current="current"
    :page-size-options="pageSizeOptions"
    :total="total"
    show-size-changer
    :page-size="pageSize"
    @showSizeChange="onShowSizeChange">
    <template #buildOptionText="props">
      <span>{{ props.value }}개씩</span>
      <!-- <span v-if="props.value !== '50'">{{ props.value }}개씩</span>
        <span v-else>全部</span> -->
    </template>
  </a-pagination>
</template>

<style lang="scss">
@import 'src/components/Datepicker/datepicker.scss';
@import 'src/components/Table/table.scss';
.content-header {
  .ant-btn {
    background-color: #f7f9fc;
    > span {
      font-family: SpoqaHanSansNeo;
      font-size: 12px;
      line-height: 1.5;
      color: #6c7780;
    }
  }
}
</style>
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

    .ant-btn-group > .ant-btn:first-child:not(:last-child),
    .ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .ant-btn-group > .ant-btn:last-child:not(:first-child),
    .ant-btn-group > span:last-child:not(:first-child) > .ant-btn {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  .content-position-title {
    font-family: 'SpoqaHanSansNeo';
    font-size: 42px;
    font-weight: 500;
    text-align: right;
    .pos1 {
      color: #004c8d;
    }
    .pos2 {
      color: #1d2226;
    }
  }
}

.ant-table-striped {
  :deep(.table-striped) td {
    background-color: #f7fafc;
  }

  td {
    font-size: 14px;
    color: #3d464d;
  }
}
</style>
