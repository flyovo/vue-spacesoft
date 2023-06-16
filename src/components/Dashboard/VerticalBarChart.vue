<template>
  <div class="custom-legend">
    <div v-for="(label, index) in dataSource.labels" :key="index">
      <div class="label">
        <div>
          <span
            class="tile"
            :style="{
              backgroundColor: dataColorSet[index]
            }"></span>
          {{ label }}
        </div>
      </div>
    </div>
  </div>
  <BarChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { BarChart } from 'vue-chart-3';

export default defineComponent({
  name: 'VerticalBarChart',
  props: {
    dataSource: { type: Object, required: true }
  },
  components: { BarChart },
  setup(props) {
    const chartData = ref({
      labels: [
        '수납기',
        '제증명',
        '순번발권',
        '도착확인',
        '신체계측'
      ] as string[],
      datasets: [] as {
        label: any;
        data: any;
        backgroundColor: string;
      }[]
    });

    const dataColorSet = ref(['#ff8db0', '#78bcee', '#f8df7c']);

    // Wait for the dataSource Promise to resolve
    watchEffect(async () => {
      const resolvedDataSource = await props.dataSource;

      const twoMonthAgo = resolvedDataSource.data?.twoMonthAgo || [];
      const lastMonth = resolvedDataSource.data?.lastMonth || [];
      const thisMonth = resolvedDataSource.data?.thisMonth || [];

      chartData.value.datasets = [
        {
          label: resolvedDataSource.labels && resolvedDataSource.labels[0],
          data: twoMonthAgo,
          backgroundColor: '#ff8db0'
        },
        {
          label: resolvedDataSource?.labels && resolvedDataSource?.labels[1],
          data: lastMonth,
          backgroundColor: '#78bcee'
        },
        {
          label: resolvedDataSource?.labels && resolvedDataSource?.labels[2],
          data: thisMonth,
          backgroundColor: '#f8df7c'
        }
      ];
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      height: '100%',
      barPercentage: 0.6,
      categoryPercentage: 0.6,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: 'black',
          anchor: 'end',
          align: 'top',
          formatter: function (value: string) {
            return value;
          }
        }
      },
      scales: {
        x: {
          display: false,
          gridLines: { display: false }
        }
      }
    };

    return { chartData, chartOptions, dataColorSet };
  }
});
</script>

<style lang="scss" scoped>
.custom-legend {
  display: flex;
  padding: 10px 20px;
  font-size: 12px;
  gap: 20px;

  .label {
    display: flex;
    justify-content: space-between;

    .tile {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      display: inline-block;
      margin-right: 5px;
    }
  }
}
</style>
