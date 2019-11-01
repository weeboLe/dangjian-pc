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
          党建论坛
        </a>
        <span>&gt;</span>
        <a href="#" class="site">
          党旗领航
        </a>
      </p>
      <!--learnBox-->
      <div class="learnBox">
        <div class="firstNavs">
          <router-link tag="a" to="/flags/partyFlag" class="firstNav" href="#" active-class="staffHomeRouter">
            党旗领航
          </router-link>
          <router-link tag="a" to="/flags/partyHistory" class="firstNav" href="#" active-class="staffHomeRouter">
            党史与研究
          </router-link>
        </div>
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "PartyFlagBox"
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
  .firstNavs .firstNav{
    display: inline-block;
    font-size: 15px;
    color:black;
    line-height:30px;
    padding:0 14px;
    border-radius:3px;
  }
  .firstNavs .staffHomeRouter{
    color:#fe4e4e;
    background-color: #ffe0e0;
  }

</style>
