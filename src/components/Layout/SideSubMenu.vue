<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import type { MenuItem } from './constants';

export default defineComponent({
  name: 'Statistics',
  components: { MenuItem },
  props: {
    menu: {
      type: MenuItem,
      required: true
    }
  },
  setup() {
    const state = reactive({
      dataSource: data,
      columns: columns,
      currentPage: 1,
      pageSize: 10
    });

    const selectedDuration = ref('all');
    const selectedType = ref('all');

    return { ...toRefs(state), selectedDuration, selectedType };
  },
  methods: {
    handlePageChange(current: number) {
      this.currentPage = current;
    }
  }
});
</script>

<template>
  <a-menu-item v-if="!menu?.children">
    <component
      v-if="menu.icon"
      :is="menu.icon"
      :style="{ marginRight: '10px' }" />
    <router-link :to="menu.key">{{ menu.label }}</router-link>
  </a-menu-item>
  <a-sub-menu v-else :key="menu.key">
    <template #title>
      <component
        v-if="menu.icon"
        :is="menu.icon"
        :style="{ marginRight: '10px' }" />
      {{ menu.label }}
    </template>
    <!-- <a-menu-item
          v-for="child in menu.children"
          :key="child.key"
          :style="{
            color: '#6c7780',
            fontSize: '14px'
          }">
          <router-link :to="child.key">{{ child.label }}</router-link>
        </a-menu-item> -->
    <a-sub-menu
      v-for="child in menu.children"
      :key="child.key"
      :style="{
        color: '#6c7780',
        fontSize: '14px'
      }">
      <template #title>
        <component
          v-if="child.icon"
          :is="child.icon"
          :style="{ marginRight: '10px' }" />
        {{ child.label }}
      </template>
      <a-menu-item
        v-for="child1 in child.children"
        :key="child1.key"
        :style="{
          color: '#6c7780',
          fontSize: '14px'
        }">
        <router-link :to="child1.key">{{ child1.label }}</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-sub-menu>
</template>

<style lang="scss" scoped></style>
