<template>
  <!--frame-->
  <div class="bodyFrame">
    <div class="frameBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">党员管理</a>
        <span>&gt;</span>
        <a href="#" class="site">组织架构</a>
      </p>
      <div class="frame">
        <div class="frameTit">
          <p>组织架构</p>
        </div>
        <!-- <iframe src="pageContent/renderNoAuth/deptTree?par_keyid=" frameborder="0" style="width:100%;height:800px;"> -->

        <!-- </iframe> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberFrameBox",
  data() {
    return {
      url
    };
  }
};
</script>

<style scoped>
.bodyFrame {
  width: 100%;
}
.bodyFrame .frameBox {
  width: 1000px;
  margin: 0 auto 200px;
}
.frameBox .frame {
  border: 1px solid #dcdcdc;
  min-height: 600px;
}
.frame .frameTit {
  margin: 10px 5px;
  border-bottom: 1px solid #dcdcdc;
  padding: 15px 0 15px 15px;
}
.frameTit p {
  font-size: 20px;
  line-height: 20px;
  border-left: 4px solid #ff0000;
  text-indent: 8px;
}
</style>
