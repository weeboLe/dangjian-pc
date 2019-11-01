<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title title1" @mouseenter="showLeft()" ref="leftBorder">
        党建要闻
        <span class="titleBorder" v-show="leftTit"></span>
      </a>
      <a href="#" class="title title2" @mouseenter="showRight()" ref="rightBorder">
        通知公告
        <span class="titleBorder" v-show="rightTit"></span>
      </a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs" v-show="leftTab">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data.list" :key="index">
          <router-link
            tag="a"
            :to="{path:'/newsParty',query:{'dataid':l.keyid,chn:leftHrefs_data.chn}}"
            :title="l.hrefText"
          >
            <p class="hrefText">{{l.title}}</p>
            <span class="hrefTime">{{l.createtime | createtime}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="rightTab">
        <li class="hrefLi" v-for="(r,index) in rightHrefs_data" :key="index">
          <router-link tag="a" to="/informDetails" href="#" :title="r.hrefText">
            <p class="hrefText">{{r.title}}</p>
            <span class="hrefTime">{{r.createtime}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { index } from "@/api";
import { dateFormat } from "@/tool";

export default {
  name: "IndexList1",
  data() {
    return {
      leftTab: true,
      rightTab: false,
      leftTit: true,
      rightTit: false,
      leftHrefs_data: { list: [], chn: "" },
      rightHrefs_data: [
        {
          title: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          createtime: "8-24"
        },
        {
          title: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          createtime: "8-24"
        },
        {
          title: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          createtime: "8-24"
        },
        {
          title: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          createtime: "8-24"
        },
        {
          title: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          createtime: "8-24"
        },
        {
          title: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          createtime: "8-24"
        },
        {
          title: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          createtime: "8-24"
        }
      ]
    };
  },
  methods: {
    showLeft() {
      this.leftTab = true;
      this.rightTab = false;
      this.leftTit = true;
      this.rightTit = false;
      this.$refs.leftBorder.style.borderBottom = "2px solid #fe0000";
      this.$refs.rightBorder.style.borderBottom = "2px solid transparent";
    },
    showRight() {
      this.leftTab = false;
      this.rightTab = true;
      this.leftTit = false;
      this.rightTit = true;
      this.$refs.leftBorder.style.borderBottom = "2px solid transparent";
      this.$refs.rightBorder.style.borderBottom = "2px solid #fe0000";
    },
    getdjyw() {
      index
        .notice({ chn: "djyw", curPage: 1, pageSize: 7 })
        .then(res => {
          this.leftHrefs_data.list = res.datas;
          this.leftHrefs_data.chn = "djyw";
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getdjyw();
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
.newsBox {
  float: left;
  margin-left: 15px;
}
.newsBox .titleBox {
  width: 100%;
}
.titleBox .title {
  font-size: 16px;
  color: #fe0200;
  display: inline-block;
  margin-right: 22px;
  line-height: 36px;
  position: relative;
}
.titleBox .title1 {
  border-bottom: 2px solid #fe0000;
}
.titleBox .title2 {
  border-bottom: 2px solid transparent;
}
.title .titleBorder {
  display: block;
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  border-top: 6px solid #fe0000;
  position: absolute;
  left: 50%;
  top: 38px;
  margin-left: -4px;
}
.newsBox .hrefBox {
  width: 100%;
}
.hrefBox .hrefUl {
  width: 100%;
  margin-top: 16px;
}
.hrefUl .hrefLi {
  width: 340px;
  font-size: 13px;
  position: relative;
  overflow: hidden;
  line-height: 38px;
  border-bottom: 1px dashed #c6c6c6;
  display: block;
}
.hrefLi a {
  /*overflow: hidden;*/
  width: 340px;
  display: block;
  height: 40px;
}
.hrefLi .hrefText {
  width: 260px;
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
