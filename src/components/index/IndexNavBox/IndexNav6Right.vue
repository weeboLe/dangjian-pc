<template>
  <div class="newsBox">
    <div class="titleBox">
      <a
        href="#"
        class="title title1"
        @mouseenter="showUl(index)"
        v-for="(item,index) in navbar"
        :key="index"
      >
        {{item.msg}}
        <span class="titleBorder" v-show="active == index"></span>
      </a>
    </div>
    <div class="hrefBox">
      <ul
        class="hrefUl leftHrefs"
        v-show="active == index"
        v-for="(item,index) in dataList"
        :key="index"
      >
        <li class="hrefLi" v-for="(h1,list) in item.list" :key="list">
          <router-link :to="{path:'/newsParty',query:{'datakey':h1.keyid,'chn':item.chn }}">
            <p class="hrefText">{{ h1.title }}</p>
            <span class="hrefTime">{{h1.createtime | createtime('mm-dd')}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { common } from "@/api";
export default {
  name: "IndexNav6Right",
  data() {
    return {
      navbar: [
        { msg: "学习交流" },
        { msg: "勤廉楷模" },
        { msg: "以案示警" },
        { msg: "廉政时讯" }
      ],
      active: 0,
      dataList: [
        { list: [], chn: "" },
        { list: [], chn: "" },
        { list: [], chn: "" },
        { list: [], chn: "" }
      ]
    };
  },
  methods: {
    showUl(index) {
      this.active = index;
    },
    async getljjs(val) {
      return await common.column({ chn: val, curPage: 1, pageSize: 10 });
    }
  },
  mounted() {
    this.getljjs("xxjl").then(res => {
      this.dataList[0].list = res.datas;
      this.dataList[0].chn = "xxjl";
    });
    this.getljjs("qlkm").then(res => {
      this.dataList[1].list = res.datas;
      this.dataList[1].chn = "qlkm";
    });
    this.getljjs("yasjlb").then(res => {
      this.dataList[2].list = res.datas;
      this.dataList[2].chn = "yasjlb";
    });
    this.getljjs("lzsx").then(res => {
      this.dataList[3].list = res.datas;
      this.dataList[3].chn = "lzsx";
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
  margin-right: 8px;
  line-height: 22px;
  position: relative;
  padding-left: 10px;
}
.titleBox .title1 {
  padding-left: 10px;
}
.titleBox a:first-child {
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
