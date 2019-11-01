<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/supervise/superviseHonest/superviseHonest1" class="secondNav" href="#" active-class="honestRouter">
          学习交流
        </router-link>
        <router-link tag="a" to="/supervise/superviseHonest/superviseHonest2" class="secondNav" href="#" active-class="honestRouter">
          勤廉楷模
        </router-link>
        <router-link tag="a" to="/supervise/superviseHonest/superviseHonest3" class="secondNav" href="#" active-class="honestRouter">
          以案示警
        </router-link>
        <router-link tag="a" to="/supervise/superviseHonest/superviseHonest4" class="secondNav" href="#" active-class="honestRouter">
          廉政时讯
        </router-link>
        <!--<a class="secondNav secondNav_red" href="#">信息通报</a>-->
        <!--<a class="secondNav" href="#">党纪法规</a>-->
      </div>
      <div class="second_s">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SuperviseHonest"
    }
</script>

<style scoped>
  .secondNavs{
    margin-top:12px;
    margin-bottom:10px;
  }
  .secondNavs .secondNav{
    font-size: 14px;
    color:black;
    border-bottom:1px solid white;
    margin-left: 18px;
    line-height: 20px;
  }
  .secondNavs .honestRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }



</style>
