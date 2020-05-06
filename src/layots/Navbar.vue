<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">To-do</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{name: 'Body'}" class="nav-link">Главная</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'todolist'}" class="nav-link">Список дел</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Выпадающее подменю</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Пункт 1</a>
            <a class="dropdown-item" href="#">Пункт 2</a>
            <a class="dropdown-item" href="#">Пункт 3</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav navbar-right">
        <router-link :to="{name: 'Login'}" class="btn btn-outline-success my-2 mr-2 my-sm-0">Вход</router-link>
        <router-link
          :to="{name: 'Register'}"
          class="btn btn-outline-warning my-2 mr-2 my-sm-0"
        >Регистрация</router-link>
        <a href="#" class="btn btn-outline-danger my-2 mr-2 my-sm-0">Выход</a>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>



