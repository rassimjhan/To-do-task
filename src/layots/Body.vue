<template>
  <div>
    <div class="container mt-4">
      <div class="header-img rounded mb-4" style="margin-top: 20px"></div>
      <div class="row row-cols-1 row-cols-md-2" style="display: flex; flex-wrap: wrap;">
        <div class="col mb-4">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1522199670076-2852f80289c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">5 способов побороть лень</h5>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Как правильно писать код</h5>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Успеть все!</h5>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=707&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Работа в команде</h5>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Body"
};
</script>

<style lang="scss" scoped>
.header-img {
  width: 100%;
  height: 45vh;
  background-image: url(../assets/todolist1.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>