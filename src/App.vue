<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ko_KR from 'ant-design-vue/lib/locale-provider/ko_KR';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const spinning = ref<boolean>(false);

    const changeSpinning = () => {
      spinning.value = !spinning.value;
    };

    return {
      ko_KR,
      spinning,
      changeSpinning
    };
  }
});
</script>

<template>
  <a-locale-provider :locale="ko_KR">
    <a-spin tip="Loading..." :spinning="spinning">
      <RouterView />
    </a-spin>
  </a-locale-provider>
</template>

<style lang="scss">
.ant-spin-nested-loading {
  > div:first-child {
    width: 100%;
    height: 100%;
    display: contents;
  }

  > div > .ant-spin {
    position: fixed !important;
    max-height: none !important;
  }
}
</style>
