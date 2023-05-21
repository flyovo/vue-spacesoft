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
  <a-row :gutter="[20, 0]">
    <a-col>
      <a-row class="dashboard-box">
        <a-col :span="24">
          <VerticalBarChart />
        </a-col>
      </a-row>

      <a-row :gutter="[0, 10]" class="dashboard-box">
        <a-col :span="4">
          <HorizontalBarChart />
        </a-col>
        <a-col :span="4">
          <HalfDoughnutChart :color="'#78bcee'" />
        </a-col>
        <a-col :span="4">
          <HalfDoughnutChart :color="'#f1da80'" />
        </a-col>
        <a-col :span="12">
          <LineChart />
        </a-col>
      </a-row>

      <div class="dashboard-box">
        <a-row :gutter="[0, 24]">
          <a-col :span="8">
            <DoughnutChart />
          </a-col>
          <a-col :span="8">
            <DoughnutChart />
          </a-col>
          <a-col :span="8">
            <DoughnutChart />
          </a-col>
        </a-row>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>
.dashboard-box {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
</style>
