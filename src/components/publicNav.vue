<template>
  <div class="bodyNav">
    <div class="nav">
      <router-link to="/" tag="a" class="thisPage thisPage1">
        <p class="navText">首页</p>
      </router-link>
      <router-link to="/learn" tag="a" class="thisPage thisPage2" active-class="_navBtn">
        <p class="navText">学习中心</p>
      </router-link>
      <router-link to="/affairs" tag="a" class="thisPage thisPage3" active-class="_navBtn">
        <p class="navText">党务管理</p>
      </router-link>
      <router-link to="/member" tag="a" class="thisPage thisPage4" active-class="_navBtn">
        <p class="navText">党员管理</p>
      </router-link>
      <router-link to="/work" tag="a" class="thisPage thisPage5" active-class="_navBtn">
        <p class="navText">群团工作</p>
      </router-link>
      <router-link to="/supervise" tag="a" class="thisPage thisPage6" active-class="_navBtn">
        <p class="navText">纪检监察</p>
      </router-link>
      <router-link to="/people" tag="a" class="thisPage thisPage7" active-class="_navBtn">
        <p class="navText">民生平台</p>
      </router-link>
      <router-link to="/forum" tag="a" class="thisPage thisPage8" active-class="_navBtn">
        <p class="navText">党建论坛</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicNav"
};
</script>

<style scoped>
._navBtn {
  background-color: white;
}
._navBtn .navText {
  color: black;
}
</style>
