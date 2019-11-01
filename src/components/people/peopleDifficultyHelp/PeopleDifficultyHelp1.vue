<template>
  <div class="second second1">
    <router-link tag="a" class="sec1" to="/photoDetails" href="#" v-for="(d1,index) in difficultyHelp_data" :key="index">
      <img class="sec1Img" :src="d1.difficultyHelpImg" alt="">
      <p class="sec1Text">{{d1.difficultyHelpText}}</p>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "PeopleDifficultyHelp1",
        data(){
          return{
            difficultyHelp_data:[
              {
                difficultyHelpImg:require('@/assets/images/people-sec1Img1.png'),
                difficultyHelpText:'全国两会解读聚焦两会PPT'
              },
              {
                difficultyHelpImg:require('@/assets/images/people-sec1Img2.png'),
                difficultyHelpText:'全国两会解读聚焦两会PPT'
              },
              {
                difficultyHelpImg:require('@/assets/images/people-sec1Img3.png'),
                difficultyHelpText:'全国两会解读聚焦两会PPT'
              },
              {
                difficultyHelpImg:require('@/assets/images/people-sec1Img4.png'),
                difficultyHelpText:'全国两会解读聚焦两会PPT'
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .second{
    width:100%;
  }
  .second1 .sec1{
    display:inline-block;
    background-color: #eeeeee;
    border-radius: 6px;
    box-shadow: 5px 5px 6px 1px #dfdede;
    margin-bottom: 50px;
    margin-right: 25px;
    margin-left: 25px;
  }
  .sec1 .sec1Text{
    font-size: 12px;
    color:#838383;
    text-indent: 10px;
    line-height: 40px;
  }
</style>
