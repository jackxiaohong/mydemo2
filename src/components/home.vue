<template>
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
</template>
<script>
	export default {
		data:function(){
			return {
				active:0,
                tasks:[
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
                ]

			}
		},
		methods:{
                toggle:function(index){
                    this.active=index
                }
            }
	}


</script>

<style>
	
#NavSlide{
    width: 100%;
    overflow:hidden;

}
#NavSlide div{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
    background-color: #31C17B;
}
#NavSlide p{
    text-align: center;
    font-size: 16px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 10px;
    margin: 5px;
    color: #E5E5E5;

}
#NavSlide p a{
	color: #E5E5E5;
	text-decoration: none;
}
#NavSlide p a.active{
 	color: white;
}
/* #NavSlide .fixadd{
	position: absolute;
	right: -4px;
	background-color: #31C17B;
} */
</style>
