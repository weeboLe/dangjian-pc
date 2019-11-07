<template>
  <div class="second second1">
    <a class="sec1" href="#" v-for="(s1,index) in staffHome_data.list" :key="index">
      <p class="sec1Tit">{{s1.title}}</p>
      <div class="sec1Content">
        <div class="sec1-left">
          <router-link
            class="position"
            :to="{path:'/photoDetails',query:{'datakey':s1.keyid,'chn':staffHome_data.chn}}"
          >
            <p class="sec1-leftText">{{ s1.summary }}</p>
            <span
              class="sec1-leftTime"
              :class="{'top': s1.sacleImage.length == 0}"
            >{{s1.createtime | createtime('mm-dd')}}</span>
          </router-link>
        </div>
        <div class="sec1-right">
          <router-link
            :to="{path:'/photoDetails',query:{'datakey':s1.keyid,'chn':staffHome_data.chn}}"
          >
            <img :src="base.imgurl + s1.sacleImage" v-if="s1.sacleImage" />
          </router-link>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { common } from "@/api";
import base from "@/api/base";

export default {
  name: "WorkStaffHome2",
  data() {
    return {
      staffHome_data: { list: [], chn: "" },
      base
    };
  },
  methods: {
    getjszn(val) {
      common
        .column({
          chn: val,
          curPage: 1,
          pageSize: 10
        })
        .then(res => {
          this.staffHome_data.list = res.datas;
          this.staffHome_data.chn = val;
          console.log(res);
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getjszn("whzn");
  }
};
</script>

<style scoped>
.second {
  width: 100%;
}
.second1 .sec1 {
  display: block;
  padding-top: 20px;
}
.sec1 .sec1Tit {
  font-size: 18px;
  color: #757575;
  line-height: 20px;
  border-left: 4px solid #ff0000;
  text-indent: 8px;
  margin-left: 12px;
}
.sec1 .sec1Content {
  overflow: hidden;
  margin-top: 20px;
}
.sec1Content .sec1-left {
  float: left;
  width: 78%;
  /* height: 120px; */
  color: #757575;
  position: relative;
}
.position {
  position: relative;
  display: block;
}
.sec1-left .sec1-leftText {
  font-size: 16px;
  margin-left: 25px;
  line-height: 24px;
  max-height: 75px;
  overflow: hidden;
  color: black;
}
.sec1-left .sec1-leftTime {
  font-size: 12px;
  position: absolute;
  right: 5px;
  bottom: 0;
  color: black;
}
.sec1-left .sec1-leftTime.top {
  top: 4px;
}
.sec1Content .sec1-right {
  float: left;
  width: 22%;
}
.sec1-right img {
  margin: 0 auto;
}
</style>
