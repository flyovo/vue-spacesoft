<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { DoughnutChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';

export default defineComponent({
  name: 'KioskByFloor',
  components: {
    DoughnutChart
  },
  setup() {
    const store = useStore();
  },
  methods: {}
});
</script>

<template>
  <DoughnutChart
    :title="'층별'"
    :labels="['5층', '4층', '3층', '2층', '1층']" />
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
