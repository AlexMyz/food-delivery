<template>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Тануки</h3>
      </div>
      <div class="products-wrapper" id="goods-container">
        <div class="products-product" v-for="good in goodsArray" :key="good.id">
          <div class="products-product__image">
            <img :src="useGetUrl('goods', good.img)" alt="goods-1" />
          </div>
          <div class="products-product__description">
            <div class="products-product__description-row">
              <h5 class="products-product__description--name">{{ good.name }}</h5>
            </div>
            <div class="products-product__description-row">
              <p class="products-product__description-text">
                {{ good.text }}
              </p>
            </div>
            <div class="products-product__description-row">
              <div class="products-product__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="./img/icons/shopping-cart.svg" alt="cart" />
                </button>
                <span class="products-product__description-price">{{ good.price }} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodsArray } from '@/constans/goods';
import { useGetUrl } from '@/use/getUrl';
</script>

<style lang="scss" scoped></style>
