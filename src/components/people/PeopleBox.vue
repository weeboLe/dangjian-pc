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
          民生平台
        </a>
      </p>
      <!--learnBox-->
      <div class="learnBox">
        <div class="firstNavs">
          <router-link tag="a" to="/people/peopleDifficultyHelp" class="firstNav" href="#" active-class="peopleRouter">
            困难帮扶
          </router-link>
          <router-link tag="a" to="/people/peopleOvercomePoverty" class="firstNav" href="#" active-class="peopleRouter">
            脱贫攻坚
          </router-link>
          <router-link tag="a" to="/people/peopleVolunteerActivity" class="firstNav" href="#" active-class="peopleRouter">
            志愿者活动
          </router-link>
          <router-link tag="a" to="/people/peopleOnlineMall" class="firstNav" href="#" active-class="peopleRouter">
            在线商城
          </router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PeopleBox"
    }
</script>

<style scoped>
  /*learnBox*/
  .bodyLearn{
    width:100%;
  }
  .bodyLearn .learnContent{
    width:1000px;
    margin:0 auto;
  }
  .learnContent .learnBox{
    border:1px solid #dcdcdc;
    padding:14px 21px;
    margin-bottom:200px;
    min-height: 600px;
  }
  .firstNavs .firstNav{
    display: inline-block;
    font-size: 15px;
    color:black;
    line-height:30px;
    padding:0 14px;
    border-radius:5px;
  }
  .firstNavs .peopleRouter{
    color:#fe4e4e;
    background-color: #ffe0e0;
  }

</style>
