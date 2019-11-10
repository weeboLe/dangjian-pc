<template>
  <!--banner-->
  <div class="bodyBanner">
    <img class="banner" :src="indexBannerImg" alt />
  </div>
</template>

<script>
export default {
  name: "IndexBanner",
  data() {
    return {
      indexBannerImg: require("@/assets/images/index-banner.png")
    };
  }
};
</script>

<style scoped>
/*banner*/
.bodyBanner {
  width: 100%;
}
.banner {
  min-width: 1000px;
  height: 100px;
  margin: 40px auto 30px;
}
</style>
