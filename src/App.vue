<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      activeIndex: '0',
      screenWidth: document.body.clientWidth,
      timer:false
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
        return (() => {
          that.screenWidth = document.body.clientWidth
        })()
    }
},
watch:{
    screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
                console.log(that.screenWidth)
                that.timer = false
            },400)
        }
    }
},

  methods: {
    handleSelect() {
      
    }
  },
}

</script>

<template>
  <div id="main">
      <el-container class="index-container" >
        <el-header style="display: inline-block; height: 80px;">
          
          <el-menu :default-active="activeIndex" v-if="screenWidth>1100" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          style="height: 100%;" 
            @select="handleSelect" :router="true">
            <span style="font-weight: bold; font-size: 30px; margin: auto 30px; color: black;"> GTSinger</span>
            <div style="flex-grow: 1;" />
            <el-menu-item index="home">Home</el-menu-item>
            <el-menu-item index="dataset">Dataset</el-menu-item>
            <el-menu-item index="csv">Tech-Control SVS</el-menu-item>
            <el-menu-item index="tr">Tech Recognition</el-menu-item>
            <el-menu-item index="st">Style transfer</el-menu-item>
            <el-menu-item index="sts">STS Conversion</el-menu-item>

          </el-menu>
          <el-menu :default-active="activeIndex" v-else class="el-menu-demo" mode="horizontal" :ellipsis="false"
          style="height: 100%;" 
            @select="handleSelect" :router="true">
            <span style="font-weight: bold; font-size: 30px; margin: auto 30px; color: black;"> GTSinger</span>
            <div style="flex-grow: 1;" />
            <el-menu-item index="home">Home</el-menu-item>
            <el-menu-item index="dataset">Dataset</el-menu-item>
            <el-sub-menu index="0">
            <template #title>BenchMarks</template>
            <el-menu-item index="csv">Tech-Control SVS</el-menu-item>
            <el-menu-item index="tr">Tech Recognition</el-menu-item>
            <el-menu-item index="st">Style Transfer</el-menu-item>
            <el-menu-item index="sts">STS Conversion</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-header>
        <el-main style="padding: 0;">
          <RouterView style="background-color: white;"/>
        </el-main>
      </el-container>
    
  </div>
</template>

<style scoped>
#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  max-width: unset;
  min-height: 100vh;
}

#main{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: auto;
  background-color: #dcdcdc;
  overflow-x: hidden;
}

.index {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.el-container {
  height: 100%;
  width: 100%;
}
.el-header{
  padding: 0;
  width: 100%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
