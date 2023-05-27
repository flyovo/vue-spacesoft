<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { DoughnutChart } from '@/components/Dashboard';
import { DashboardStoreModule } from '@/store/modules/dashboard/store';

export default defineComponent({
  name: 'KioskByArea',
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
    :title="'구역별'"
    :labels="['진단의학과', '융복합', '채혈실', '간호과', '원무과']" />
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
