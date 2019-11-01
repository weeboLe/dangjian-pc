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
      <router-link tag="a" to="/photoDetails" href="#" class="studyImg">
        <img src="~@/assets/images/study1.png" alt />
      </router-link>
      <router-link tag="a" to="/photoDetails" href="#" class="studyImg">
        <img src="~@/assets/images/study2.png" alt />
      </router-link>
      <router-link tag="a" to="/photoDetails" href="#" class="studyImg">
        <img src="~@/assets/images/study3.png" alt />
      </router-link>
      <router-link tag="a" to="/photoDetails" href="#" class="studyImg">
        <img src="~@/assets/images/study4.png" alt />
      </router-link>
      <router-link tag="a" to="/photoDetails" href="#" class="studyImg">
        <img src="~@/assets/images/study5.png" alt />
      </router-link>
      <router-link tag="a" to="/photoDetails" href="#" class="studyImg">
        <img src="~@/assets/images/study6.png" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexStudyImgs"
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
}
.studyImgBox .studyImg {
  width: 200px;
  height: 90px;
  margin-top: 20px;
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
