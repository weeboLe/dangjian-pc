<template>
  <div class="study study2">
    <div class="studyTit">
      <p class="studyTitText">党员风采</p>
      <router-link tag="a" to="/member" href="#" class="studyMore">更多&gt;&gt;</router-link>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data.list" :key="index">
          <router-link
            :title="l.hrefText"
            :to="{path:'/informDetails',query:{'datakey':l.keyid,'chn':leftHrefs_data.chn}}"
          >
            <p class="hrefText">{{l.title}}</p>
            <span class="hrefTime">{{l.createtime | createtime('mm-dd')}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { index, common } from "@/api";
export default {
  name: "IndexList4",
  data() {
    return {
      leftHrefs_data: { list: [], chn: "" }
    };
  },
  methods: {
    getDyfc() {
      common
        .column({
          chn: "dyfc",
          curPage: 1,
          pageSize: 6
          // ticket: "7"
        })
        .then(res => {
          this.leftHrefs_data.list = res.datas;
          this.leftHrefs_data.chn = "dyfc";
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getDyfc();
  }
};
</script>

<style scoped>
.study2 {
  padding-top: 40px;
}
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
.hrefBox {
  width: 100%;
  height: 240px;
}
.hrefBox .hrefUl {
  width: 100%;
  margin-top: 16px;
}
.hrefUl .hrefLi {
  width: 100%;
  font-size: 13px;
  position: relative;
  overflow: hidden;
  line-height: 38px;
  display: block;
}
.hrefLi a {
  /*overflow: hidden;*/
  width: 100%;
  display: block;
  height: 40px;
}
.hrefLi .hrefText {
  width: 295px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /*float:left;*/
  margin-right: 15px;
  color: black;
  display: inline-block;
}
.hrefLi .hrefTime {
  float: right;
  padding-right: 5px;
  color: black;
}
</style>
