<template>
  <div class="m_body">
    <!-- 头部区域 -->
    <div class="header">
      <div class="input">
        <input type="text"
               placeholder="搜索">
      </div>
      <div class="result"></div>
    </div>
    <!-- 中心广告区 -->
    <div class="banner">
      <swiper indicator-dots
              indicator-color="rgba(255,255,255,.6)"
              indicator-active-color="#fff"
              autoplay
              circular
              interval="2000">
        <swiper-item v-for="(item,index) in bannerList"
                     :key="index">
          <navigator :url="item.navigator_url">
            <image :src="item.image_src"></image>
          </navigator>
        </swiper-item>
      </swiper>
    </div>
    <!-- 分类区域 -->
    <div class="category">
      <navigator :url="item.navigator_url"
                 v-for="(item,index) in categoryList"
                 :key="index">
        <image :src="item.image_src"></image>
      </navigator>
    </div>
    <!-- 楼层图 -->
    <div class="floors"
         v-for="(item,index) in floorList"
         :key="index">
      <div class="image">
        <image :src="item.floor_title.image_src"></image>
      </div>
      <div class="floor">
        <!-- 正确代码 -->
        <div class="image_left">
          <navigator :url="list.navigator_url"
                     v-for="(list,key) in item.product_list"
                     :key="key">
            <image :src="list.image_src"></image>
          </navigator>
          <!-- 错误代码 -->
          <!-- <navigator :url="item.product_list.navigator_url">
          <image :src="item.product_list.image_src"></image>
        </navigator> -->
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <span class="returnTop"
          v-show="!isTop"
          @click="goTop">回顶部</span>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      bannerList: [],
      categoryList: [],
      floorList: [],
      isTop: true
    }
  },
  methods: {
    async getPic () {
      // const that = this
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
      //   success: function (info) {
      //     // console.log(info)
      //     that.bannerList = info.data.message
      //   }
      // })

      let { message } = await request({ url: '/api/public/v1/home/swiperdata' })
      this.bannerList = message
    },

    async getCategory () {
      // const that = this
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
      //   success: function (info) {
      //     // console.log(info)
      //     that.categoryList = info.data.message
      //   }
      // })
      let { message } = await request({ url: '/api/public/v1/home/catitems' })
      this.categoryList = message
    },

    async getFloor () {
      // const that = this
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/floordata',
      //   success: function (info) {
      //     console.log(info)
      //     that.floorList = info.data.message
      //   }
      // })

      let { message } = await request({ url: '/api/public/v1/home/floordata' })
      this.floorList = message
    },

    goTop () {
      mpvue.pageScrollTo({
        scrollTop: 0
      })
    }

  },
  mounted () {
    this.getPic()
    this.getCategory()
    this.getFloor()

  },
  onPullDownRefresh () {
    // mpvue.startPullDownRefresh()
    this.getPic()
    this.getCategory()
    this.getFloor()
    mpvue.stopPullDownRefresh()
  },
  onPageScroll (ev) {
    // console.log(ev)
    this.isTop = ev.scrollTop < 200
  }
}
</script>

<style scoped lang="less">
.m_body {
  width: 100%;
  // 头部区域
  .header {
    width: 100%;
    background-color: #ea4451;
    .input {
      width: 100%;
      padding: 20rpx 16rpx;
      box-sizing: border-box;
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

  // 广告区域
  .banner {
    width: 100%;
    height: 340rpx;
    swiper {
      width: 100%;
      height: 100%;
      swiper-item {
        width: 100%;
        height: 100%;
        navigator {
          width: 100%;
          height: 100%;
          image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .category {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12rpx 26rpx;
    box-sizing: border-box;
    navigator {
      width: 128rpx;
      height: 140rpx;
      image {
        height: 100%;
        width: 100%;
      }
    }
  }
  // 楼层图
  .floors {
    width: 100%;
    clear: both;
    .image {
      height: 86rpx;
      width: 100%;
      background-color: #f4f4f4;
      image {
        height: 58rpx;
        width: 100%;
        vertical-align: middle;
        margin-top: 20rpx;
      }
    }
    .floor {
      width: 100%;
      // .image_left {
      padding: 20rpx 16rpx;

      navigator {
        height: 187rpx;
        padding-right: 10rpx;
        padding-bottom: 15rpx;
      }
      navigator:first-child {
        height: 386rpx;
        width: 232rpx;
        float: left;
        image {
          height: 100%;
          width: 100%;
        }
      }
      navigator:nth-child(2) {
        height: 187rpx;
        width: 273rpx;
        float: left;
        image {
          height: 100%;
          width: 100%;
        }
      }
      navigator:nth-child(3) {
        height: 187rpx;
        width: 192rpx;
        float: left;
        image {
          height: 100%;
          width: 100%;
        }
      }
      navigator:nth-child(4) {
        height: 187rpx;
        width: 192rpx;
        float: left;
        image {
          height: 100%;
          width: 100%;
        }
      }
      navigator:nth-child(5) {
        height: 187rpx;
        width: 273rpx;
        float: left;
        image {
          height: 100%;
          width: 100%;
        }
      }
    }
    // }
  }
  .returnTop {
    height: 80rpx;
    width: 80rpx;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 80rpx;
    position: fixed;
    right: 50rpx;
    bottom: 50rpx;
    font-size: 20rpx;
    text-align: center;
    line-height: 80rpx;
  }
}
</style>
