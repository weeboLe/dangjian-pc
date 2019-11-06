<template>
  <!--learn-->
  <div class="bodyLearn">
    <div class="learnContent">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">学习中心</a>
      </p>
      <!--learnBox-->
      <div class="learnBox">
        <div class="firstNavs">
          <router-link
            tag="a"
            to="/learn/LearnOnlineSchool"
            class="firstNav"
            href="#"
            active-class="learnRouter"
          >
            <p class="learnNav">网上党校</p>
          </router-link>
          <router-link
            tag="a"
            to="/learn/learnProjectLearning"
            class="firstNav"
            href="#"
            active-class="learnRouter"
          >
            <p class="learnNav">专题学习</p>
          </router-link>
          <!--<router-link tag="a" to="/learn/learnStudyNotes" class="firstNav" href="#" active-class="learnRouter">
            <p class="learnNav">学习心得</p>
          </router-link>-->
          <router-link
            tag="a"
            to="/learn/learnOnlineTest"
            class="firstNav"
            href="#"
            active-class="learnRouter"
          >
            <p class="learnNav">在线考试</p>
          </router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LearnOnlineSchool from "./LearnOnlineSchool";
export default {
  name: "LearnContent",
  components: { LearnOnlineSchool },
  data() {
    return {};
  }
};
</script>

<style scoped>
.bodyLearn {
  width: 100%;
}
.bodyLearn .learnContent {
  width: 1000px;
  margin: 0 auto;
  min-height: 600px;
}
.learnContent .learnBox {
  border: 1px solid #dcdcdc;
}
/*learnBox*/
.learnBox {
  padding: 14px 21px;
  margin-bottom: 130px;
}
.firstNavs .firstNav {
  display: inline-block;
  font-size: 15px;
  color: black;
  line-height: 30px;
  padding: 0 14px;
  border-radius: 5px;
}
.learnRouter {
  color: #fe4e4e;
  background-color: #ffe0e0;
}
.firstNavs .learnRouter .learnNav {
  color: #fe4e4e;
}
</style>
