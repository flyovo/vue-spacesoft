<template>
  <LineChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'CustomLineChart',
  components: { LineChart },
  props: {
    dataSource: {
      type: Object,
      required: true,
      dafault: { labels: [], data: [] }
    }
  },
  data() {},
  setup(props) {
    const chartData = ref({ labels: [], datasets: [] });
    const dataColors = [
      { backgroundColor: '#34638b', borderColor: '#34638b' },
      { backgroundColor: '#338fd2', borderColor: '#338fd2' },
      { backgroundColor: '#abd9f3', borderColor: '#abd9f3' }
    ];

    watchEffect(async () => {
      chartData.value = {
        labels: props.dataSource?.labels,
        datasets: props.dataSource?.data?.map((data: [], index: number) => {
          return {
            label: props.dataSource?.title,
            data: data,
            borderWidth: 1,
            pointRadius: 4,
            ...dataColors[index]
          };
        })
      };
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      height: '100%',
      layout: {
        padding: {
          left: 32,
          right: 36,
          bottom: 32
        }
      },
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
        }
      }
    };

    return { chartData, chartOptions };
  }
});
</script>

<style lang="scss"></style>
