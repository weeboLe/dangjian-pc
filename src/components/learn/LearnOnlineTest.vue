<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/learn/learnOnlineTest/learnOnlineTest1" active-class="onlineTestRouter" class="secondNav"  href="#">
          党性体检
        </router-link>
        <router-link tag="a" to="/learn/learnOnlineTest/learnOnlineTest2" active-class="onlineTestRouter" class="secondNav"  href="#">
          十九大专题
        </router-link>
        <router-link tag="a" to="/learn/learnOnlineTest/learnOnlineTest3" active-class="onlineTestRouter" class="secondNav"  href="#">
          两学一做
        </router-link>
        <router-link tag="a" to="/learn/learnOnlineTest/learnOnlineTest4" active-class="onlineTestRouter" class="secondNav"  href="#">
          三会一课
        </router-link>
      </div>
      <div class="second_s">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LearnOnlineTest"
    }
</script>

<style scoped>
  .secondNavs{
    margin-top:12px;
    margin-bottom:35px;
  }
  .secondNavs .secondNav{
    font-size: 14px;
    color:black;
    border-bottom:1px solid white;
    margin-left: 18px;
    line-height: 20px;
  }
  .first .secondNavs .onlineTestRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }
</style>
