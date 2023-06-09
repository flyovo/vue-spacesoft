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
    const data = ref([[], [], []]);
    const labels: [] = [];

    // Fetch the data and update the reactive properties
    const fetchData = async (type: string) => {
      try {
        return await DashboardStoreModule.getDashboard({
          type: type,
          params: { date: new Date() }
        });
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data on component mount
    onMounted(() => {
      Promise.all([
        fetchData('SunapMonthlyCnt'),
        fetchData('certMonthlyCnt'),
        fetchData('qsMonthlyCnt')
      ]).then((values) => {
        for (const key in values[0][0]) {
          labels.push(
            dayjs(new Date()).add(Number(key), 'month').format('YY년 MM월')
          );
        }

        values.map((value, index) => {
          for (const key in value[0]) {
            data.value[index].push(value[0][key]);
          }
        });

        dataSource.value.labels = [...labels].reverse();
        dataSource.value.data = data.value.map((d) => d.reverse());
        dataSource.value.title = ['본원', '소아', '암'];
      });
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
