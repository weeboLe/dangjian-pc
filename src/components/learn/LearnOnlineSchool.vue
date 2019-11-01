<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/learn/LearnOnlineSchool/LearnOnlineSchool1" active-class="onlineSchoolRouter" class="secondNav"  href="#">
          PPT
        </router-link>
        <router-link tag="a" to="/learn/LearnOnlineSchool/LearnOnlineSchool2" active-class="onlineSchoolRouter" class="secondNav"  href="#">
          音频
        </router-link>
        <router-link tag="a" to="/learn/LearnOnlineSchool/LearnOnlineSchool3" active-class="onlineSchoolRouter" class="secondNav"  href="#">
          视频
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
        name: "LearnOnlineSchool"
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
  .first .secondNavs .onlineSchoolRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }
</style>
