<template>
    <div>
        <button class="btn btn-success mr-2 btn-sm" :class="{ active: filter == 'all' }" @click="changeFilter('all')">Все</button>
        <button class="btn btn-primary mr-2 btn-sm" :class="{ active: filter == 'active' }" @click="changeFilter('active')">Активные</button>
        <button class="btn btn-primary btn-sm" :class="{ active: filter == 'completed' }" @click="changeFilter('completed')">Выполненные</button>
      </div>
</template>

<script>
export default {
  name: "todo-filtered",
  computer: {
    filter() {
      return this.$store.getters.filter
    }
  },
   methods: {
   changeFilter(filter) {
     this.$store.dispatch('updateFilter', filter)
    }
  }
};
</script>