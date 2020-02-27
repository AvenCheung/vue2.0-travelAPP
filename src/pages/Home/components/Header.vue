<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  line-height .85rem
  background #00bcd0
  color #fff

.header-left
  width .64rem
  float left

// 搜索框
.header-input
  flex 1
  color #ccc
  height .64rem
  line-height .64rem
  margin-top .12rem
  margin-left .2rem
  background-color #ffffff
  border-radius .1rem

.header-right
  width 1.24rem
  float right
  text-align center

</style>
