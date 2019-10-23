<template> 
      <div id="wrap">
          <div class="goodMenu" ref="goodMenu">
            <ul>
              <li v-for="(item ,index) in goodMenu" :key="index"
               :class="{active: currentIndex === index}"
               @click="selectLeft(index)" ref="lItem">{{ item}}</li>
            </ul>
          </div>
      
          <div class="goodList" ref="goodList">
            <ul>
              <li v-for="(items, index) in goodList" :key="index" ref="rItem">
                <p>{{ items.name}}</p>
            
                <div v-for="(item, key) in items.data" :key="key">
                  {{ item}}
                </div>
              </li>
            </ul>
          </div>
      </div>
</template> 
<script>
export default {
     data(){
        return {
          goodMenu: ['菜单1', '菜单2','菜单3', '菜单4', '菜单5', '菜单6', '菜单7', '菜单8'],
          goodList: [
            { name: '菜单1', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
            { name: '菜单2', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']},
            { name: '菜单3', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
            { name: '菜单4', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
           { name: '菜单5', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8']},
            { name: '菜单6', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
            { name: '菜单7', data: ['1.1', '1.2', '1.3', '1.4']},
            { name: '菜单8', data: ['1.1', '1.2']},
          ],
          scrollY: 0,//获取实时滚动位置
          heightList: []//获取每一个li的高度
        }
      }
}
</script>
  
