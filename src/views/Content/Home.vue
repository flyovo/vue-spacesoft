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
import SolutionByOverall from '@/views/Content/Dashboard/SolutionByOverall.vue';
import SolutionByOthers from '@/views/Content/Dashboard/SolutionByOthers.vue';
import DailyAvgCnt from '@/views/Content/Dashboard/DailyAvgCnt.vue';
import DailyAvgWaitTime from '@/views/Content/Dashboard/DailyAvgWaitTime.vue';
import DailyAvgWaitCnt from '@/views/Content/Dashboard/DailyAvgWaitCnt.vue';
import Outpatient from '@/views/Content/Dashboard/Outpatient.vue';
import KioskByType from '@/views/Content/Dashboard/KioskByType.vue';
import KioskByFloor from '@/views/Content/Dashboard/KioskByFloor.vue';
import KioskByArea from '@/views/Content/Dashboard/KioskByArea.vue';

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
    const selectedType = ref('all');

    // Fetch the data on component mount
    onMounted(() => {});

    return {
      selectedType,
      typeButtons: [
        { value: 'all', label: '전체 날짜' },
        { value: 'SunapMonthlyCnt', label: '수납기' },
        { value: 'certMonthlyCnt', label: '제증명' },
        { value: 'qsMonthlyCnt', label: '순번발권' },
        { value: 'arriveMonthlyCnt', label: '도착확인' },
        { value: 'phyMonthlyCnt', label: '신체계측' }
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
          <a-radio-group v-model:value="selectedType" button-style="solid">
            <a-radio-button
              v-for="(button, index) in typeButtons"
              :key="index"
              :value="button.value">
              {{ button.label }}
            </a-radio-button>
          </a-radio-group>
        </div>
        <SolutionByOverall class="row-first" v-if="selectedType === 'all'" />
        <SolutionByOthers class="row-first" v-else :type="selectedType" />
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
          <Outpatient class="row-middle" />
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
@import './Dashboard/style.scss';
</style>
