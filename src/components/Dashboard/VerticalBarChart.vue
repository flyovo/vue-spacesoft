<template>
  <BarChart v-bind="barChartProps" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { BarChart, useBarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'VerticalBarChart',
  components: { BarChart },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);

    const chartData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
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

    const { barChartProps, barChartRef } = useBarChart({
      chartData
    });

    return { barChartProps, barChartRef };
  }
});
</script>
