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
    const data1 = ref([30, 40, 60, 70, 5]);
    const data2 = ref([34, 20, 80, 20, 21]);
    const data3 = ref([4, 31, 46, 94, 45]);
    const chartData = computed(() => ({
      labels: ['수납기', '제증명', '순번발권', '도착확인', '신체계측'],
      datasets: [
        {
          label: '2022 12월',
          data: data1.value,
          backgroundColor: '#ff8db0'
        },

        { label: '2023 1월', data: data2.value, backgroundColor: '#78bcee' },
        {
          label: '2023 2월',
          data: data3.value,
          backgroundColor: '#f8df7c'
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
