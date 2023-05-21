<template>
  <!-- <BarChart v-bind="barChartProps" /> -->
  <div>
    <div class="legend-group">
      <span class="legend-circle max"> 최다</span>
      <span class="legend-circle smooth"> 원활</span>
      <span class="legend-circle min"> 최소</span>
    </div>
    <BarChart :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'HorizontalBarChart',
  components: { BarChart },
  setup() {
    const data1 = ref([30, 40, 60, 70, 5, 17]);
    const chartData = computed(() => ({
      labels: ['월', '화', '수', '목', '금', '토'],
      datasets: [
        {
          label: 'data',
          data: data1.value,
          backgroundColor: function (context: any) {
            if (context.raw >= 60) {
              return '#ff8787';
            } else if (context.raw >= 17) {
              return '#54d1cc';
            }
            return '#b8bdce';
          },
          borderColor: function (context: any) {
            if (context.raw >= 60) {
              return '#ff8787';
            } else if (context.raw >= 17) {
              return '#54d1cc';
            }
            return '#b8bdce';
          }
        }
      ]
    }));

    const chartOptions = {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Hide the legend
        }
      },
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            callback: function (val: string, index: number) {
              return '';
            }
          }
        },
        y: {
          border: {
            display: false
          },
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            color: function (context: any) {
              let value = data1.value[context.tick.value];
              if (value >= 60) {
                return '#ff8787';
              } else if (value >= 17) {
                return '#54d1cc';
              }
              return '#b8bdce';
            }
          }
        }
      }
    };

    return { chartData, chartOptions };
  }
});
</script>

<style lang="scss" scoped>
.legend-group {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  .legend-circle {
    &:before {
      content: '';
      display: inline-block;
      border-radius: 10px;
      width: 10px;
      height: 10px;
    }
    &.max:before {
      background-color: #ff8787;
    }
    &.smooth:before {
      background-color: #54d1cc;
    }
    &.min:before {
      background-color: #b8bdce;
    }
  }
}
</style>
