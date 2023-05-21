<template>
  <DoughnutChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'HalfDoughnutChart',
  props: {
    color: { type: String, required: false, default: '#78bcee' }
  },
  components: { DoughnutChart },
  setup(props) {
    const data = [30, 40, 17];
    const chartData = {
      labels: [
        '1층 원무과 수납 키오스크',
        '2층 채혈실 수납 키오스크',
        '1층 제증명'
      ],
      datasets: [
        {
          data,
          backgroundColor: function (context: any) {
            if (context.dataIndex === data.length - 1) {
              return '#e8edf0';
            }
            return props.color;
          },
          borderWidth: 0,
          borderSkipped: 'end'
        }
      ]
    };

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
