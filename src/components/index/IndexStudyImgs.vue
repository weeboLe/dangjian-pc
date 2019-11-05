<template>
  <div class="study study1">
    <div class="studyTit">
      <p class="studyTitText">专题学习</p>
      <router-link
        to="/learn/learnProjectLearning/LearnProjectLearning1"
        class="studyMore"
      >更多&gt;&gt;</router-link>
    </div>
    <div class="studyImgBox">
      <router-link
        :to="{ path:'/photoDetails', query:{ 'datakey': item.keyid,'chn': ztData.chn } }"
        class="studyImg"
        v-for="(item) in ztData.list"
        :key="item.keyid"
      >
        <img :src="base.imgurl + item.sacleImage" v-if="item.sacleImage.length != 0" />
        <div class="studyContent" v-else>{{item.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { index, common } from "@/api";
import base from "@/api/base";
export default {
  name: "IndexStudyImgs",
  data() {
    return {
      ztData: { list: [], chn: "" },
      base
    };
  },
  methods: {
    getatlm() {
      common
        .column({
          chn: "shyk",
          curPage: 1,
          pageSize: 6
        })
        .then(res => {
          this.ztData.list = res.datas;
          this.ztData.chn = "shyk";
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getatlm();
  }
};
</script>

<style scoped>
.study .studyTit {
  background-color: #f4f4f4;
  border-bottom: 1px solid #e5e5e5;
}
.studyTit .studyTitText {
  font-size: 16px;
  color: white;
  line-height: 36px;
  padding: 0 16px;
  background-color: #fe0000;
  display: inline-block;
}
.studyTit .studyMore {
  font-size: 14px;
  color: #979797;
  float: right;
  margin-right: 16px;
  line-height: 36px;
}
.study .studyImgBox {
  overflow: hidden;
  min-height: 330px;
}

.studyImgBox .studyImg {
  width: 200px;
  height: 90px;
  margin-top: 20px;
  overflow: hidden;
}

.studyContent {
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.studyImgBox .studyImg:nth-child(n) {
  float: left;
  margin-left: 5px;
}
.studyImgBox .studyImg:nth-child(2n) {
  float: right;
  margin-right: 5px;
}
</style>
