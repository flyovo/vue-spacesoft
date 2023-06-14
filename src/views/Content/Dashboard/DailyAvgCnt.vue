<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { HorizontalBarChart } from '@/components/Dashboard';
import { StatisticsStoreModule } from '@/store/modules/statistics/store';

export default defineComponent({
  name: 'DailyAvgCnt',
  components: {
    HorizontalBarChart
  },
  setup() {
    const store = useStore();
    const dataSource = ref({
      labels: ['월', '화', '수', '목', '금', '토'],
      data: [0, 0, 0, 0, 0, 0]
    });

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        const result = await StatisticsStoreModule.getStatistics({
          type: type,
          date: new Date()
        });

        const data = [];

        for (const value of dataSource.value.labels) {
          data.push(Number(result[`${value}건수`]));
        }

        dataSource.value.data = data;
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData('getWeekSunapCnt');
    });

    return {
      date: new Date(),
      dataSource
    };
  },
  methods: {}
});
</script>

<template>
  <div class="dashboard-box">
    <div class="dashboard-box-title">월 평균 수납 건수</div>
    <HorizontalBarChart class="row-middle" :dataSource="dataSource" />
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
