<template>
    <div class="all">
        <div class="all_one">
            <mt-header >
                <router-link to="'/'" icon="back" slot="left"></router-link>
            </mt-header>
            <span>小米账号-注册</span>
        </div>
        <p>注册小米账号</p>
        <!-- 1:用户名输入框 -->
        <van-cell-group>
            <van-field v-model="uname" placeholder="请输入用户名" :attr="{autofocus:true}" />
            <van-field v-model="upwd" placeholder="请输入密码" />
        </van-cell-group>

        <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}"></mt-field>-->
        <!-- 2:密码输入框 -->
        <!-- <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>  -->
        <!-- 3.登录按钮 -->
        <mt-button size="large" @click="register" id="register_button">立即注册</mt-button>
        <div class="login_bottom">
             <span>已阅读并同意<Router-link to="">用户协议</Router-link></span>和<Router-link to="home">隐私政策</Router-link>
        </div>
       <div  class="second"  @click="font_change" >
           <Router-link to=""  >简体</Router-link><span>|</span><Router-link to="">繁体</Router-link><span>|</span><Router-link to="">English</Router-link><span>|</span><Router-link to="" >常见问题</Router-link>
       </div>
       

      <!-- <ul>
         <li v-for="(task,i) of tasks" :key="i">{{i+1}} - {{task}} <a href="javascript:;" @click="del(i)">x</a></li>
      </ul> -->

    </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "", //输入用户名
      upwd: "", //输入密码
      active: "second1",
      tasks: ["简体", "繁体", "English", "常见问题"],
      currentIndex: 0
    };
  },
  methods: {
    register() {
      // 功能:完成用户登录操作
      // 1.获取用户输入的用户名
      var uname = this.uname;
      // 2.获取用户输入密码
      var upwd = this.upwd;
      // console.log(uname+"_"+upwd)
      // 3.创建正则表达式 3-12字母数字,i忽略大小写
      var reg = /^[a-z0-9]{3,12}$/i;
      // 4.验证用户名
      if (reg.test(uname) == false) {
        // 5.验证不成功，提示消息
        this.$messagebox("用户名格式不正确");
        return;
      }
      // 6.验证密码
      if (reg.test(upwd) == false) {
        // 7.验证不成功，提示消息
        this.$messagebox("用户密码格式不正确");
        return;
      }
      // 8.发送ajax请求
      var url = "register";
      var obj = { uname: uname, upwd: upwd };
      // 9.获取服务器返回结果
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res.data.code);
        if (res.data.code < 0) {
          // 10.登录失败提示消息
          this.$messagebox("消息", "用户注册失败");
        } else {
          // 11.登录成功跳转 /product
          // this.$router.push("/Product");
          this.$messagebox("消息", "用户注册成功");
        }
      });
    },
    font_change(e) {
      console.log(e);
      var b = event.target.parentElement.children;
      console.log(b);
      for (var i = 0; i < b.length; i++) {
        b[i].style.color = "";
        // if (e.target.nodeName == "A") {
          // e.target.isActive = true;
        // }
      }
      event.target.style.color="#000"
    },
    // font_changeone(e){
    //   if(e.target.nodeName=="A"){
    //     e.target.style.color="#000";
    //   }
    // }
    // font_change (index){
    //     // console.log(e.target)
    //     // if(e.target.nodeName=="A"){
    //     // e.target.style.color="#000";
    //     // e.target=true;
    //     // }
    //     console.log(e.target.dataset.id);
    //     // if(e.target){
    //     //     e.target.dataset.id=true;

    //     // }else{
    //     //   e.target.dataset.id=false;

    //     // }
    //     // if(e.target.dataset.id=true){
    //     //    e.target.style.color="#000"
    //     //   e.target.dataset.id=false;
    //     // }else{
    //     //   e.target.style.color="#e1dad6";

    //     // }
    //       this.currentIndex=index;

    // }
  }
};
</script>

<style scoped>
/* .second Router-link+Router-link:active{
  color:red;
} */

.on {
  color: red;
}

.all {
  font-size: 2px;
  position: relative;
  top: -27px;
  color: #e1dad6;
}

p {
  font-weight: 10px;
  font-size: 25px;
  color: #000;
  padding-bottom: 40px;
}
.all_one {
  width: 230px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}
.all_one span {
  margin-top: 12px;
  color: #000;
  font-size: 15px;
}

a {
  color: #e1dad6;
}
/* .mint-cell-wrapper{
    font-size: 5px !important
} */
.van-cell {
  font-size: 16px;
}
/* .mint-cell-title{
    font-size: 5px;
} */
/* .mint-cell-text{
    font-size: 5px;
} */
#register_button {
  margin-top: 80px;
  background: #ff6700;
  width: 340px;
  margin: 30px auto auto auto;
}
.mint-button {
  color: #e1dad6;
  /* background:#ff6700; */
}
#login {
  width: 110px;
  height: 40px;
  margin-bottom: 20px;
}
.mint-header {
  background-color: #fff;
  color: #d8cfc7;
}
.login_bottom {
  padding-top: 20px;
  color: #beaa99;
  padding-left: 1px;
}
.login_bottom a {
  color: #beaa99;
}

.second {
  width: 280px;
  display: flex;
  justify-content: space-around;
  margin: 180px auto 0 auto;
  font-size: 13px;
}

/* .second span {
  display: block;
}
.second_msg {
  margin-top: 10px;
  width: 90px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.second_msg img {
  width: 30px;
  height: 30px;
  /* text-align: center; */
/*margin-left: 26px;
  margin-top: 20px;*/
/* background: #e1dad6; */
/* background-color: #e1dad6; 
}
.second_msg span {
  margin-top: 10px;
  margin-left: 10px;
  width: 100px;
} */
</style>



