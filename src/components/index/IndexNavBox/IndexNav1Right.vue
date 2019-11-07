<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title">党建要闻</a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data.list" :key="index">
          <router-link
            tag="a"
            :to="{path:'/newsParty',query:{'datakey':l.keyid,chn:leftHrefs_data.chn}}"
            :title="l.title"
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
import { dateFormat } from "@/tool";
export default {
  name: "IndexNav1Right",
  data() {
    return {
      leftHrefs_data: {
        list: [],
        chn: ""
      }
    };
  },
  methods: {
    getdjyw() {
      common
        .column({ chn: "djyw", curPage: 1, pageSize: 7 })
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
  margin-right: 22px;
  line-height: 22px;
  padding-left: 10px;
  border-left: 4px solid #d02424;
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
