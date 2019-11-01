<template>
  <div class="second second1">
    <a class="sec1" href="#" v-for="(s1,index) in staffHome_data" :key="index">
      <p class="sec1Tit">{{s1.staffHomeTitle}}</p>
      <div class="sec1Content">
        <div class="sec1-left">
          <router-link tag="a" to="/photoDetails" href="#">
            <p class="sec1-leftText">{{s1.staffHomeText}}</p>
            <span class="sec1-leftTime">{{s1.staffHomeTime}}</span>
          </router-link>
        </div>
        <div class="sec1-right">
          <router-link tag="a" to="/photoDetails" href="#">
            <img :src="s1.staffHomeImg" alt="">
          </router-link>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
    export default {
        name: "SuperviseHonest1",
      data(){
        return{
          staffHome_data:[
            {
              staffHomeTitle:'廉洁建设-廉政时讯',
              staffHomeText:'辽宁的基本情况，省委组织部副部长赵建华已经在开班式上做了介绍，这堂课由我来讲《加强新形势下社区党建工作》，应该说我压力比较大。辽宁的社区党建工作论点上比不过上海、北京、浙江、江苏和湖北等省份，论面也赶不上吉林，但是辽宁一直在努力，努力干在实处，走在前列。为了推动辽宁省基层组织建设全面进步、全面过硬、2015年7月24日，',
              staffHomeTime:'08/06',
              staffHomeImg:require('@/assets/images/sec1-right.png')
            },
            {
              staffHomeTitle:'廉洁建设-廉政时讯',
              staffHomeText:'辽宁的基本情况，省委组织部副部长赵建华已经在开班式上做了介绍，这堂课由我来讲《加强新形势下社区党建工作》，应该说我压力比较大。辽宁的社区党建工作论点上比不过上海、北京、浙江、江苏和湖北等省份，论面也赶不上吉林，但是辽宁一直在努力，努力干在实处，走在前列。为了推动辽宁省基层组织建设全面进步、全面过硬、2015年7月24日，',
              staffHomeTime:'08/06',
              staffHomeImg:require('@/assets/images/sec1-right.png')
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .second_s .second{
    width:100%;
  }
  .second1 .sec1{
    display: block;
    padding-top: 20px;
  }
  .sec1 .sec1Tit{
    font-size: 18px;
    color:#757575;
    line-height: 20px;
    border-left:4px solid #ff0000;
    text-indent: 8px;
    margin-left: 12px;
  }
  .sec1 .sec1Content{
    overflow: hidden;
    margin-top: 20px;
  }
  .sec1Content .sec1-left{
    float:left;
    width:78%;
    height:120px;
    color:#757575;
    position: relative;
  }
  .sec1-left .sec1-leftText{
    font-size: 16px;
    margin-left:25px;
    line-height: 24px;
    height:75px;
    overflow: hidden;
    color:black;
  }
  .sec1-left .sec1-leftTime{
    font-size: 12px;
    position: absolute;
    right:5px;
    bottom:5px;
    color:black;
  }
  .sec1Content .sec1-right{
    float: left;
    width:22%;
  }
  .sec1-right img{
    margin:0 auto;
  }
</style>
