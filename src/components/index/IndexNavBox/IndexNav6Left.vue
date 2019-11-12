<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title title1" @mouseenter="showLeft()" ref="leftBorder">
        信息通报
        <span class="titleBorder" v-show="leftTit"></span>
      </a>
      <a href="#" class="title title2" @mouseenter="showRight()" ref="rightBorder">
        党纪法规
        <span class="titleBorder" v-show="rightTit"></span>
      </a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs" v-show="leftTab">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data.list" :key="index">
          <router-link
            :to="{path:'/informDetails',query:{'datakey':l.keyid,'chn':leftHrefs_data.chn}}"
            :title="l.hrefText"
          >
            <p class="hrefText">{{l.title}}</p>
            <span class="hrefTime">{{l.createtime | createtime('mm-dd') }}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="rightTab">
        <li class="hrefLi" v-for="(r,index) in rightHrefs_data.list" :key="index">
          <router-link
            :to="{path:'/fileDetails',query:{'datakey':r.keyid,'chn':rightHrefs_data.chn}}"
            :title="r.hrefText"
          >
            <p class="hrefText">{{r.title}}</p>
            <span class="hrefTime">{{r.createtime | createtime('mm-dd') }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { common } from "@/api";
export default {
  name: "IndexNav6Left",
  data() {
    return {
      leftTab: true,
      rightTab: false,
      leftTit: true,
      rightTit: false,
      leftHrefs_data: { list: [], chn: "" },
      rightHrefs_data: { list: [], chn: "" }
    };
  },
  methods: {
    showLeft() {
      this.leftTab = true;
      this.rightTab = false;
      this.leftTit = true;
      this.rightTit = false;
    },
    showRight() {
      this.leftTab = false;
      this.rightTab = true;
      this.leftTit = false;
      this.rightTit = true;
    },
    async getzgzj(val) {
      return await common.column({
        chn: val,
        curPage: 1,
        pageSize: 3
      });
    }
  },
  mounted() {
    this.getzgzj("xxtb").then(res => {
      //
      //console.log(res);

      this.leftHrefs_data.list = res.datas;
      this.leftHrefs_data.chn = "xxtb";
    });

    this.getzgzj("djfg").then(res => {
      //
      this.rightHrefs_data.list = res.datas;
      this.rightHrefs_data.chn = "djfg";
    });
  }
};
</script>

<style scoped>
.newsBox {
  float: left;
  width: 450px;
  margin-left: 30px;
  margin-top: 15px;
  padding-right: 15px;
  border-right: 1px dashed #dcdcdc;
}
.newsBox .titleBox {
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
}
.titleBox .title {
  font-size: 20px;
  color: black;
  font-weight: bold;
  display: inline-block;
  margin-right: 20px;
  line-height: 22px;
  position: relative;
  padding-left: 10px;
}
.titleBox .title1 {
  padding-left: 10px;
  border-left: 4px solid #d02424;
}
.title .titleBorder {
  display: block;
  width: 90px;
  height: 2px;
  background-color: #fe0000;
  position: absolute;
  left: 5px;
  top: 33px;
}
.newsBox .hrefBox {
  width: 100%;
}
.hrefBox .hrefUl {
  width: 100%;
  margin-top: 15px;
  list-style: none;
}
.hrefUl .hrefLi {
  width: 100%;
  font-size: 15px;
  position: relative;
  line-height: 30px;
}
.hrefLi a {
  width: 100%;
  display: block;
  height: 40px;
  color: black;
}
.hrefUl .hrefLi a:hover {
  color: #ff0000;
}
.hrefText {
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.hrefLi .hrefTime {
  float: right;
  padding-right: 10px;
}
</style>
