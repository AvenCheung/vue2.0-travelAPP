<template>
<!-- 此处加个div是因为防止用户加载页面时出现的抖动现象 -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1508/f8/cadd4e229d3402.jpg_r_640x214_c38fb221.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
</style>
