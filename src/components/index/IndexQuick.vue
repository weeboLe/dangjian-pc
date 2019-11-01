<template>
  <!--quick-->
  <div class="bodyQucik">
    <div class="quickBox">
      <div class="quickTitleBox">
        <p class="quickTitle">快捷入口</p>
      </div>
      <div class="quickEnters">
        <router-link  tag="a" to="/membershipForm" href="#" class="quickEnter">
          <div class="enterImg enterImg1"></div>
          <p class="enterText">网上在线入党</p>
        </router-link>
        <router-link tag="a" to="/member/memberTransfer" class="quickEnter">
          <div class="enterImg enterImg2"></div>
          <p class="enterText">组织关系转接</p>
        </router-link>
        <router-link tag="a" to="/member/memberDues" class="quickEnter">
          <div class="enterImg enterImg3"></div>
          <p class="enterText">党费查询缴纳</p>
        </router-link>
        <router-link tag="a" to="/supervise/superviseInspect/superviseInspect1" class="quickEnter">
          <div class="enterImg enterImg4"></div>
          <p class="enterText">纪检举报</p>
        </router-link>
        <router-link tag="a" to="/difficultApply" class="quickEnter">
          <div class="enterImg enterImg5"></div>
          <p class="enterText">困难党员申请</p>
        </router-link>
        <router-link tag="a" to="/people/peopleDifficultyHelp/peopleDifficultyHelp1" class="quickEnter">
          <div class="enterImg enterImg6"></div>
          <p class="enterText">志愿活动申请</p>
        </router-link>
        <router-link tag="a" to="/party/partyMember/partyMemberClire1" class="quickEnter">
          <div class="enterImg enterImg7"></div>
          <p class="enterText">网上投票</p>
        </router-link>
        <router-link tag="a" to="/forum" class="quickEnter">
          <div class="enterImg enterImg8"></div>
          <p class="enterText">党建论坛</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexQuick"
    }
</script>

<style scoped>
  /*quick*/
  .bodyQucik{
    width:100%;
  }
  .bodyQucik .quickBox{
    width:1000px;
    margin:0 auto;
  }
  .quickTitleBox .quickTitle{
    width:120px;
    height:30px;
    background-color: #fe0000;
    color:white;
    box-shadow: 5px -5px 0px 0px #d6d6d6;
    margin-top:40px;
    font-size:18px;
    line-height:30px;
    text-align: center;
  }
  .quickBox .quickEnters{
    width:100%;
    padding-top:20px;
    padding-bottom:28px;
    overflow: hidden;
  }
  .quickEnters .quickEnter{
    float:left;
    width:122px;
    padding:20px 0 10px 0;
    border-radius: 10px;
  }
  .quickEnters .quickEnter:hover{
    background-color: #f5e7ce;
  }
  .quickEnter .enterImg{
    width:122px;
    height:43px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
  }
  .quickEnter .enterImg1{
    background-image: url(~@/assets/images/quickEnter1.png);
  }
  .quickEnter .enterImg2{
    background-image: url(~@/assets/images/quickEnter2.png);
  }
  .quickEnter .enterImg3{
    background-image: url(~@/assets/images/quickEnter3.png);
  }
  .quickEnter .enterImg4{
    background-image: url(~@/assets/images/quickEnter4.png);
  }
  .quickEnter .enterImg5{
    background-image: url(~@/assets/images/quickEnter5.png);
  }
  .quickEnter .enterImg6{
    background-image: url(~@/assets/images/quickEnter6.png);
  }
  .quickEnter .enterImg7{
    background-image: url(~@/assets/images/quickEnter7.png);
  }
  .quickEnter .enterImg8{
    background-image: url(~@/assets/images/quickEnter8.png);
  }
  .quickEnter .enterText{
    font-size:14px;
    color:black;
    line-height:46px;
    text-align: center;
  }
</style>
