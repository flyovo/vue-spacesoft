<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { HorizontalBarChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';

export default defineComponent({
  name: 'DailyAvgCnt',
  components: {
    HorizontalBarChart
  },
  setup() {
    const store = useStore();
  },
  methods: {}
});
</script>

<template>
  <div class="dashboard-box">
    <div class="dashboard-box-title">월 평균 수납 건수</div>
    <HorizontalBarChart class="row-middle" />
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
