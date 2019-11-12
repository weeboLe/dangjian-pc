<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title title1">团旗飘飘</a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data.list" :key="index">
          <router-link
            :to="{path:'/fileDetails',query:{'datakey':l.keyid,'chn':l.chn}}"
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
import { common } from "@/api";
export default {
  name: "IndexNav5Right",
  data() {
    return {
      leftHrefs_data: { list: [] }
    };
  },
  methods: {
    getzgzj(val) {
      common
        .column({
          chn: val,
          curPage: 1,
          pageSize: 3
        })
        .then(res => {
          res.datas.map(res => {
            if (res) {
              res.chn = val;
              this.leftHrefs_data.list.push(res);
            }
          });
          //console.log(this.leftHrefs_data.list);
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getzgzj("qnxf");
    this.getzgzj("qtxs");
    this.getzgzj("qwx");
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
