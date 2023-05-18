<!-- <template>
  <DoughnutChart v-bind="doughnutChartProps" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);
export default defineComponent({
  name: 'DoughnutChart',
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const dataLabels = ref(['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre']);
    const toggleLegend = ref(true);

    const testData = computed<ChartData<'doughnut'>>(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED'
          ]
        }
      ]
    }));

    const options = computed<ChartOptions<'doughnut'>>(() => ({
      scales: {
        myScale: {
          type: 'logarithmic',
          position: toggleLegend.value ? 'left' : 'right'
        }
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? 'top' : 'bottom'
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options
    });

    return {
      // testData,
      // options,
      doughnutChartRef,
      doughnutChartProps
    };
  }
});
</script> -->

<template>
  <DoughnutChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'CustomDoughnutChart',
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED'
          ]
        }
      ]
    };

    return { testData };
  }
});
</script>
