<template>
  <!--news-->
  <div class="bodyNews">
    <div class="news">
      <div class="newsImg">
        <img :src="newsLeftImg" alt />
        <!--<img src="~@/assets/images/newsImg.png" alt="">-->
      </div>
      <index-list1></index-list1>
    </div>
  </div>
</template>

<script>
import IndexList1 from "./IndexList1";
export default {
  name: "IndexNews",
  components: { IndexList1 },
  data() {
    return {
      newsLeftImg: require("@/assets/images/newsImg.png")
    };
  }
};
</script>

<style scoped>
/*news*/
.bodyNews {
  width: 100%;
  height: 350px;
}
.news {
  width: 1000px;
  margin: 0 auto;
  border-top: 2px solid #fe0000;
  background-color: #f5f5f5;
  overflow: hidden;
}
.news .newsImg {
  float: left;
}
.newsImg img {
  width: 600px;
  height: 300px;
  margin: 15px 15px 13px 16px;
}
</style>
