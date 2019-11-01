<template>
  <div class="second second1">
    <div class="content">
      <div class="left">
        <img src="~@/assets/images/userpot.png" />
      </div>
      <div class="right">
        <p class="pFrist">蔡忠和</p>
        <p class="pLast">君子涧村香菇产业</p>
        <p class="pLast Last1">君子涧村香菇产业</p>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img src="~@/assets/images/userpot.png" />
      </div>
      <div class="right">
        <p class="pFrist">蔡忠和</p>
        <p class="pLast">君子涧村香菇产业</p>
        <p class="pLast Last1">君子涧村香菇产业</p>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img src="~@/assets/images/userpot.png" />
      </div>
      <div class="right">
        <p class="pFrist">蔡忠和</p>
        <p class="pLast">君子涧村香菇产业</p>
        <p class="pLast Last1">君子涧村香菇产业</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartyMemberClire3",
  data() {
    return {};
  }
};
</script>

<style scoped>
.second {
  width: 70%;
  float: left;
}
.content {
  margin-top: 50px;
  width: 100%;
  height: 100px;
}
.second .left {
  float: left;
  width: 15%;
}
.second .left .photo {
  width: 50px;
  height: 50px;
  margin-top: 70px;
}
.second .right {
  float: right;
  width: 85%;
  background-color: pink;
  margin-top: 50px;
  border-radius: 5px;
}
.second .right .pFrist {
  color: black;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
}
.second .right .pLast {
  font-size: 14px;
  color: black;
  line-height: 20px;
  margin-left: 20px;
}
.second .right .Last1 {
  color: #7c7c7c;
  margin-bottom: 30px;
}
</style>
