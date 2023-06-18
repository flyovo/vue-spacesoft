<template>
  <DoughnutChart
    :chartData="chartData"
    :options="chartOptions"
    :plugins="chartPlugins"
    :height="250" />
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
import { defineComponent, PropType, ref, watchEffect } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import chroma from 'chroma-js';

export default defineComponent({
  name: 'HalfDoughnutChart',
  props: {
    color: { type: String, required: false, default: '#78bcee' },
    dataSource: { type: Object, required: true, default: () => [] },
    imagePath: {
      type: String as PropType<string>,
      required: true
    }
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
          top: 10,
          right: 20,
          bottom: 10
        }
      },
      rotation: 235,
      circumference: 250,
      cutout: '80%',
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

    const doughnutLabel = {
      id: 'halfDoughnutLabel',
      afterDatasetsDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        const fontSize = Number((height / 150).toFixed(2));
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const textSub = `${data.value.reduce(
          (a: number, b: number) => a + b,
          0
        )}대`;
        const positionX = width / 2;
        const positionY = height / 1.85;

        ctx.font = fontSize + 'em sans-serif';
        ctx.fillText(textSub, positionX, positionY + 30);

        const image = new Image();
        const imageWidth = 70; // Set the desired width
        const imageHeight = 90;

        image.onload = function () {
          // Image loaded, draw it on the canvas
          ctx.drawImage(
            image,
            positionX - imageWidth / 2,
            positionY - imageHeight / 2 - 20,
            imageWidth,
            imageHeight
          );
        };
        image.src = props.imagePath;

        ctx.restore();
        ctx.save();
      }
    };
    const chartPlugins = [doughnutLabel];

    return {
      chartData,
      chartOptions,
      chartPlugins,
      labels,
      data,
      dataColorSet
    };
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
