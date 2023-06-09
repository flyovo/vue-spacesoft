<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { LineChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';
import dayjs from 'dayjs';
import type { ChartDataByMonth } from '@/store/modules/dashboard/type';

export default defineComponent({
  name: 'SolutionByOthers',
  props: {
    type: { type: String, required: true }
  },
  components: {
    LineChart
  },
  setup(props) {
    const store = useStore();
    const dataSource = ref({ labels: [], data: [], title: '' });

    const labelByType: { [key: string]: string } = {
      sunap_monthly_cnt: '수납기',
      cert_monthly_cnt: '제증명',
      qs_monthly_cnt: '순번발권',
      arrive_monthly_cnt: '도착확인',
      phy_monthly_cnt: '신체계측'
    };

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        const result = (await DashboardStoreModule.getDashboard({
          type: type,
          params: { date: new Date() }
        })) as ChartDataByMonth[];

        const labels = [];
        const data = [];

        for (const key in result[0]) {
          labels.push(
            dayjs(new Date()).add(Number(key), 'month').format('YYYY년 MM월')
          );
          data.push(result[0][key]);
        }

        dataSource.value.labels = [...labels].reverse();
        dataSource.value.data = [[...data].reverse()];
        dataSource.value.title = [labelByType[props.type]];
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData(props.type);
    });

    watchEffect(async () => {
      fetchData(props.type);
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
  <LineChart :dataSource="dataSource" />
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
