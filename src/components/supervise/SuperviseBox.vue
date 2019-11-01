<template>
  <!--learn-->
  <div class="bodyLearn">
    <div class="learnContent">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">
          首页
        </a>
        <span>&gt;</span>
        <a href="#" class="site">
          纪检监察
        </a>
      </p>
      <!--learnBox-->
      <div class="learnBox">
        <div class="firstNavs">
          <router-link tag="a" to="/supervise/superviseInspect" class="firstNav" href="#" active-class="superviseRouter">
            纪检监察
          </router-link>
          <router-link tag="a" to="/supervise/superviseHonest" class="firstNav" href="#" active-class="superviseRouter">
            廉洁建设
          </router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SuperviseBox"
    }
</script>

<style scoped>
  .bodyLearn{
    width:100%;
  }
  .bodyLearn .learnContent{
    width:1000px;
    margin:0 auto;
  }
  .learnContent .learnBox{
    border:1px solid #dcdcdc;
  }
  /*learnBox*/
  .learnBox{
    padding:14px 21px;
    margin-bottom:130px;
    padding-bottom: 50px;
    min-height: 500px;
  }
  .learnBox .firstNavs{

  }
  .firstNavs .firstNav{
    display: inline-block;
    font-size: 15px;
    color:black;
    line-height:30px;
    padding:0 14px;
    border-radius:3px;
  }
  .firstNavs .superviseRouter{
    color:#fe4e4e;
    background-color: #ffe0e0;
  }

</style>
