<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { DoughnutChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';

export default defineComponent({
  name: 'KioskByType',
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
    :title="'유형별'"
    :labels="['진료대기', '제증명', '복합기', '도착확인', '번호표']" />
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
