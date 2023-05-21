<script lang="ts">
import { defineComponent } from 'vue';
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
  }
});
</script>

<template>
  <div class="dashboard-wrapper column">
    <a-row :gutter="[0, 10]">
      <a-col :span="24" class="dashboard-box">
        <div class="dashboard-box-title">M</div>
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
            <a-col :span="8">
              <DoughnutChart class="row-last" />
            </a-col>
            <a-col :span="8">
              <DoughnutChart class="row-last" />
            </a-col>
            <a-col :span="8">
              <DoughnutChart class="row-last" />
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
  > .row-first {
    height: 540px;
  }
  > .row-middle {
    height: 345px;
  }
  > .row-last {
    height: 355px;
  }

  > div:nth-child(2) {
    padding: 10px 24px 24px 24px;
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
