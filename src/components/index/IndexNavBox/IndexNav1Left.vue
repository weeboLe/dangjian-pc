<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title title1" @mouseenter="showLeft()" ref="leftBorder">
        通知公告
        <span class="titleBorder" v-show="leftTit"></span>
      </a>
      <a href="#" class="title title2" @mouseenter="showRight()" ref="rightBorder">
        制度文件
        <span class="titleBorder" v-show="rightTit"></span>
      </a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs" v-show="leftTab">
        <li class="hrefLi" v-for="(item,index) in leftHrefs_data.list" :key="index">
          <router-link
            :to="{path:'/informDetails',query:{'datakey':item.keyid,chn:leftHrefs_data.chn}}"
            href="#"
            :title="item.title"
          >
            <p class="hrefText">{{item.title}}</p>
            <span class="hrefTime">{{item.createtime | createtime('mm-dd')}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="rightTab">
        <li class="hrefLi" v-for="(item,index) in rightHrefs_data.list" :key="index">
          <router-link
            :to="{path:'/fileDetails',query:{'datakey':item.keyid,chn:leftHrefs_data.chn}}"
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
  name: "IndexNav1Left",

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
    getTzgg() {
      common
        .column({ chn: "tzggd", curPage: 1, pageSize: 10 })
        .then(res => {
          this.leftHrefs_data.list = res.datas;
          this.leftHrefs_data.chn = "tzggd";
        })
        .catch(e => {});
    },
    getzdwj() {
      common
        .column({ chn: "zdwj", curPage: 1, pageSize: 10 })
        .then(res => {
          this.rightHrefs_data.list = res.datas;
          this.rightHrefs_data.chn = "zdwj";
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getTzgg();
    this.getzdwj();
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
  padding: 0;
  margin: 0;
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
.box {
  overflow: hidden;
}
.hrefText {
  width: 350px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
}
.hrefLi .hrefTime {
  float: right;
  padding-right: 10px;
}
</style>
