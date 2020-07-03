<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      pagination: {
        // 如果需要分页器
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
