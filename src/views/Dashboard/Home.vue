<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import {
  VerticalBarChart,
  HorizontalBarChart,
  LineChart,
  HalfDoughnutChart,
  DoughnutChart
} from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';
import {
  QsWaitAvgTime,
  QsWaitAvgCount,
  ChartDataByMonth
} from '../../store/modules/dashboard/type';
import SolutionByOverall from '@/views/Dashboard/SolutionByOverall.vue';
import SolutionByOthers from '@/views/Dashboard/SolutionByOthers.vue';
import DailyAvgCnt from '@/views/Dashboard/DailyAvgCnt.vue';
import DailyAvgWaitTime from '@/views/Dashboard/DailyAvgWaitTime.vue';
import DailyAvgWaitCnt from '@/views/Dashboard/DailyAvgWaitCnt.vue';
import Outpatient from '@/views/Dashboard/Outpatient.vue';
import KioskByType from '@/views/Dashboard/KioskByType.vue';
import KioskByFloor from '@/views/Dashboard/KioskByFloor.vue';
import KioskByArea from '@/views/Dashboard/KioskByArea.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SolutionByOverall,
    SolutionByOthers,
    DailyAvgCnt,
    DailyAvgWaitTime,
    DailyAvgWaitCnt,
    Outpatient,
    KioskByType,
    KioskByFloor,
    KioskByArea,

    VerticalBarChart,
    HorizontalBarChart,
    LineChart,
    HalfDoughnutChart,
    DoughnutChart
  },
  setup() {
    const store = useStore();

    const selectedDuration = ref('all');

    // Fetch the data and update the reactive properties
    const fetchWholeChart = async (type: string) => {
      try {
        const result = await DashboardStoreModule.getDashboard({
          type: type,
          date: new Date()
        });
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      if (selectedDuration.value === 'all') {
      }
    });

    return {
      selectedDuration,
      durationButtons: [
        { value: 'all', label: '전체 날짜' },
        { value: 'sunap_monthly_cnt', label: '수납기' },
        { value: 'cert_monthly_cnt', label: '제증명' },
        { value: 'qs_monthly_cnt', label: '순번발권' },
        { value: 'arrive_monthly_cnt', label: '도착확인' },
        { value: 'phy_monthly_cnt', label: '신체계측' }
      ],
      date: new Date()
    };
  },
  methods: {}
});
</script>

<template>
  <div class="dashboard-wrapper column">
    <a-row :gutter="[0, 10]">
      <a-col :span="24" class="dashboard-box">
        <div class="dashboard-box-title">
          <a-radio-group v-model:value="selectedDuration" button-style="solid">
            <a-radio-button
              v-for="(button, index) in durationButtons"
              :key="index"
              :value="button.value">
              {{ button.label }}
            </a-radio-button>
          </a-radio-group>
        </div>
        <SolutionByOverall
          class="row-first"
          v-if="selectedDuration === 'all'" />
        <SolutionByOthers class="row-first" v-else :type="selectedDuration" />
      </a-col>
    </a-row>

    <a-row
      :gutter="[10, 10]"
      style="
         {
          height: '345px';
        }
      ">
      <a-col :span="5">
        <DailyAvgCnt />
      </a-col>
      <a-col :span="5">
        <DailyAvgWaitTime />
      </a-col>
      <a-col :span="5">
        <DailyAvgWaitCnt />
      </a-col>
      <a-col :span="9">
        <div class="dashboard-box">
          <div class="dashboard-box-title">외래</div>
          <!-- <LineChart class="row-middle" /> -->
          <!-- <Outpatient class="row-middle" /> -->
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="[0, 10]">
      <a-col :span="24">
        <div class="dashboard-box">
          <div class="dashboard-box-title">키오스크 기기 현황</div>
          <a-row :gutter="[48, 0]">
            <a-col :span="8" class="row-last">
              <KioskByType />
            </a-col>
            <a-col :span="8" class="row-last">
              <KioskByFloor />
            </a-col>
            <a-col :span="8" class="row-last">
              <KioskByArea />
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
