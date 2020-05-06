<template>
    <div>
        <button :class="{ active: filter == 'all' }" @click="changeFilter('all')">Все</button>
        <button :class="{ active: filter == 'active' }" @click="changeFilter('active')">Активные</button>
        <button :class="{ active: filter == 'completed' }" @click="changeFilter('completed')">Выполненные</button>
      </div>
</template>

<script>
export default {
  name: "todo-filtered",
  data() {
    return {
      'filter': 'all',
    }
  },
   methods: {
   changeFilter(filter) {
      this.filter = filter
      this.$eventBus.$emit('filterChanged', filter)
    }
  }
};
</script>