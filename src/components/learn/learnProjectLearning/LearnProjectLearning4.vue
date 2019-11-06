<template>
  <div class="second second1">
    <router-link
      class="sec1"
      :to="{path:'/photoDetails',query:{'datakey':o.keyid,'chn':onlineSchool1_data.chn}}"
      v-for="(o ,index) in onlineSchool1_data.list"
      :key="index"
    >
      <img class="sec1Img" :src=" base.imgurl + o.sacleImage" v-if="o.sacleImage.length != 0" />
      <p class="sec1Text">{{o.title}}</p>
      <div class="sec1Bottom">
        <p class="sec1Time">{{o.onlineSchool1Time}}</p>
        <p class="sec1Add">
          <span class="studyNum">{{o.browser}}</span>
          人已查看
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import base from "@/api/base";
import { common } from "@/api";
export default {
  name: "LearnProjectLearning4",
  data() {
    return {
      onlineSchool1_data: {
        list: [],
        chn: ""
      },
      base
    };
  },
  methods: {
    getshyk() {
      common
        .column({
          chn: "shyk",
          curPage: 1,
          pageSize: 6
          // ticket: "7"
        })
        .then(res => {
          this.onlineSchool1_data.list = res.datas;
          this.onlineSchool1_data.chn = "shyk";
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getshyk();
  }
};
</script>

<style scoped>
.second {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.second1 .sec1 {
  width: 43%;
  display: inline-block;
  background-color: #eeeeee;
  border-radius: 6px;
  box-shadow: 5px 5px 6px 1px #dfdede;
  margin: 20px 30px 50px;
}
.sec1 .sec1Img {
  width: 100%;
  height: 200px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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
