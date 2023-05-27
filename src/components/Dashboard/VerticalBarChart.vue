<template>
  <BarChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import { BarChart, useBarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'VerticalBarChart',
  props: {
    dataSource: { type: Object, required: true, dafault: () => [] }
  },
  components: { BarChart },
  setup(props) {
    const chartData = ref([]); // Initialize chartData as null

    // Wait for the dataSource Promise to resolve
    watchEffect(async () => {
      const resolvedDataSource = await props.dataSource;

      const twoMonthAgo = resolvedDataSource.data.twoMonthAgo;
      const lastMonth = resolvedDataSource.data.lastMonth;
      const thisMonth = resolvedDataSource.data.thisMonth;

      chartData.value = {
        labels: ['수납기', '제증명', '순번발권', '도착확인', '신체계측'],
        datasets: [
          {
            label: resolvedDataSource.label[0],
            data: twoMonthAgo,
            backgroundColor: '#ff8db0'
          },
          {
            label: resolvedDataSource.label[1],
            data: lastMonth,
            backgroundColor: '#78bcee'
          },
          {
            label: resolvedDataSource.label[2],
            data: thisMonth,
            backgroundColor: '#f8df7c'
          }
        ]
      };
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      height: '100%',
      plugins: {
        legend: {
          position: 'top',
          align: 'start',
          fullSize: true
        }
      }
    };

    // const { barChartProps, barChartRef } = useBarChart({
    //   chartData
    // });

    return { chartData, chartOptions };
  }
});
</script>
