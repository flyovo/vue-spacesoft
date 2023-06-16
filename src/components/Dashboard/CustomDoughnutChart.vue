<template>
  <DoughnutChart
    :chartData="chartData"
    :options="chartOptions"
    :plugins="chartPlugins" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { DoughnutChart } from 'vue-chart-3';

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
      responsive: true,
      maintainAspectRatio: true,
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
          color: '#fff',
          anchor: 'center',
          align: 'center',
          font: {
            size: 13,
            weight: 350
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
      }
    };

    const doughnutLabel = {
      id: 'doughnutLabel',
      afterDatasetsDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        ctx.restore();

        const fontSize = Number((height / 150).toFixed(2));
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const textTitle = `${props.dataSource?.data.reduce(
          (a: number, b: number) => a + b,
          0
        )}대`;
        const textTitleX = width / 2;
        const textTitleY = height / 1.85;

        const textSub = '운영중';
        const textSubX = width / 2;
        const textSubY = height / 1.85 + 30;

        ctx.font = fontSize + 'em sans-serif';
        ctx.fillText(textTitle, textTitleX, textTitleY);

        ctx.font = fontSize / 2 + 'em sans-serif';
        ctx.fillText(textSub, textSubX, textSubY);

        ctx.save();
      }
    };
    const chartPlugins = [doughnutLabel];

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

    return { chartData, chartOptions, chartPlugins };
  }
});
</script>
