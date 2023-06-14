<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { DoughnutChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';
import type { OpAndPos } from '@/store/modules/dashboard/type';

export default defineComponent({
  name: 'KioskByFloor',
  components: {
    DoughnutChart
  },
  setup() {
    const store = useStore();
    const dataSource = ref({ labels: [], data: [], title: '유형별' });

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        const result = (await DashboardStoreModule.getDashboard({
          type,
          params: { date: new Date() }
        })) as OpAndPos[];

        const labels: string[] = [];
        const data: number[] = [];

        for (const key in result[0]) {
          if (Number(result[0][key]) > 0) {
            labels.push(key);
            data.push(result[0][key]);
          }
        }

        dataSource.value.labels = [...labels];
        dataSource.value.data = [...data];
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      fetchData('pos1Cnt');
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
  <DoughnutChart :dataSource="dataSource" />
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
