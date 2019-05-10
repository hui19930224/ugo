<template>
  <div class="main_body">
    <search></search>
    <div class="category">
      <ul class="left_side">
        <scroll-view scroll-y>
          <li :class="{active:current === index}"
              v-for="(item, index) in categoryList"
              :key="index"
              @click="focused(index)">{{item.cat_name}}</li>
        </scroll-view>
      </ul>
      <div class="right_side">
        <scroll-view scroll-y>
          <navigator url="">
            <image src="/static/uploads/category.png"></image>
          </navigator>
          <div class="media"
               v-for="(itemChild,key) in media"
               :key="key">
            <div class="tv">{{itemChild.cat_name}}</div>
            <div class="m_media">
              <navigator v-for="list in itemChild.children"
                         :key="list.cat_id">
                <image :src="list.cat_icon"></image>
                <span>{{list.cat_name}}</span>
              </navigator>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import search from '@/components/search'
import request from '@/utils/request'

export default {
  components: {
    search
  },
  data () {
    return {
      categoryList: [],
      current: 0,
    }
  },
  methods: {
    async getCategory () {
      const { message } = await request({ url: '/api/public/v1/categories' })
      this.categoryList = message

      console.log(message)
    },
    focused (index) {
      this.current = index
    }
  },
  computed: {
    media () {
      return this.categoryList.length && this.categoryList[this.current].children
    }
  },
  mounted () {
    this.getCategory()
  }
}
</script>

<style lang="less" scoped>
.main_body {
  .category {
    position: absolute;
    left: 0;
    right: 0;
    top: 100rpx;
    bottom: 0;
    display: flex;
    .left_side {
      width: 198rpx;
      background-color: #f4f4f4;
      scroll-view {
        height: 100%;
        li {
          font-size: 28rpx;
          height: 100rpx;
          line-height: 100rpx;
          text-align: center;
          border-bottom: 1px solid #eeeeee;
          color: #333333;
          &.active {
            position: relative;
            background-color: #fff;
            color: #ea4451;
            &::before {
              content: "";
              display: block;
              height: 60rpx;
              width: 8rpx;
              background-color: #ea4451;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
    .right_side {
      flex: 1;
      scroll-view {
        height: 100%;
        navigator {
          image {
            width: 520rpx;
            height: 180rpx;
            vertical-align: middle;
            margin-top: 20rpx;
            margin-left: 16rpx;
          }
        }
        .media {
          text-align: center;
          .tv {
            margin: 40rpx 0 10rpx 0;
            font-size: 28rpx;
            &::before {
              content: "/";
              color: #f4f4f4;
              margin-right: 35rpx;
            }
            &::after {
              content: "/";
              color: #f4f4f4;
              margin-left: 35rpx;
            }
          }
          .m_media {
            display: flex;
            flex-wrap: wrap;

            navigator {
              width: 33.3333%;
              image {
                height: 120rpx;
                width: 120rpx;
              }
              span {
                display: block;
                font-size: 22rpx;
              }
            }
          }
        }
      }
    }
  }
}
</style>
