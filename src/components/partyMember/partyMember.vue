<template>
  <div class="bodyLearn">
    <div class="learnContent">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">
          论坛首页
        </a>
        <span>&gt;</span>
        <a href="#" class="site">
          微社区
        </a>

      </p>
      <!--learnBox-->
      <div class="learnBox">
        <div class="firstNavs">
          <router-link tag="a" to="/party/partyMember/partyMemberClire1" class="firstNav" href="#" active-class="learnRouter">
            <p class="learnNav">党员活动</p>
          </router-link>
          <router-link tag="a" to="/party/partyMember/partyMemberClire2" class="firstNav" href="#" active-class="learnRouter">
            <p class="learnNav">党员教育</p>
          </router-link>
          <router-link tag="a" to="/party/partyMember/partyMemberClire3" class="firstNav" href="#" active-class="learnRouter">
            <p class="learnNav">党员生活</p>
          </router-link>

        </div>
        <router-view></router-view>
        <div class="right">
          <router-link tag="a" to="/message" href="#" class="send">发帖</router-link>
            <div class="title">分版切换...</div>
            <ul>
                <li>
                    <router-link tag="a" to="/party/partyMember/partyMemberClire1" href="#" active-class="curr">
                        党内活动
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/party/partyMember/partyMemberClire2" href="#" active-class="curr">
                        党员教育
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/party/partyMember/partyMemberClire3" href="#" active-class="curr">
                        党员生活
                    </router-link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PartyMember",
        components:{},
      data(){
          return{

          }
        }
    }
</script>

<style scoped>
  .bodyLearn{
    width:100%;
  }
  .bodyLearn .learnContent{
    width:1000px;
    margin:0 auto;
    min-height: 600px;
  }
  .right .send{
    float: right;
    display: block;
    background: #32A5E7;
    height: 45px;
    line-height: 45px;
    width: 185px;
    font-size: 18px;
    color: #FFF;
    text-align: center;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    -webkit-border-radius: 5px;
    padding-left: 15px;
  }

    .right{
    float: right;
    width: 200px;
    }
    .right .title{
      color: #3D63B8;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      font-weight: bold;
      padding-left: 15px;
      margin-bottom: 10px;
      margin-top:50px;
    }
    .right li{
        text-align: center;
        list-style: none;
        border-bottom: #CCC solid 1px;
    }
    .right li a{
        width: 100%;
        display: block;
        color: #666666;
        font-size: 16px;
        line-height: 40px;
    }
    .right .curr{
        color: #FFF;
        background: #32A5E7;
    }
  /*learnBox*/
  .learnBox{
    padding:14px 21px;
    margin-bottom:130px;
  }
  .firstNavs{
    float:left;
    width:70%;
  }
  .firstNavs .firstNav{
    display: inline-block;
    font-size: 15px;
    color:black;
    line-height:30px;
    padding:0 14px;
    margin: 10px 0;
    border-radius:5px;

  }
  .learnRouter{
    color:#fe4e4e;
    background-color: #ffe0e0;
  }
  .firstNavs .learnRouter .learnNav{
    color:#fe4e4e;
  }


</style>
