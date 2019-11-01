<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/people/peopleDifficultyHelp/peopleDifficultyHelp1" class="secondNav" href="#" active-class="difficultyHelpRouter">
          参与活动
        </router-link>
        <router-link tag="a" to="/people/peopleDifficultyHelp/peopleDifficultyHelp2" class="secondNav" href="#" active-class="difficultyHelpRouter">
          发起申请
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
        name: "PeopleDifficultyHelp"
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
  .secondNavs .difficultyHelpRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }


</style>
