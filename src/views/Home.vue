<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  VerticalBarChart,
  HorizontalBarChart,
  LineChart,
  HalfDoughnutChart,
  DoughnutChart
} from '@/components/Dashboard';

export default defineComponent({
  name: 'Home',
  components: {
    VerticalBarChart,
    HorizontalBarChart,
    LineChart,
    HalfDoughnutChart,
    DoughnutChart
  },
  setup() {
    const selectedDuration = ref('all');

    return {
      selectedDuration,
      durationButtons: [
        { value: 'all', label: '전체 날짜' },
        { value: 'thisMonth', label: '수납기' },
        { value: 'oneMonth', label: '제증명' },
        { value: 'twoMonth', label: '순번발권' },
        { value: 'threeMonth', label: '도착확인' },
        { value: 'yearly', label: '신체계측' }
      ]
    };
  }
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
        <VerticalBarChart class="row-first" />
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
        <div class="dashboard-box">
          <div class="dashboard-box-title">월 평균 수납 건수</div>
          <HorizontalBarChart class="row-middle" />
        </div>
      </a-col>
      <a-col :span="5">
        <div class="dashboard-box">
          <div class="dashboard-box-title">일 평균 대기시간</div>
          <HalfDoughnutChart :color="'#78bcee'" class="row-middle" />
        </div>
      </a-col>
      <a-col :span="5">
        <div class="dashboard-box">
          <div class="dashboard-box-title">일 평균 대기인수</div>
          <HalfDoughnutChart :color="'#f1da80'" class="row-middle" />
        </div>
      </a-col>
      <a-col :span="9">
        <div class="dashboard-box">
          <div class="dashboard-box-title">외래</div>
          <LineChart class="row-middle" />
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="[0, 10]">
      <a-col :span="24">
        <div class="dashboard-box">
          <div class="dashboard-box-title">키오스크 기기 현황</div>
          <a-row :gutter="[48, 0]">
            <a-col :span="8" class="row-last">
              <DoughnutChart
                :title="'유형별'"
                :labels="[
                  '진료대기',
                  '제증명',
                  '복합기',
                  '도착확인',
                  '번호표'
                ]" />
            </a-col>
            <a-col :span="8" class="row-last">
              <DoughnutChart
                :title="'층별'"
                :labels="['5층', '4층', '3층', '2층', '1층']" />
            </a-col>
            <a-col :span="8" class="row-last">
              <DoughnutChart
                :title="'구역별'"
                :labels="[
                  '진단의학과',
                  '융복합',
                  '채혈실',
                  '간호과',
                  '원무과'
                ]" />
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-wrapper {
  display: flex;
  gap: 10px;
  &.column {
    flex-flow: column;
  }
}
.dashboard-box {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  .row-first {
    height: 540px;
  }
  .row-middle {
    height: 345px;
  }
  .row-last {
    //height: 355px;
  }
}
.dashboard-box-title {
  width: 100%;
  padding: 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  background-color: #fafcfc;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  color: #3d464d;
}

.dashboard-color {
  background-color: #000;
  color: #fff;
}
</style>
