<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/people/peopleOnlineMall/peopleOnlineMall1" class="secondNav" href="#" active-class="onlineMallRouter">
          商品列表
        </router-link>
        <!--<a class="secondNav secondNav_red" href="#">商品列表</a>-->
      </div>
      <div class="second_s">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PeopleOnlineMall"
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
  .secondNavs .onlineMallRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }
</style>
