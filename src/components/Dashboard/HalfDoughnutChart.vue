<template>
  <DoughnutChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'HalfDoughnutChart',
  props: {
    color: { type: String, required: false, default: '#78bcee' },
    dataSource: { type: Object, required: true, default: () => [] }
  },
  components: { DoughnutChart },
  setup(props) {
    const color = props.color.toString(); // Convert color to a string
    const chartData = ref([]); // Initialize chartData as an empty array

    // Wait for the dataSource Promise to resolve
    watchEffect(async () => {
      const resolvedDataSource = await props.dataSource;
      const data = resolvedDataSource.map((data: { value: string }) => {
        return Number(data.value);
      });

      chartData.value = {
        labels: resolvedDataSource.map((data: { label: string }) => data.label),
        datasets: [
          {
            data,
            backgroundColor: props.dataSource.map((data, index) =>
              index === data.length - 1 ? '#e8edf0' : color
            ),
            borderWidth: 0,
            borderSkipped: 'end'
          }
        ]
      };
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      height: '100%',
      layout: {
        padding: {
          left: 25,
          top: 25,
          right: 25,
          bottom: 25
        }
      },
      rotation: -90,
      circumference: 180,
      plugins: {
        legend: {
          position: 'bottom',
          align: 'start',
          fullSize: true
        }
      }
    };

    return { chartData, chartOptions };
  }
});
</script>
