<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/work/workStaffHome/workStaffHome1" class="secondNav" href="#" active-class="staffHomeRouter">
          四项职能
        </router-link>
        <router-link tag="a" to="/work/workStaffHome/workStaffHome2" class="secondNav" href="#" active-class="staffHomeRouter">
          职工文化
        </router-link>
        <router-link tag="a" to="/work/workStaffHome/workStaffHome3" class="secondNav" href="#" active-class="staffHomeRouter">
          情系员工
        </router-link>
        <router-link tag="a" to="/work/workStaffHome/workStaffHome4" class="secondNav" href="#" active-class="staffHomeRouter">
          工会动态
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
        name: "WorkStaffHome"
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
  .secondNavs .staffHomeRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }
</style>
