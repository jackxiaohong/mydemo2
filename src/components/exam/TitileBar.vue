<template>
    <div>
        <!-- 导航栏 -->
    <div class="page-head">
        <div class="left">
            <img src="../../assets/TitileBar.png" alt="">
        </div>
        <div class="middle">
            <!-- <van-search autofocus background="#fff" placeholder="家装季实惠大赏" v-model="value" />
             -->
             <!-- <input type="text" placeholder="家装季实惠大赏" > -->
             <van-search placeholder="请输入搜索关键词" v-model="value" />
        </div>
        <div class="right">
            <router-link to="" id="b1"><img src="../../assets/saomiao.png" alt="" width="30px" height="27px"></router-link>
            <router-link to="" id="a1"><img src="../../assets/youxiang.png" alt=""></router-link>
            <!-- <a href="" id="b1"><img src="../../assets/saomiao.png" alt width="30px" height="27px"></a>
            <a href="" id="a1"><img src="../../assets/youxiang.png" alt ></a> -->
          
        </div>
    </div>
    <!-- 滑动导航栏 -->
    <div id="NavSlide">
		 <div>
            <p v-for="(task,index) of tasks" :key="index" @click="toggle(index)"><router-link to="/" :class="{active:index==active}">{{task}}</router-link></p>
        	<p class="fixadd">
        		<router-link to="/Select" >
	    			<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
	    		</router-link>
        	</p>
		 </div>
	</div>

    <!-- 轮播图 -->
    <div>
        <!-- <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe> -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../assets/carousel1.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/carousel2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/carousel3.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/carousel4.jpg" alt=""></van-swipe-item>
        </van-swipe>
    </div>

    <!-- 每日新品 -->
    <div class="second_item">
        <router-link to=""><img src="../../assets/second1.png" alt="">
        <span>每日新品</span>
        </router-link>
        <router-link to=""><img src="../../assets/second2.png" alt="">
        <span>小米众筹</span>
        </router-link>
        <router-link to=""><img src="../../assets/second3.png" alt="">
        <span>限时抢购</span>
        </router-link>
        <router-link to=""><img src="../../assets/second4.png" alt="">
        <span>热销榜单</span>
        </router-link>
        <router-link to=""><img src="../../assets/second5.png" alt="">
        <span>一元拼团</span>
        </router-link>
    </div>

    <!-- 居家 -->
    <div class="jujia">
        <div class="jujia-item" v-for="(item,i) of items" :key="i">
        <img :src="'http://127.0.0.1:4000/'+item.img_url"  alt="">
        <div class="jujia_title">{{item.title}}</div>
        <div class="jujia_datail">
            <div class="jujia_name">{{item.name}}</div>
            <div class="jujia_price">
                <span>¥</span>
                <span>{{item.price}}</span>
            </div>
        </div>
        
    </div>
    </div>
    

</div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 0,
      tasks: [
        "推荐",
        "有品推荐",
        "家用电器",
        "智能家庭",
        "手机电脑",
        "家具家装",
        "居家餐厨",
        "电影影音",
        "运动户外",
        "用户文创",
        "服装配饰",
        "鞋靴箱包",
        "美妆个护",
        "数码周边",
        "出行车品"
      ],
      items: [
        {
          img_url: "jujia1.jpg",
          title: "易于养护,花器可自由拆分",
          name: "花加水培绿植套装",
          price: 69
        },
        {
          img_url: "jujia2.jpg",
          title: "精确控油，防硅油瓶嘴",
          name: "生活瓶液体调味罐",
          price: 21.9
        },
        {
          img_url: "jujia3.jpg",
          title: "风向温度自动调节",
          name: "智能浴霸Pro",
          price: 1399
        },
        {
          img_url: "jujia4.jpg",
          title: "100%光双蚕被",
          name: "8H抗菌桑蚕丝被",
          price: 829
        },
        {
          img_url: "jujia5.jpg",
          title: "心意花礼，专属定制，随花送花瓶",
          name: "花加鲜花单次兑换卡",
          price: 139
        },
        {
          img_url: "jujia6.jpg",
          title: "全球日光算法",
          name: "纤玉星轨吸顶灯",
          price: 429
        }
      ]
      // images:[
      //     "https://img.yzcdn.cn/vant/apple-1.jpg",
      //     "https://img.yzcdn.cn/vant/apple-2.jpg",
      //     "../../assets/TitileBar.png"
      // ]
    };
  },
  methods: {
    toggle: function(index) {
      this.active = index;
    }
  }
};
</script>



<style scoped>
.page-head {
  display: flex;
  height: 35px;
}
.left img {
  width: 92px;
  height: 35px;
}
.middle input {
  border-radius: 5%;
  width: 200px;
  height: 25px;
  border: 1px solid #e1dad6;
}
.van-search {
  padding: 4px 2px;
}
/* .van-field__control{
    width: 100px;
} */
.right {
  display: flex;
  height: 35px;
  line-height: 35px;
}
/* .right a img{
    width: 40px;
} */
#b1 img {
  margin: 10px auto;
}
#a1 img {
  width: 35px;
  height: 40px;
  background-repeat: repeat;
  color: red;
  margin: 3px 0px 0px 7px;
}

#NavSlide {
  width: 100%;
  overflow: hidden;
}
#NavSlide div {
  padding: 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: middle;
  -ms-flex-align: middle;
  align-items: middle;
  overflow: auto;
  /* background-color: #31C17B#; */
}
#NavSlide p {
  margin-left: 5px;
  text-align: center;
  font-size: 16px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  padding: 10px;
  margin: 5px;
  color: #000;
}
#NavSlide p a {
  color: #000;
  text-decoration: none;
}
#NavSlide p a.active {
  color: #aa9271;
}

.van-swipe-item img {
  width: 100%;
  height: 100px;
}

/*second_one*/
.second_item {
  display: flex;
  width: 100%;

  /* justify-content: space-between; */

  justify-content: space-around;
  text-align: center;
}
.second_item a {
  /* display: block; */
  height: 100px;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
}
.second_item a img {
  width: 50px;
  height: 50px;
}
.second_item a span {
  margin-right: 10px;
  font-size: 15px;
}

/*居家*/
.jujia {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4px;
  font-size: 13px;
}
.jujia-item {
  width: 49%; /*指定商品宽度*/
  border: 1px solid #ccc; /*灰色边*/
  border-radius: 5px; /*圆角*/
  margin: 2px 0; /*外边距*/
  padding: 2px; /*内边距*/
  box-sizing: border-box; /*计算宽度*/
  display: flex; /*弹性布局*/
  flex-direction: column; /*按列排*/
  min-height: 247px; /*最小高度*/
  margin: 0 auto;
}
.jujia-item img {
  width: 100%;
}

.jujia_title{
    padding: 10px 0px 10px 0px;
    color: #927154;
}

.jujia_datail{
    color:#000;
    background-color: #f8f8f8;
    padding: 10px;
}
.jujia_price{
    color: #f00;
}
/* .jujia-item:nth-last-child(2) img{
    height: 60%;
}
.jujia-item:nth-child(4) img{
    height: 67%;
} */
.jujia-item img{
  height:66%;
}
.jujia-item:nth-last-child(2) img{
  height: 60%;
}

</style>
