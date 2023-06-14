<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { VerticalBarChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';
import dayjs from 'dayjs';
import type { ChartDataByMonth } from '@/store/modules/dashboard/type';

export default defineComponent({
  name: 'SolutionByOverall',
  components: {
    VerticalBarChart
  },
  setup() {
    const store = useStore();

    const totalMonthCount = 3;

    const overall_data = ref({
      labels: [] as string[],
      data: { twoMonthAgo: [], lastMonth: [], thisMonth: [] }
    });
    const sunap_monthly_cnt = ref([]);
    const cert_monthly_cnt = ref([]);
    const qs_monthly_cnt = ref([]);
    const arrive_monthly_cnt = ref([]);
    const phy_monthly_cnt = ref([]);

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      return (await DashboardStoreModule.getDashboard({
        type,
        params: { date: new Date() }
      })) as ChartDataByMonth[];
    };

    // Fetch the data on component mount
    onMounted(() => {
      Promise.all([
        fetchData('SunapMonthlyCnt'),
        fetchData('certMonthlyCnt'),
        fetchData('qsMonthlyCnt'),
        fetchData('arriveMonthlyCnt'),
        fetchData('phyMonthlyCnt')
      ]).then((values) => {
        const thisMonth = totalMonthCount - totalMonthCount;
        sunap_monthly_cnt.value = values[0][0];
        cert_monthly_cnt.value = values[1][0];
        qs_monthly_cnt.value = values[2][0];
        arrive_monthly_cnt.value = values[3][0];
        phy_monthly_cnt.value = values[4][0];

        overall_data.value = {
          labels: Array.from(Array(totalMonthCount), (_, index) =>
            dayjs(new Date())
              .subtract(totalMonthCount - 1 - index, 'month')
              .format('YY년 MM월')
          ),
          data: {
            twoMonthAgo: [
              sunap_monthly_cnt.value[thisMonth - 2],
              cert_monthly_cnt.value[thisMonth - 2],
              qs_monthly_cnt.value[thisMonth - 2],
              arrive_monthly_cnt.value[thisMonth - 2],
              phy_monthly_cnt.value[thisMonth - 2]
            ],
            lastMonth: [
              sunap_monthly_cnt.value[thisMonth - 1],
              cert_monthly_cnt.value[thisMonth - 1],
              qs_monthly_cnt.value[thisMonth - 1],
              arrive_monthly_cnt.value[thisMonth - 1],
              phy_monthly_cnt.value[thisMonth - 1]
            ],
            thisMonth: [
              sunap_monthly_cnt.value[thisMonth],
              cert_monthly_cnt.value[thisMonth],
              qs_monthly_cnt.value[thisMonth],
              arrive_monthly_cnt.value[thisMonth],
              phy_monthly_cnt.value[thisMonth]
            ]
          }
        };
      });
    });

    return {
      date: new Date(),
      overall_data
    };
  },
  methods: {}
});
</script>

<template>
  <VerticalBarChart :dataSource="overall_data" />
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
