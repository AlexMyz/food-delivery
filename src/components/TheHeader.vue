<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <RouterLink to="/" class="header-logo logo">
          <img src="../assets/img/logo.png" alt="logo" />
        </RouterLink>
        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="../assets/img/icons/user.png" alt="user" />
            Войти
          </button>
          <button class="btn btn-outline" @click="openModal">
            <img src="../assets/img/icons/cart.png" alt="cart" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['toggleModal'])
const openModal = () => emit('toggleModal')
</script>

<style scoped>
.header {
  min-height: 124px;
  padding: 44px 0;
}
.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
.btn {
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 2px;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
}
.btn-primary {
  color: #fafafa;
  background-color: #1890ff;
  border: 1px solid #1890ff;
}
.btn-outline {
  color: #595959;
  background-color: #fff;
  border: 1px solid #d9d9d9;
}
</style>
