<template>
    <div class="all">
        <mt-header >
            <!-- <mt-button v-link="'/'" icon="back" slot="left"></mt-button> -->
        </mt-header>
        <img id="login_img" src="../../assets/login.png" alt="">
        <!-- <h4>Login.vue</h4> -->
        <!-- <img src="" alt=""> -->
        <!-- 1:用户名输入框 -->
        <van-cell-group>
            <van-field v-model="uname" placeholder="请输入用户名" />
            <van-field v-model="upwd" placeholder="请输入密码" />
        </van-cell-group>
        <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}"></mt-field>-->
        <!-- 2:密码输入框 -->
        <!-- <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>  -->
        <!-- 3.登录按钮 -->
        <mt-button size="large" @click="login">登录</mt-button>
        <div class="login_bottom">
             <span><a href="#">注册新账号></a></span><span>|</span><a href="#">忘记密码></a>
        </div>
       <div class="second">
           <span>——————————您还可以用以下方式登录——————————</span>
           <div class="second_msg">
               <a href="#">
                   <img src="../../assets/login_phone.png" alt="">
                   <span> 短信验证码登录</span>
               </a>
               
           </div>
        

       </div>
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",//输入用户名
            upwd:"" //输入密码
        }
    },
    methods:{
        login(){
            // 功能:完成用户登录操作
            // 1.获取用户输入的用户名
            var uname=this.uname;
            // 2.获取用户输入密码
            var upwd=this.upwd;
            // console.log(uname+"_"+upwd)
            // 3.创建正则表达式 3-12字母数字,i忽略大小写
            var reg = /^[a-z0-9]{3,12}$/i;
            // 4.验证用户名
            if(reg.test(uname)==false){
            // 5.验证不成功，提示消息
            this.$messagebox("用户名格式不正确");
            return;
            }
            // 6.验证密码
            if(reg.test(upwd)==false){
          
            // 7.验证不成功，提示消息
              this.$messagebox("用户密码格式不正确");
              return;
            }
            // 8.发送ajax请求
            var url = "login";
            var obj = {uname:uname,upwd:upwd};
              // 9.获取服务器返回结果
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res.data.code);
                if(res.data.code<0){
                      // 10.登录失败提示消息
                    this.$messagebox("消息","用户名或者密码错误");
                }else{
                      // 11.登录成功跳转 /product
                      this.$router.push("/register");
                }
                
            })
        }
    }
}
</script>

<style scoped>
.all{
    font-size: 2px;
    position: relative;
    top:-27px;
    color:#e1dad6;
}
a{color:#e1dad6;}
.mint-cell-wrapper{
    font-size: 5px !important
}
.van-cell {
     font-size: 9px;
}
/* .mint-cell-title{
    font-size: 5px;
} */
/* .mint-cell-text{
    font-size: 5px;
} */

#login_img{
    width: 110px;
    height: 40px;
    margin-bottom:20px;
}
.mint-header{
    background-color:#fff;
    color: #d8cfc7;
}
.login_bottom{
    padding-top:20px;
    width:150px;
    height:100px;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    color:#beaa99;
}
.login_bottom a{
    color:#beaa99;
}
.mint-button--default{
 background:#d8cfc7;
}
.mint-button{
    color:#fff;
}
.second{
    position: relative;
    top:170px;
}
.second span{
    display: block;
}
.second_msg{
    margin-top: 10px;
    width: 90px;
    display: flex;
       flex-direction:column;
       margin: 0 auto;

}
.second_msg img{
    width: 30px;
    height: 30px;
    /* text-align: center; */
    margin-left:26px;
    margin-top:20px;
    /* background: #e1dad6; */
    /* background-color: #e1dad6; */
}
.second_msg span{
    margin-top: 10px;
    margin-left: 10px;
    width: 100px;
}

</style>



