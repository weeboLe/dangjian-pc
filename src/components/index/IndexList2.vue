<template>
  <div class="ruler ruler1">
    <div class="titleBox rulerTitle">
      <a href="#" class="title title1" @mouseenter="showLeft()" ref="leftBorder">党建要闻</a>
      <a href="#" class="title title2" @mouseenter="showRight()" ref="rightBorder">通知公告</a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs" v-show="leftTab">
        <li class="hrefLi" v-for="(item,index) in leftHrefs_data.list" :key="index">
          <router-link
            :title="item.title"
            :to="{path:'/newsParty',query:{'datakey':item.keyid,chn:rightHrefs_data.chn}}"
          >
            <p class="hrefText">{{item.title}}</p>
            <span class="hrefTime">{{item.createtime | createtime('mm-dd')}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="rightTab">
        <li class="hrefLi" v-for="(item,index) in rightHrefs_data.list" :key="index">
          <router-link
            :to="{path:'/informDetails',query:{'datakey':item.keyid,chn:rightHrefs_data.chn}}"
            href="#"
            :title="item.title"
          >
            <p class="hrefText">{{item.title}}</p>
            <span class="hrefTime">{{item.createtime | createtime('mm-dd')}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { index, common } from "@/api";
import { dateFormat } from "@/tool";
export default {
  name: "IndexList2",
  data() {
    return {
      leftTab: true,
      rightTab: false,
      leftTit: true,
      rightTit: false,
      newsLeftImg: require("@/assets/images/newsImg.png"),
      leftHrefs_data: { list: [], chn: "" },
      rightHrefs_data: { list: [], chn: "" }
    };
  },
  methods: {
    showLeft() {
      this.leftTab = true;
      this.rightTab = false;
      this.$refs.leftBorder.style.borderBottom = "2px solid #fe0000";
      this.$refs.rightBorder.style.borderBottom = "2px solid transparent";
    },
    showRight() {
      this.leftTab = false;
      this.rightTab = true;
      this.$refs.leftBorder.style.borderBottom = "2px solid transparent";
      this.$refs.rightBorder.style.borderBottom = "2px solid #fe0000";
    },
    getTzgg() {
      common
        .column({ chn: "djyw", curPage: 1, pageSize: 6 })
        .then(res => {
          this.leftHrefs_data.list = res.datas;
          this.rightHrefs_data.chn = "djyw";
        })
        .catch(e => {});
    },
    gettzggd() {
      common
        .column({ chn: "tzggd", curPage: 1, pageSize: 6 })
        .then(res => {
          this.rightHrefs_data.list = res.datas;
          this.rightHrefs_data.chn = "tzggd";
        })
        .catch(e => {});
    }
  },

  mounted() {
    this.getTzgg();
    this.gettzggd();
  },
  filters: {
    createtime(val) {
      var date = new Date(val);
      return dateFormat("mm-dd", date);
    }
  }
};
</script>

<style scoped>
.ruler {
  width: 100%;
  height: 300px;
}
.ruler .rulerTitle {
  border-bottom: 1px solid #e5e5e5;
}
.rulerTitle .title {
  padding: 0 15px;
}
.titleBox .title {
  font-size: 16px;
  color: #fe0200;
  display: inline-block;
  margin-right: 22px;
  line-height: 36px;
  border-bottom: 2px solid #fe0000;
  position: relative;
}
.titleBox .title1 {
  border-bottom: 2px solid #fe0000;
}
.titleBox .title2 {
  border-bottom: 2px solid transparent;
}
.hrefBox {
  width: 100%;
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
