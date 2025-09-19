<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <RouterLink to="/" class="footer-logo logo">
          <img src="../assets/img/logo.png" alt="logo" />
        </RouterLink>
        <div class="footer-nav">
          <ul>
            <li>Ресторанам</li>
            <li>Курьерам</li>
            <li>Пресс-центр</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div class="footer-social">
          <img src="../assets/img/social/inst.png" alt="inst" />
          <img src="../assets/img/social/fb.png" alt="fb" />
          <img src="../assets/img/social/vk.png" alt="vk" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  min-height: 156px;
  padding: 60px 0;
}
.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px; 
  flex-wrap: wrap;
}
.footer-nav {
  flex: 1 1 auto;
}
.footer-nav ul {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}
.footer-nav ul li {
  list-style: none;
  font-size: 18px;
  color: #595959;
}
.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;
}
</style>
