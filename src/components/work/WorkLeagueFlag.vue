<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/work/workLeagueFlag/workLeagueFlag1" class="secondNav" href="#" active-class="leagueFlagRouter">
          青年先锋
        </router-link>
        <router-link tag="a" to="/work/workLeagueFlag/workLeagueFlag2" class="secondNav" href="#" active-class="leagueFlagRouter">
          青文学
        </router-link>
        <router-link tag="a" to="/work/workLeagueFlag/workLeagueFlag3" class="secondNav" href="#" active-class="leagueFlagRouter">
          青文学
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
        name: "WorkLeagueFlag"
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
  .secondNavs .leagueFlagRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }


</style>
