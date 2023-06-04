<template>
  <DoughnutChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import chroma from 'chroma-js';

Chart.register(...registerables);

export default defineComponent({
  name: 'CustomDoughnutChart',
  components: { DoughnutChart },
  props: {
    dataSource: {
      title: String,
      type: Object,
      required: true,
      dafault: { labels: [] as string[], data: [] }
    }
  },
  setup(props) {
    const chartData = ref({
      labels: [] as string[],
      datasets: [] as {
        label: string;
        data: any;
        backgroundColor: any;
        borderColor: any;
      }[]
    });

    const chartOptions = {
      height: '100%',
      layout: {
        padding: {
          left: 80,
          top: 35,
          right: 80,
          bottom: 35
        }
      },
      plugins: {
        legend: {
          display: false // Hide the legend
        },
        title: {
          display: true,
          text: props.dataSource?.title
        },
        datalabels: {
          display: true,
          color: '#fff',
          anchor: 'center', // Label anchor position
          align: 'center', // Label text alignment
          font: {
            size: 13, // Label font size
            weight: 300 // Label font weight
          },
          formatter: (
            val: any,
            ctx: {
              chart: { data: { labels: { [x: string]: any } } };
              dataIndex: string | number;
            }
          ) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return `${label}`;
          }
        }
      },
      responsive: true,
      maintainAspectRatio: true,
      elements: {
        center: {
          text: '90%',
          color: '#FF6384',
          fontStyle: 'Arial',
          sidePadding: 0 // Defualt is 20 (as a percentage)
        }
      }
    };

    const backgroundColorSet = [
      '#b2b6c6',
      '#fbb600',
      '#f9565b',
      '#44b968',
      '#47afff'
    ];

    watchEffect(async () => {
      chartData.value = {
        labels: props.dataSource?.labels,
        datasets: [
          {
            data: props.dataSource?.data,
            backgroundColor: backgroundColorSet
          }
        ]
      };
    });

    return { chartData, chartOptions };
  }
});
</script>
