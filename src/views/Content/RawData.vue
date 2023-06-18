<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onMounted,
  computed,
  watch
} from 'vue';
import { CalendarTwoTone } from '@ant-design/icons-vue';
import { rawDataColumns } from './constants';
import VueDatepickerUi from 'vue-datepicker-ui';
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import { PageSizeChanger, ButtonGroup } from '@/components/Pagination';
import { labelByNavType } from '@/components/Layout/constants';
import { RawDataStoreModule } from '@/store/modules/raw-data/store';
import { useRoute } from 'vue-router';
import { UserStoreModule } from '@/store/modules/user/store';
import { termByType } from '@/utils/format';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'RawData',
  components: {
    CalendarTwoTone,
    Datepicker: VueDatepickerUi,
    PageSizeChanger,
    ButtonGroup
  },
  setup() {
    const route = useRoute();
    const userState = UserStoreModule.userState;

    const state = reactive({
      pageSizeOptions: [15, 30, 50],
      selectedDate: [
        new Date(new Date().getTime() - 9 * 24 * 60 * 60 * 1000),
        new Date()
      ],
      durationButtons: [
        { value: 'all', label: '전체 날짜' },
        { value: 'monthly', label: '당월' },
        { value: 'monthly-1', label: '1 개월' },
        { value: 'monthly-2', label: '2 개월' },
        { value: 'monthly-3', label: '3 개월' },
        { value: 'yearly', label: '연간 조회' },
        { value: 'term', label: '기간 조회' }
      ],
      typeButtons: [
        { value: 'all', label: '수납 전체' },
        { value: 'outpatient', label: '외래 수납' },
        { value: 'interim', label: '중간금/퇴원 수납' }
      ]
    });

    const dataSource = ref([]);
    const columns = rawDataColumns;

    const selectedDuration = ref('all');
    const selectedType = ref('all');

    const term = ref({
      startDate: '',
      endDate: ''
    });

    const current = ref(1);
    const total = ref(dataSource.value.length);

    const paginationConfig = ref({
      showSizeChanger: false, // hide the page size selector
      size: 'small',
      current: current.value,
      total: dataSource.value.length,
      pageSizeOptions: state.pageSizeOptions
    });

    // Fetch the data and update the reactive properties
    const fetchData = async () => {
      // 동적으로 받아서 사용할 수 있도록 수정 필요
      const type = route.query.type
        ?.toString()
        .replace(/^[a-z]/, (char) => char.toUpperCase());

      let dateTerm = /-/.test(selectedDuration.value)
        ? selectedDuration.value.slice(0, -2)
        : selectedDuration.value;
      term.value = termByType(selectedDuration.value, state.selectedDate);

      try {
        const params = {
          site: userState.site,
          pos_1: userState.POS_1,
          pos_2: '',
          pos_3: '',
          option: selectedType.value,
          dateTerm,
          startDate: term.value.startDate,
          endDate: term.value.endDate,
          Auth: userState.AUTHORITY
        };

        if (userState.AUTHORITY === 'A' || userState.AUTHORITY === 'P') {
          params.pos_4 = userState.POS_4;
        }

        const result = await RawDataStoreModule.getRawDataList({
          type: `get${type}`,
          params
        });

        dataSource.value = result;
        total.value = dataSource.value.length;
        paginationConfig.value.total = dataSource.value.length;
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData();
    });

    watch(
      () => route.query,
      (to, from) => {
        selectedDuration.value = 'all';
        selectedType.value = 'all';
      }
    );

    const formattedDates = computed(() => {
      const startDate = dayjs(term.value.startDate).format('YYYY년 MM월 DD일');
      const endDate = dayjs(term.value.endDate).format('YYYY년 MM월 DD일');
      return `${startDate} ~ ${endDate}`;
    });

    return {
      ...toRefs(state),
      labelByNavType,

      selectedDuration,
      selectedType,

      formattedDates,

      dataSource,
      columns,

      total,
      current,
      pageSize: state.pageSizeOptions[0],
      paginationConfig,

      fetchData
    };
  },
  data() {
    return {
      selectIndex: 0
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
    handlePaginationChange(pageNumber: number, _pageSize: number) {
      this.paginationConfig.current = pageNumber;
    }
  }
});
</script>

<template>
  <a-breadcrumb separator=">" :style="{ marginBottom: '24px' }">
    <a-breadcrumb-item>{{
      $route.query.type?.toString() &&
      labelByNavType[$route.query.type?.toString()]
    }}</a-breadcrumb-item>
    <a-breadcrumb-item>Raw 데이터</a-breadcrumb-item>
    <a-breadcrumb-item>{{ $route.query.pos1 }}</a-breadcrumb-item>
    <a-breadcrumb-item>{{ $route.query.pos2 }}</a-breadcrumb-item>
    <a-breadcrumb-item>{{ $route.query.pos4 }}</a-breadcrumb-item>
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

        <Datepicker
          range
          v-model="selectedDate"
          lang="ko"
          :disabled="selectedDuration !== 'term'" />
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
      <span class="pos1">
        {{ `${$route.query.pos1} ${$route.query.pos2}` }}&nbsp;
      </span>
      <span class="pos2">{{ $route.query.pos4 }}</span>
    </div>
  </div>

  <hr class="vertical-hr" />

  <div :style="{ margin: '20px 0 18px' }">
    <a-row justify="space-between" align="middle">
      <a-col>
        <span :style="{ color: '#6b7082' }">
          <CalendarTwoTone twoToneColor="#6b7082" />
          {{ formattedDates }}
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
            <ButtonGroup
              :columns="columns"
              :dataSource="dataSource"
              :onSubmit="fetchData" />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>

  <a-table
    v-model="selectIndex"
    class="ant-table-striped-raw-data"
    :columns="columns"
    :dataSource="dataSource"
    :rowClassName="(_record:any, index:number) => (index % 2 === 1 ? 'table-striped' : null)"
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
      <ButtonGroup
        :columns="columns"
        :dataSource="dataSource"
        :onSubmit="fetchData" />
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
