<template>
  <LineChart :chart-data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'CustomLineChart',
  components: { LineChart },
  data() {},
  setup() {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const data1 = [300, 370, 400, 420, 450, 460, 470, 480, 490, 500, 510, 520];
    const data2 = [240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350];
    const data3 = [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195];

    const chartData = {
      labels: labels.map((label) => `${label}월`),
      datasets: [
        {
          label: '본원',
          data: data1,
          backgroundColor: '#34638b',
          borderColor: '#34638b',
          borderWidth: 1,
          pointRadius: 4
        },
        {
          label: '소아',
          data: data2,
          backgroundColor: '#338fd2',
          borderColor: '#338fd2',
          borderWidth: 1,
          pointRadius: 4
        },
        {
          label: '암',
          data: data3,
          backgroundColor: '#abd9f3',
          borderColor: '#abd9f3',
          borderWidth: 1,
          pointRadius: 4
        }
      ]
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      height: '100%',
      plugins: {
        legend: {
          position: 'top',
          align: 'start',
          labels: {
            usePointStyle: true,
            pointStyleWidth: 10,
            maxHeight: 10
          }
        }
      },
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            display: false
          }
        },
        y: {
          min: 0,
          max: 1000
        }
      }
    };

    return { chartData, chartOptions };
  }
});
</script>

<style lang="scss"></style>
