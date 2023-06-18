<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { HalfDoughnutChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';
import type {
  QsWaitAvgTime,
  QsWaitAvgCount
} from '@/store/modules/dashboard/type';
import IconAccount from '@/assets/images/account.png';

export default defineComponent({
  name: 'DailyAvgWaitCnt',
  components: {
    HalfDoughnutChart
  },
  setup() {
    const store = useStore();
    const qs_wait_avg_cnt = ref([]);

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
        const result = await DashboardStoreModule.getDashboard({
          type,
          params: { date: new Date() }
        });

        const dataResult = result?.map(
          (data: QsWaitAvgTime | QsWaitAvgCount) => {
            return {
              ...data,
              label: `${data.pos_1} ${data.pos_2} ${data.pos_4}`,
              value: valueInfo(data)
            };
          }
        );

        qs_wait_avg_cnt.value = dataResult;
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData('qswaitavgcnt');
    });

    return {
      date: new Date(),
      qs_wait_avg_cnt,
      IconAccount
    };
  },
  methods: {}
});
</script>

<template>
  <div class="dashboard-box">
    <div class="dashboard-box-title">일 평균 대기인수</div>
    <HalfDoughnutChart
      :color="'#f1da80'"
      class="row-middle"
      :dataSource="qs_wait_avg_cnt"
      :imagePath="IconAccount" />
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
