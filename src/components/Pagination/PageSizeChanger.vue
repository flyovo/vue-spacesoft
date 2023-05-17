<script lang="ts">
import { CaretDownOutlined } from '@ant-design/icons-vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PageSizeChanger',
  props: {
    pageSizeOptions: {
      type: Array as PropType<number[]>,
      required: true,
      default: [15, 30, 50]
    },
    modelValue: {
      type: Number,
      required: true,
      default: 0
    }
  },
  components: { CaretDownOutlined },
  emits: ['update:modelValue'],
  methods: {
    handleClick(index: number) {
      this.$emit('update:modelValue', index);
    }
  }
});
</script>

<template>
  <a-dropdown :trigger="['click']">
    <a-button class="ant-dropdown-link" @click.prevent>
      {{ pageSizeOptions[modelValue] }} 개씩
      <CaretDownOutlined />
    </a-button>
    <template #overlay>
      <a-menu>
        <a-menu-item
          v-for="(pageSize, index) in pageSizeOptions"
          :key="index"
          @click="handleClick(index)">
          {{ pageSize }} 개씩
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
