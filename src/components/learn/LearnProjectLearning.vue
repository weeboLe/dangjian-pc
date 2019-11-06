<template>
  <div class="first_s">
    <div class="first first1">
      <div class="secondNavs">
        <router-link
          to="/learn/learnProjectLearning/LearnProjectLearning1"
          active-class="ProjectLearningRouter"
          class="secondNav"
        >党性体检</router-link>
        <router-link
          to="/learn/learnProjectLearning/LearnProjectLearning2"
          active-class="ProjectLearningRouter"
          class="secondNav"
        >十九大专题</router-link>
        <router-link
          to="/learn/learnProjectLearning/LearnProjectLearning3"
          active-class="ProjectLearningRouter"
          class="secondNav"
        >两学一做</router-link>
        <router-link
          to="/learn/learnProjectLearning/LearnProjectLearning4"
          active-class="ProjectLearningRouter"
          class="secondNav"
        >三会一课</router-link>
      </div>
      <div class="second_s">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnProjectLearning",
  data() {
    return {};
  }
};
</script>

<style scoped>
.secondNavs {
  margin-top: 12px;
  margin-bottom: 35px;
}
.secondNavs .secondNav {
  font-size: 14px;
  color: black;
  border-bottom: 1px solid white;
  margin-left: 18px;
  line-height: 20px;
}
.first .secondNavs .ProjectLearningRouter {
  color: #ff0000;
  border-bottom: 1px solid #ff0000;
}
</style>
