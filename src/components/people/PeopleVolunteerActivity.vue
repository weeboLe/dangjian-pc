<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link tag="a" to="/people/peopleVolunteerActivity/peopleVolunteerActivity1" class="secondNav" href="#" active-class="volunteerActivityRouter">
          参与活动
        </router-link>
        <!--<a class="secondNav secondNav_red" href="#">参与活动</a>-->
      </div>
      <div class="second_s">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PeopleVolunteerActivity"
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
  .secondNavs .volunteerActivityRouter{
    color:#ff0000;
    border-bottom:1px solid #ff0000;
  }
</style>
