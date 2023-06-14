<template>
  <div>
    <div class="legend-group">
      <span class="legend-circle max"> 최다</span>
      <span class="legend-circle smooth"> 원활</span>
      <span class="legend-circle min"> 최소</span>
    </div>
    <BarChart :chartData="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

export default defineComponent({
  name: 'HorizontalBarChart',
  components: { BarChart },
  props: {
    dataSource: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setColorByTick = (context: any) => {
      let value = props.dataSource?.data[context.tick.value];
      return getTicksColor(value);
    };
    const getTicksColor = (value: number) => {
      if (value >= 15) return '#54d1cc';
      if (value >= 9) return '#ff8787';
      return '#b8bdce';
    };

    const chartData = ref({
      labels: [] as string[],
      datasets: [] as {
        label: string;
        data: any;
        backgroundColor: any;
        borderColor: any;
      }[]
    });

    const chartOptions = ref({
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: true,
      height: '100%',
      layout: {
        padding: {
          left: 40,
          top: 45,
          right: 29
        }
      },
      plugins: {
        legend: {
          display: false // Hide the legend
        },
        datalabels: {
          display: false
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
            color: setColorByTick
          }
        }
      }
    });

    watchEffect(async () => {
      chartData.value = {
        labels: props.dataSource?.labels,
        datasets: [
          {
            label: 'data',
            data: props.dataSource?.data,
            backgroundColor: props.dataSource?.data.map((value: number) =>
              getTicksColor(value)
            ),
            borderColor: props.dataSource?.data.map((value: number) =>
              getTicksColor(value)
            )
          }
        ]
      };

      chartOptions.value.scales.y.ticks.color = setColorByTick;
    });

    return { chartData, chartOptions };
  }
});
</script>

<style lang="scss" scoped>
.legend-group {
  display: flex;
  gap: 30px;
  padding-top: 10px;
  padding-left: 25px;
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
