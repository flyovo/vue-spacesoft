<template>
  <div class="custom-legend">
    <div v-for="(label, index) in dataSource.title" :key="index">
      <div class="label">
        <div>
          <span
            class="tile"
            :style="{
              backgroundColor: dataColorSet[index].backgroundColor
            }"></span>
          {{ label }}
        </div>
      </div>
    </div>
  </div>
  <LineChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { LineChart } from 'vue-chart-3';

export default defineComponent({
  name: 'CustomLineChart',
  components: { LineChart },
  props: {
    dataSource: {
      type: Object,
      required: true,
      dafault: { labels: [], data: [], title: [] }
    }
  },
  setup(props) {
    const chartData = ref({ labels: [] as string[], datasets: [] });
    const dataColorSet = ref([
      { backgroundColor: '#34638b', borderColor: '#34638b' },
      { backgroundColor: '#338fd2', borderColor: '#338fd2' },
      { backgroundColor: '#abd9f3', borderColor: '#abd9f3' }
    ]);

    watchEffect(async () => {
      chartData.value = {
        labels: props.dataSource?.labels,
        datasets: props.dataSource?.data?.map((data: [], index: number) => {
          return {
            label: props.dataSource?.title[index],
            data: data,
            borderWidth: 1,
            pointRadius: 4,
            ...dataColorSet.value[index]
          };
        })
      };
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      height: '100%',
      layout: {
        padding: {
          left: 32,
          right: 36,
          bottom: 32
        }
      },
      plugins: {
        legend: {
          display: false
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
            display: false
          }
        }
      }
    };

    return { chartData, chartOptions, dataColorSet };
  }
});
</script>

<style lang="scss" scoped>
.custom-legend {
  display: flex;
  padding: 10px 20px;
  font-size: 12px;
  gap: 20px;

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
