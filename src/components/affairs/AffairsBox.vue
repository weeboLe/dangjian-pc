<template>
  <!--affairs-->
  <div class="bodyAffairs">
    <div class="affairsBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">党务管理</a>
      </p>
      <div class="affairs">
        <ul class="affairsLeft">
          <li>
            <a class="afrNav" href="javascript:;" @click="getdwgl('dwgk')">党务公开</a>
          </li>
          <li>
            <a class="afrNav" href="javascript:;" @click="getdwgl('dnjc')">党内奖惩</a>
          </li>
          <li>
            <a class="afrNav" href="javascript:;" @click="getdwgl('djkh')">党建考核</a>
          </li>
        </ul>
        <div class="affairsRight">
          <div class="afrRt afrRt1">
            <div class="afrTitle">
              <p v-if="dwtitle =='dwgk'">党务公开</p>
              <p v-if="dwtitle =='dnjc'">党内奖惩</p>
              <p v-if="dwtitle =='djkh'">党建考核</p>
            </div>
            <div class="afrCon">
              <router-link
                class="afrConHref"
                v-for="(a1,index) in afrRtPage1_data.list"
                :key="index"
                :to="{path:'/informDetails',query:{'datakey':a1.keyid,'chn':afrRtPage1_data.chn }}"
              >
                <p>{{a1.title}}</p>
                <span>{{a1.createtime | createtime('mm-dd') }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from "@/api";
export default {
  name: "AffairsBox",
  data() {
    return {
      afrRtPage1_data: { list: [], chn: "" },
      dwtitle: ""
    };
  },
  methods: {
    getdwgl(val) {
      common
        .column({
          chn: val,
          curPage: 1,
          pageSize: 10
        })
        .then(res => {
          this.afrRtPage1_data.list = res.datas;
          this.afrRtPage1_data.chn = val;
          this.dwtitle = val;
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getdwgl("dwgk");
  }
};
</script>

<style scoped>
.bodyAffairs {
  width: 100%;
}
.bodyAffairs .affairsBox {
  width: 1000px;
  margin: 0 auto;
}
.affairsBox .affairs {
  width: 100%;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  margin-bottom: 130px;
}
.affairs .affairsLeft {
  float: left;
  background-color: #eeeeee;
  padding: 20px;
  width: 160px;
  height: 600px;
  list-style-type: none;
}
.affairsLeft .afrNav {
  display: block;
  font-size: 20px;
  color: white;
  margin-bottom: 16px;
  box-shadow: -3px 6px 5px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  background-image: url("~@/assets/images/afrNav.png");
  background-size: 160px 46px;
  width: 160px;
  height: 46px;
  line-height: 46px;
}
.affairs .affairsRight {
  width: 800px;
  float: right;
  min-height: 500px;
  max-height: 1000px;
}
.afrTitle {
  margin: 10px 5px 0 20px;
  border-bottom: 1px solid #d2d2d2;
  overflow: hidden;
}
.afrTitle p {
  font-size: 20px;
  line-height: 20px;
  border-left: 4px solid red;
  text-indent: 10px;
  margin: 15px 0;
  margin-left: 5px;
}
.afrCon {
  width: 100%;
  padding-top: 15px;
  overflow-y: auto;
  padding-bottom: 20px;
}
.afrCon .afrConHref {
  display: block;
  font-size: 16px;
  overflow: hidden;
  line-height: 26px;
}
.afrConHref p {
  color: black;
  float: left;
  margin-left: 40px;
}
.afrConHref span {
  color: #ababab;
  float: right;
  margin-right: 25px;
}
</style>
