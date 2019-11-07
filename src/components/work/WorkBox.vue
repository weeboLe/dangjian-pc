<template>
  <!--learn-->
  <div class="bodyLearn">
    <div class="learnContent">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">群团工作</a>
      </p>
      <!--learnBox-->
      <div class="learnBox">
        <div class="firstNavs">
          <router-link
            tag="a"
            to="/work/workStaffHome"
            class="firstNav"
            href="#"
            active-class="staffHomeRouter"
          >职工之家</router-link>
          <router-link
            tag="a"
            to="/work/workLeagueFlag"
            class="firstNav"
            href="#"
            active-class="staffHomeRouter"
          >团旗飘飘</router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkBox",
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
}
.learnContent .learnBox {
  border: 1px solid #dcdcdc;
}
/*learnBox*/
.learnBox {
  padding: 14px 21px;
  margin-bottom: 130px;
  padding-bottom: 50px;
  min-height: 500px;
}
.learnBox .firstNavs {
}
.firstNavs .firstNav {
  display: inline-block;
  font-size: 15px;
  color: black;
  line-height: 30px;
  padding: 0 14px;
  border-radius: 3px;
}
.firstNavs .staffHomeRouter {
  color: #fe4e4e;
  background-color: #ffe0e0;
}
</style>
