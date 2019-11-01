<template>
  <div class="onlineSchoolBox">
    <div class="titleBox">
      <a href="#" class="title">
        版面一
      </a>
    </div>
    <ul class="frmRseMask">
      <li class="maskUnder">
        <router-link tag="a" to="/party" href='#' >
          <img class="mskUdrImg" src="~@/assets/images/maskLayer1.png" alt="">
          <p class="mskUdrName">党员圈</p>
          <p class="mskUdrNum">今日：<span>0</span>&nbsp;&nbsp;&nbsp;帖数：<span>29</span></p>
        </router-link>
      </li>
      <li class="maskUnder">
        <router-link tag="a" to="/party" href='#'>
          <img class="mskUdrImg" src="~@/assets/images/maskLayer1.png" alt="">
          <p class="mskUdrName">党员意见</p>
          <p class="mskUdrNum">今日：<span>0</span>&nbsp;&nbsp;&nbsp;帖数：<span>29</span></p>
        </router-link>
      </li>
      <li class="maskUnder">
        <router-link tag="a" to="/party" href='#' >
          <img class="mskUdrImg" src="~@/assets/images/maskLayer1.png" alt="">
          <p class="mskUdrName">微投票</p>
          <p class="mskUdrNum">今日：<span>0</span>&nbsp;&nbsp;&nbsp;主题：<span>0</span></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "IndexNav8Left"
    }
</script>

<style scoped>
  .onlineSchoolBox{
    float:left;
    width:450px;
    height:460px;
    margin-left:30px;
    margin-top: 15px;
    padding-right: 15px;
    border-right: 1px dashed #dcdcdc;
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
  .onlineSchoolBox .frmRseMask{
    width:100%;
    margin-top: 15px;
  }
  .frmRseMask .maskUnder{
    width:180px;
    height:120px;
    background-color: #7ecef4;
    color:white;
    position: relative;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px #aaa9a9;
    display: inline-block;
    margin:20px;
  }
  .frmRseMask .maskUnder:first-child{
    background-color: #7ecef4;
  }
  .frmRseMask .maskUnder:nth-child(2){
    background-color: #84ccc9;
  }
  .frmRseMask .maskUnder:nth-child(3){
    background-color: #acd598;
  }
  .maskUnder .mskUdrImg{
    width:60px;
    height:60px;
    float: left;
    margin:10px;
  }
  .maskUnder .mskUdrName{
    font-size: 20px;
    float: left;
    line-height: 67px;
    margin-top: 10px;
    color:white;
  }
  .maskUnder .mskUdrNum{
    font-size: 16px;
    position: absolute;
    left:15px;
    bottom:5px;
    color:white;
  }
</style>
