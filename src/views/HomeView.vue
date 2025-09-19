<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис <br />
          доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
        </p>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Рестораны</h3>
        <input type="text" class="products-header--searcch" placeholder="Поиск блюд и ресторанов" />
      </div>
      <div class="products-wrapper" id="rests-container">
        <RouterLink :to="`/rest?id=${rest.id}`" class="products-product" v-for="rest in restsArray" :key="rest.id">
          <div class="products-product__image">
            <img :src="useGetUrl('rests', rest.img)" alt="rest-1" />
          </div>
          <div class="products-product__description">
            <div class="products-product__description-row">
              <h4 class="products-product__description--title">{{ rest.title }}</h4>
              <div class="products-product__description--bage">{{ rest.time }} мин</div>
            </div>
            <div class="products-product__description-row">
              <div class="products-product__description-info">
                <div class="products-product__description--raiting">
                  <img src="./img/icons/star.svg" alt="star" />
                  {{ rest.rating }}
                </div>
                <div class="products-product__description--price">От {{ rest.price }} ₽</div>
                <div class="products-product__description--group">{{ rest.type}}</div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { restsArray } from '@/constans/rests';
import { useGetUrl } from '@/use/getUrl';
</script>

<style lang="scss" scoped></style>
