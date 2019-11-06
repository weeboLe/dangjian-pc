<template>
  <div class="second second1">
    <router-link
      class="sec1"
      :to="{path:'/photoDetails',query:{'datakey':o.keyid,'chn':onlineSchool1_data.chn}}"
      v-for="(o,index) in onlineSchool1_data.list"
      :key="index"
    >
      <img class="sec1Img" :src="base.imgurl + o.sacleImage" />
      <p class="sec1Text">{{ o.title }}</p>
      <div class="sec1Bottom">
        <!-- <p class="sec1Time">{{o.title}}</p> -->
        <p class="sec1Add">
          <span class="studyNum">{{ o.onlineSchool1Num }}</span>
          人已学习
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { common } from "@/api";
import base from "@/api/base";
export default {
  name: "LearnOnlineSchool1",
  data() {
    return {
      onlineSchool1_data: { list: [], chn: "" },
      base
    };
  },

  methods: {
    getwsdx() {
      common
        .column({
          chn: "wsdx",
          curPage: 1,
          pageSize: 6,
          fileClassify: 1
        })
        .then(res => {
          this.onlineSchool1_data.list = res.datas;
          this.onlineSchool1_data.chn = "wsdx";
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getwsdx();
  }
};
</script>

<style scoped>
.second {
  width: 100%;
}
.second1 .sec1 {
  display: inline-block;
  background-color: #eeeeee;
  border-radius: 6px;
  box-shadow: 5px 5px 6px 1px #dfdede;
  margin-bottom: 50px;
  margin-right: 50px;
  margin-left: 50px;
}
.sec1 .sec1Img {
  width: 360px;
  height: 300px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.second .sec1:nth-child(2n) {
  margin-right: 0;
}
.sec1 .sec1Text {
  font-size: 12px;
  color: #838383;
  text-indent: 10px;
  line-height: 40px;
}
.sec1 .sec1Bottom {
  padding-bottom: 10px;
}
.sec1Bottom .sec1Time {
  font-size: 11px;
  color: white;
  background-color: #b5b5b5;
  line-height: 25px;
  padding: 0 10px;
  display: inline-block;
  border-radius: 3px;
  margin-left: 10px;
}
.sec1Bottom .sec1Add {
  font-size: 11px;
  color: #838383;
  float: right;
  margin-right: 10px;
}
.sec1Add .studyNum {
  color: #fd3f3f;
}
</style>
