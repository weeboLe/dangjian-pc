<template><!--endBanner-->
  <div class="bodyEndBanner">
    <img class="endBanner" :src="indexEndBannerImg" alt="">
  </div>
</template>

<script>
    export default {
        name: "IndexEndBanner",
      data(){
          return{
            indexEndBannerImg:require('@/assets/images/index-endBanner.png')
          }
      }
    }
</script>

<style scoped>
  /*endBanner*/
  .bodyEndBanner{
    width:100%;
  }
  .bodyEndBanner .endBanner{
    width:1000px;
    margin:30px auto 80px;
  }
</style>
