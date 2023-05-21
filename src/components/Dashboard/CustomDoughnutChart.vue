<template>
  <DoughnutChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'CustomDoughnutChart',
  components: { DoughnutChart },
  props: {
    title: { type: String, required: false, default: '' },
    labels: { type: [], required: false, default: [] }
  },
  setup(props) {
    const chartData = {
      labels: props.labels,
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            '#b2b6c6',
            '#fbb600',
            '#f9565b',
            '#44b968',
            '#47afff'
          ]
        }
      ]
    };

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
          text: props.title
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
          formatter: (val, ctx) => {
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
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
        }
      }
    };

    return { chartData, chartOptions };
  }
});
</script>
