<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeviceManagement',
  props: {
    name: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <div>device-management</div>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}
</style>
