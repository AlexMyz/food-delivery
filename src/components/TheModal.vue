<template>
  <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header">
        <h2 class="cart-modal__header--title">Корзина</h2>
        <span class="cart-modal__header--close" @click="closeModal()">
          <img src="../assets/img/icons/close.svg" alt="close" />
        </span>
      </div>
      <div class="cart-modal__body">
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <div class="cart-item__controls--count">
              <button class="btn btn-outline">-</button>
              <span>1</span>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <div class="cart-item__controls--count">
              <button class="btn btn-outline">-</button>
              <span>1</span>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <div class="cart-item__controls--count">
              <button class="btn btn-outline">-</button>
              <span>1</span>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <div class="cart-item__controls--count">
              <button class="btn btn-outline">-</button>
              <span>1</span>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <div class="cart-item__controls--count">
              <button class="btn btn-outline">-</button>
              <span>1</span>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-modal__footer">
        <div class="cart-modal__footer--price">1250 ₽</div>
        <div class="cart-modal__footer--controls">
          <button class="btn btn-primary">Оформить заказ</button>
          <button class="btn btn-outline">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {isOpen} = defineProps({isOpen: Boolean})
const emit = defineEmits(['toggleModal'])
const closeModal = () => emit('toggleModal')
</script>

<style scoped>
.cart-modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  justify-content: center;
  align-items: center;
}
.cart-modal__overlay.open {
  display: flex;
}
.cart-modal {
  border-radius: 5px;
  width: 100%;
  max-width: 780px;
  background: #fff;
  padding: 41px 45px;
}
.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 45px 0;
}
.cart-modal__header--title {
  font-weight: 700;
  font-size: 36px;
  color: #000;
}
.cart-modal__header--close {
  cursor: pointer;
}
.cart-modal__body {
  margin: 0 0 50px 0;
}
.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
}
.cart-modal__footer--price {
  font-weight: 700;
  font-size: 20px;
  color: #fafafa;
  padding: 15px 20px;
  border-radius: 5px;
  background: #262626;
}
.cart-modal__footer--controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px 0;
}
.cart-item__title {
  font-size: 18px;
  line-height: 178%;
  color: #000;
}
.cart-item__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 45px;
}
.cart-item__controls--price {
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: #000;
}
.cart-item__controls--count {
  display: flex; 
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  line-height: 150%;
  color: #000;
}
.cart-item__controls--count button {
  border: 1px solid #1890ff;
  color: #1890ff;
}
</style>
