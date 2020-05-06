<template>
  <div class="row" style="margin-top: 80px">
    <div class="col-md-12">
      <form class="form-signin" action="/login" method="POST">
        <h1 class="h3 mb-3 font-weight-normal text-center">
          <span>Вход</span>
        </h1>
        <label for="inputUsername" class="sr-only">Имя пользователя</label>
        <input
          type="text"
          id="inputUsername"
          class="form-control"
          name="username"
          placeholder="Username"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">Пароль</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          name="password"
          placeholder="Password"
          required
        />
        <button class="btn btn-lg btn-success btn-block" type="submit">Войти</button>
      </form>
      <form class="form-signin">
        <router-link :to="{name: 'Body'}">Назад</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>