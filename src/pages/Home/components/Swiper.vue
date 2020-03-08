<template>
<!-- 此处加个div是因为防止用户加载页面时出现的抖动现象 -->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
// >>>是指穿透样式，如果加上这个的话就不受限于scoped
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.4%
  background #eee
  .swiper-img
    width 100%
</style>
