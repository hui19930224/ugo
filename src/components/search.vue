<template>
  <!-- 头部区域 -->
  <div class="header">
    <div class="input">
      <input type="text"
             placeholder="搜索">
    </div>
    <div class="result"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
/* 头部区域 */
.header {
  width: 100%;
  background-color: #ea4451;
  .input {
    width: 100%;
    padding: 20rpx 16rpx;
    box-sizing: border-box;
    // &::after {
    //   content: "";
    //   display: block;
    //   height: 24rpx;
    //   width: 60rpx;
    //   background: pink;
    // }
    input {
      background-color: #fff;
      height: 60rpx;
      font-size: 24rpx;
      width: 100%;
      padding-left: 20rpx;
      box-sizing: border-box;
      border-radius: 8rpx;
    }
  }
}
</style>
