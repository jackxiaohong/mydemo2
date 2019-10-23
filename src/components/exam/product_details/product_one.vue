<template>
    <div>
       <div><img src="../../../assets/product_title1.jpg" alt=""></div> 
       <div class="title">- 有品生活哲学 -</div>
       <div class="product_all">
           <div class="product_img_ti"  v-for="(item,i) of items" :key="i">
               <img :src="'http://127.0.0.1:4000/'+item.img_url" alt="">
               <p>{{item.title}}</p>
           </div>
       </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "新品推荐", img_url: "product1.jpg" },
        { title: "热卖榜单", img_url: "product2.jpg" },
        { title: "空调/风扇", img_url: "product3.jpeg" },
        { title: "清洁电器", img_url: "product4.jpeg" },
        { title: "洗衣机", img_url: "product5.jpg" },
        { title: "冰箱", img_url: "product6.jpeg" },
        { title: "生活电器", img_url: "product7.jpg" },
        { title: "厨房大电", img_url: "product8.jpg" },
        { title: "厨房小电", img_url: "product9.png" }
      ]
    };
  }
};
</script>

<style scoped>
.product_img_ti{
   width: 30%; /*指定商品宽度*/
  border: 1px solid #ccc; /*灰色边*/
  border-radius: 5px; /*圆角*/
  margin: 2px 0; /*外边距*/
  padding: 2px; /*内边距*/
  box-sizing: border-box; /*计算宽度*/
  display: flex; /*弹性布局*/
  flex-direction: column; /*按列排*/
  margin: 0 auto;
}
.title{
    color:#e1dad6;
}
.product_all{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 4px;
    font-size: 10px;
}
.product_img_ti img{
     width: 100%; 
}
</style>



