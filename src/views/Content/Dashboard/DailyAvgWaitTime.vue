<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { HalfDoughnutChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';
import type {
  QsWaitAvgTime,
  QsWaitAvgCount
} from '@/store/modules/dashboard/type';

export default defineComponent({
  name: 'DailyAvgWaitTime',
  components: {
    HalfDoughnutChart
  },
  setup() {
    const store = useStore();
    const qs_wait_avg_time = ref([]);

    const valueInfo = (data: QsWaitAvgTime | QsWaitAvgCount) => {
      if (data.hasOwnProperty('평균대기인수')) {
        return data.평균대기인수;
      }
      if (data.hasOwnProperty('평균대기시간')) {
        return data.평균대기시간;
      }
    };

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        const result = (await DashboardStoreModule.getDashboard({
          type,
          params: { date: new Date() }
        })) as QsWaitAvgTime[];

        const dataResult = result?.map(
          (data: QsWaitAvgTime | QsWaitAvgCount) => {
            return {
              ...data,
              label: `${data.pos_1} ${data.pos_2} ${data.pos_4}`,
              value: valueInfo(data)
            };
          }
        );

        qs_wait_avg_time.value = dataResult;
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData('qswaitavgtime');
    });

    return {
      date: new Date(),
      qs_wait_avg_time
    };
  },
  methods: {}
});
</script>

<template>
  <div class="dashboard-box">
    <div class="dashboard-box-title">일 평균 대기시간</div>
    <HalfDoughnutChart
      :color="'#78bcee'"
      class="row-middle"
      :dataSource="qs_wait_avg_time" />
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
