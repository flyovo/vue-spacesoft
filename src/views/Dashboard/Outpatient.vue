<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { LineChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'Outpatient',
  components: {
    LineChart
  },
  setup() {
    const store = useStore();
    const dataSource = ref({ labels: [], data: [] });

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        const result = await DashboardStoreModule.getDashboard({
          type: type,
          date: new Date()
        });

        const labels: [] = [];
        const data: [] = [];

        for (const key in result[0]) {
          labels.push(
            dayjs(new Date()).add(Number(key), 'month').format('YYYY년 MM월')
          );
          data.push(result[0][key]);
        }

        dataSource.value = { labels: labels.reverse(), data: data.reverse() };
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData('qs_monthly_cnt');
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
  <LineChart class="row-first" :dataSource="dataSource" />
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
