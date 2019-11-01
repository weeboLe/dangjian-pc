<template>
  <!--nav-->
  <div class="bodyNav">
    <div class="nav">
      <router-link to="/" tag="div" class="thisPage thisPage1">
          <p class="navText">首页</p>
          <div class="navMoreBox navMoreBox1">
            <index-nav1-left></index-nav1-left>
            <index-nav1-right></index-nav1-right>
          </div>
      </router-link>
      <router-link to="/learn" tag="div" class="thisPage thisPage2">
        <p class="navText">学习中心</p>
        <div class="navMoreBox navMoreBox2">
          <index-nav2-left></index-nav2-left>
          <index-nav2-right></index-nav2-right>
        </div>
      </router-link>
      <router-link to="/affairs" tag="div" class="thisPage thisPage3">
        <p class="navText">党务管理</p>
        <div class="navMoreBox navMoreBox3">
          <index-nav3-left></index-nav3-left>
          <index-nav3-right></index-nav3-right>
        </div>
      </router-link>
      <router-link to="/member" tag="div" class="thisPage thisPage4">
        <p class="navText">党员管理</p>
        <div class="navMoreBox navMoreBox4">
          <index-nav4></index-nav4>
        </div>
      </router-link>
      <router-link to="/work" tag="div" class="thisPage thisPage5">
        <p class="navText">群团工作</p>
        <div class="navMoreBox navMoreBox5">
          <index-nav5-left></index-nav5-left>
          <index-nav5-right></index-nav5-right>
        </div>
      </router-link>
      <router-link to="/supervise" tag="div" class="thisPage thisPage6">
        <p class="navText">纪检监察</p>
        <div class="navMoreBox navMoreBox6">
          <index-nav6-left></index-nav6-left>
          <index-nav6-right></index-nav6-right>
        </div>
      </router-link>
      <router-link to="/people" tag="div" class="thisPage thisPage7">
        <p class="navText">民生平台</p>
        <div class="navMoreBox navMoreBox7">
          <index-nav7-left></index-nav7-left>
          <index-nav7-right></index-nav7-right>
        </div>
      </router-link>
      <router-link to="/forum" tag="div" class="thisPage thisPage8">
        <p class="navText">党建论坛</p>
        <div class="navMoreBox navMoreBox8">
          <index-nav8-left></index-nav8-left>
          <index-nav8-right></index-nav8-right>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
    import IndexNav1Left from "./IndexNav1Left";
    import IndexNav1Right from "./IndexNav1Right";
    import IndexNav2Left from "./IndexNav2Left";
    import IndexNav2Right from "./IndexNav2Right";
    import IndexNav3Left from "./IndexNav3Left";
    import IndexNav3Right from "./IndexNav3Right";
    import IndexNav4 from "./IndexNav4";
    import IndexNav5Left from "./IndexNav5Left";
    import IndexNav5Right from "./IndexNav5Right";
    import IndexNav6Left from "./IndexNav6Left";
    import IndexNav6Right from "./IndexNav6Right";
    import IndexNav7Left from "./IndexNav7Left";
    import IndexNav7Right from "./IndexNav7Right";
    import IndexNav8Left from "./IndexNav8Left";
    import IndexNav8Right from "./IndexNav8Right";
    export default {
        name: "IndexNav",
      components: {
        IndexNav8Right,
        IndexNav8Left,
        IndexNav7Right,
        IndexNav7Left,
        IndexNav6Right,
        IndexNav6Left,
        IndexNav5Right,
        IndexNav5Left,
        IndexNav4,
        IndexNav3Right, IndexNav3Left, IndexNav2Right, IndexNav2Left, IndexNav1Right, IndexNav1Left}
    }
</script>

<style scoped>
.bodyNav{
  position: relative;
}
  .bodyNav .navMoreBox{
    width:995px;
    height:500px;
    background-color: white;
    position: absolute;
    left:50%;
    top:50%;
    margin-left: -500px;
    margin-top: 23px;
    z-index: 100;
    display: none;
    padding-left:5px;
  }
  .nav .thisPage1:hover .navMoreBox1{
    display: block;
  }
  .nav .thisPage2:hover .navMoreBox2{
    display: block;
  }
  .nav .thisPage3:hover .navMoreBox3{
    display: block;
  }
  .nav .thisPage4:hover .navMoreBox4{
    display: block;
  }
  .nav .thisPage5:hover .navMoreBox5{
    display: block;
  }
  .nav .thisPage6:hover .navMoreBox6{
    display: block;
  }
  .nav .thisPage7:hover .navMoreBox7{
    display: block;
  }
  .nav .thisPage8:hover .navMoreBox8{
    display: block;
  }
</style>
