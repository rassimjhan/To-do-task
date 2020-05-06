<template>
   <button class="btn btn-danger btn-sm" v-if="showClearCompletedButton" @click="clearCompleted">Удалить выполненные</button>
</template>

<script>
export default {
  name: "todo-clear-completed",
  computed: {
    showClearCompletedButton() {
     return this.$store.getters.showClearCompletedButton
    }
  },
   methods: {
    clearCompleted() {
      this.$store.dispatch('clearCompleted')
    }
  }
};
</script>