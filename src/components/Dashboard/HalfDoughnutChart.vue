<template>
  <DoughnutChart :chartData="chartData" :options="chartOptions" :height="250" />
  <div class="custom-legend">
    <div v-for="(label, index) in labels" :key="index">
      <div class="label">
        <div>
          <span
            class="tile"
            :style="{
              backgroundColor: dataColorSet[index % dataColorSet.length]
            }"></span>
          {{ label }}
        </div>
        <div>{{ data[index] }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import chroma from 'chroma-js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

export default defineComponent({
  name: 'HalfDoughnutChart',
  props: {
    color: { type: String, required: false, default: '#78bcee' },
    dataSource: { type: Object, required: true, default: () => [] }
  },
  components: { DoughnutChart },
  setup(props) {
    const color = props.color.toString();
    const chartData = ref({ labels: [] as string[], datasets: [] as any[] });
    const labels = ref([]);
    const data = ref([]);
    const dataColorSet = ref(
      chroma.scale([color, '#f7faff']).mode('lab').colors(5)
    );

    watchEffect(async () => {
      const resolvedDataSource = await props.dataSource;

      labels.value = resolvedDataSource.map(
        (data: { label: string }) => data.label
      );
      data.value = resolvedDataSource.map((data: { value: string }) => {
        return Number(data.value);
      });

      chartData.value = {
        labels: labels.value,
        datasets: [
          {
            data,
            backgroundColor: dataColorSet,
            borderWidth: 0,
            borderSkipped: 'end'
          }
        ]
      };
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      height: 20,
      layout: {
        padding: {
          left: 20,
          top: 0,
          right: 20,
          bottom: 0
        }
      },
      rotation: -90,
      circumference: 180,
      plugins: {
        legend: {
          position: 'bottom',
          display: false
        },
        datalabels: {
          display: false
        }
      }
    };

    return { chartData, chartOptions, labels, data, dataColorSet };
  }
});
</script>

<style lang="scss" scoped>
.custom-legend {
  padding: 0 20px;
  font-size: 12px;
  padding-bottom: 10px;

  .label {
    display: flex;
    justify-content: space-between;

    .tile {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      display: inline-block;
      margin-right: 5px;
    }
  }
}
</style>
