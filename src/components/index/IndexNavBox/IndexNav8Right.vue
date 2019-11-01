<template>
  <div class="onlineSchoolBox">
    <div class="titleBox">
      <a href="#" class="title">
        版面二
      </a>
    </div>
    <div class="frmRse2Con">
      <router-link tag="a" to="/work/workStaffHome/workStaffHome1" class="frmRse2Href">
        <img  src="~@/assets/images/maskLayer3.png" alt="">
        <p>党旗领航</p>
      </router-link>
      <router-link tag="a" to="/work/workStaffHome/workStaffHome1" class="frmRse2Href">
        <img  src="~@/assets/images/maskLayer2.png" alt="">
        <p>党员意见</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "IndexNav8Right"
    }
</script>

<style scoped>
  .onlineSchoolBox{
    float:left;
    width:450px;
    height:460px;
    margin-left:30px;
    margin-top: 15px;
  }
  .onlineSchoolBox .titleBox{
    width:100%;
    border-bottom: 1px solid #dcdcdc;
  }
  .titleBox .title{
    font-size:20px;
    color:black;
    font-weight: bold;
    display: inline-block;
    margin-right:22px;
    line-height:22px;
    padding-left:10px;
    border-left: 4px solid #d02424;
  }
  .onlineSchoolBox .frmRse2Con{
    width:100%;
    margin-top: 15px;
    display:inline-block;
  }

  .frmRse2Con .frmRse2Href{
    width:180px;
    height:120px;
    background-color: #7ecef4;
    color:white;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px #aaa9a9;
    display: inline-block;
    margin:20px;
  }
  .frmRse2Con .frmRse2Href:first-child{
    background-color: #7ecef4;
  }
  .frmRse2Con .frmRse2Href:nth-child(2){
    background-color: #84ccc9;
  }
  .frmRse2Con .frmRse2Href:nth-child(3){
    background-color: #acd598;
  }
  .frmRse2Href img{
    width:60px;
    height:60px;
    margin:15px auto 0;
  }
  .frmRse2Href p{
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    color:white;
  }
</style>
