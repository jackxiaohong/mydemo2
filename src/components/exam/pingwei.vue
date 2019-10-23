<template>
<div>
    <div class="pingwei_title_first">品味</div>
    <div class="pingwei">
        <router-link to="" v-for="(item,i) of items" :key="i">
            <img :src="'http://127.0.0.1:4000/'+item.img_url" alt="">
            <div class="pingwei_title">{{item.title}}</div>
            <div class="pingwei_detail">{{item.detail}}</div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "发现好货第三十六期",
          detail: "这10件养生好物让你舒适过三伏天",
          img_url: "pingwei1.jpg"
        },
        {
          title: "发现好货第三十三期",
          detail: "这10件礼物提升你在女生心中的好感度",
          img_url: "pingwei2.jpg"
        },
        {
          title: "让爱宠也能感受科技的乐趣",
          detail: "毛孩子的太空舱",
          img_url: "pingwei3.jpg"
        },
        {
          title: "来我家吃饭吧，不用你洗菜",
          detail: '"偷得浮生半日闲"+原来是这种体验',
          img_url: "pingwei4.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* #app{
    margin-top:-20px !important
} */
.pingwei_title_first {
  background-color: #efeff0;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  font-size: 16px;
}
.pingwei img {
  width: 100%;
}

.pingwei_title {
  font-size: 14px;
  margin-bottom: 3px;
  margin-top: 13px;
  color: #000;
}
.pingwei_detail {
  color: #bfbfbf;
  font-size: 8px;
  margin-bottom: 13px;
}
</style>
