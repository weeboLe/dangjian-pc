<template>
  <div class="onlineSchoolBox">
    <div class="titleBox">
      <a href="#" class="title">网上党校</a>
    </div>
    <div class="onlineSchool">
      <div class="onlineHref" v-for="(o,index) in online_data" :key="index">
        <router-link tag="a" to="/photoDetails" href="#">
          <img class="onlineImg" :src="o.onlineImage" alt />
          <p class="onlineText">{{o.onlineTit}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexNav2Left",
  data() {
    return {
      online_data: [
        {
          onlineImage: require("@/assets/images/study1.png"),
          onlineTit: "党务工作规范学习123"
        },
        {
          onlineImage: require("@/assets/images/study2.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study3.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study4.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study5.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study6.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study1.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study2.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study3.png"),
          onlineTit: "党务工作规范学习"
        },
        {
          onlineImage: require("@/assets/images/study4.png"),
          onlineTit: "党务工作规范学习"
        }
      ]
    };
  }
};
</script>

<style scoped>
.onlineSchoolBox {
  float: left;
  width: 450px;
  height: 460px;
  margin-left: 30px;
  margin-top: 15px;
  padding-right: 15px;
  border-right: 1px dashed #dcdcdc;
}
.onlineSchoolBox .titleBox {
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
}
.titleBox .title {
  font-size: 20px;
  color: black;
  font-weight: bold;
  display: inline-block;
  margin-right: 22px;
  line-height: 22px;
  padding-left: 10px;
  border-left: 4px solid #d02424;
}
.onlineSchoolBox .onlineSchool {
  width: 100%;
  height: 390px;
  overflow-y: auto;
  margin-top: 15px;
}
.onlineHref {
  display: inline-block;
  margin: 0 12px;
}
.onlineSchool .onlineHref:nth-child(3n) {
  margin-right: 0;
}
.onlineHref .onlineImg {
  width: 120px;
  height: 80px;
}
.onlineHref .onlineText {
  font-size: 15px;
  color: black;
  line-height: 20px;
  margin-top: 10px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
