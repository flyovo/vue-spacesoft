<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { CalendarTwoTone } from '@ant-design/icons-vue';
import { statisticsColumns, statisticsSourceData } from './constants';
import VueDatepickerUi from 'vue-datepicker-ui';
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import { PageSizeChanger, ButtonGroup } from '@/components/Pagination';

export default defineComponent({
  name: 'Statistics',
  components: {
    CalendarTwoTone,
    Datepicker: VueDatepickerUi,
    PageSizeChanger,
    ButtonGroup
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
      pageSizeOptions: [15, 30, 50],
      selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)
      ],
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

    const dataSource = statisticsSourceData;
    const columns = statisticsColumns;

    const selectedDuration = ref('all');
    const selectedType = ref('all');

    const current = ref(1);
    const total = ref(dataSource.length);

    return {
      ...toRefs(state),
      selectedDuration,
      selectedType,

      dataSource,
      columns,

      total,
      current,
      pageSize: state.pageSizeOptions[0]
    };
  },
  data() {
    return {
      selectIndex: 0,
      paginationConfig: {
        showSizeChanger: false, // hide the page size selector
        size: 'small',
        current: this.current,
        total: this.dataSource.length,
        pageSizeOptions: this.pageSizeOptions
      }
    };
  },
  watch: {
    selectIndex(newValue: number) {
      this.pageSize = this.pageSizeOptions[newValue];
      this.paginationConfig.current = 1;
    }
  },
  methods: {
    handleTypeButtonClick(button: any) {
      this.selectedType = button.value;
      this.paginationConfig.total = this.dataSource.length;
      this.paginationConfig.current = 1;
    },
    handlePaginationChange(pageNumber: number, pageSize: number) {
      this.paginationConfig.current = pageNumber;
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
        <a-radio-group v-model:value="selectedDuration" button-style="solid">
          <a-radio-button
            v-for="(button, index) in durationButtons"
            :key="index"
            :value="button.value">
            {{ button.label }}
          </a-radio-button>
        </a-radio-group>

        <Datepicker range v-model="selectedDate" lang="ko" />
      </div>

      <div class="button-group" :style="{ marginBottom: '18px' }">
        <a-typography>수납 타입 선택</a-typography>
        <a-radio-group v-model:value="selectedType" button-style="solid">
          <a-radio-button
            v-for="(button, index) in typeButtons"
            :key="index"
            :value="button.value"
            @click="handleTypeButtonClick(button)">
            {{ button.label }}
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>

    <div class="content-position-title">
      <span class="pos1">{{ pos1 }}&nbsp;</span>
      <span class="pos2">{{ pos2 }}</span>
    </div>
  </div>

  <hr class="vertical-hr" />

  <div :style="{ margin: '20px 0 18px' }">
    <a-row justify="space-between" align="middle">
      <a-col>
        <span :style="{ color: '#6b7082' }">
          <CalendarTwoTone twoToneColor="#6b7082" />
          2022년 07월 29일 ~ 2023 03월 31일
        </span>
      </a-col>
      <a-col>
        <a-row :gutter="[8, 0]" align="middle">
          <a-col>
            <PageSizeChanger
              :pageSizeOptions="pageSizeOptions"
              v-model="selectIndex" />
          </a-col>
          <a-col>
            <ButtonGroup :dataSource="dataSource" />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>

  <a-table
    v-model="selectIndex"
    class="ant-table-striped-statistics"
    :columns="columns"
    :dataSource="dataSource"
    :rowClassName="(record:any, index:number) => (index % 2 === 1 ? 'table-striped' : null)"
    size="middle"
    :pagination="{ ...paginationConfig, pageSize: pageSize }"
    bordered>
  </a-table>

  <a-row
    :gutter="[8, 0]"
    justify="center"
    align="middle"
    :style="{ margin: '14px 0' }">
    <a-pagination
      size="small"
      v-model="selectIndex"
      :pageSize="pageSize"
      :current="paginationConfig.current"
      :total="paginationConfig.total"
      :show-size-changer="paginationConfig.showSizeChanger"
      :page-size-options="pageSizeOptions"
      @change="handlePaginationChange" />
    <a-col>
      <PageSizeChanger
        :pageSizeOptions="pageSizeOptions"
        v-model="selectIndex" />
    </a-col>
    <a-col>
      <ButtonGroup :dataSource="dataSource" />
    </a-col>
  </a-row>
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

  .ant-radio-group-solid
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: #4ca7db;
    border-color: #dee3e6;
  }
}

div[class*='ant-table-striped-'] {
  .ant-pagination {
    display: none;
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