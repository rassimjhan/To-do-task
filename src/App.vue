<template>
  <div id="app">
    <navbar></navbar>
    <!-- <todo-list></todo-list> -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import TodoList from './components/TodoList'
import Navbar from "./layots/Navbar";

export default {
  name: "app",
  components: {
    Navbar
    // TodoList
  }
};
</script>


<style lang="scss" scoped>
</style>
