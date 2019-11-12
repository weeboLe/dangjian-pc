<template>
  <!--member-->
  <div class="bodyMember">
    <div class="memberBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">党员管理</a>
      </p>
      <div class="memberNavs">
        <router-link tag="a" to="/member/memberDues" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav1.png" alt />
          <p>党费缴纳</p>
        </router-link>
        <router-link tag="a" to="/member/memberTransfer" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav2.png" alt />
          <p>关系转接</p>
        </router-link>
        <router-link tag="a" to="/member/memberData" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav3.png" alt />
          <p>数据分析</p>
        </router-link>
        <router-link tag="a" to="/member/memberFrame" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav4.png" alt />
          <p>组织架构</p>
        </router-link>
        <!--<a href="#" class="memberNav">-->
        <!--<img src="~@/assets/images/memberNav4.png" alt="">-->
        <!--<p>组织架构</p>-->
        <!--</a>-->
      </div>
      <div class="memberContent">
        <div class="memberLeft">
          <div class="mbrLeftReuse">
            <div class="mbrLeftTit">
              <p>制度文件</p>
              <router-link to="/fileDetails" href="#">更多&gt;&gt;</router-link>
            </div>
            <ul class="mbrLeftHrefs">
              <li class="mbrLeftHref" v-for="(s,index) in systemDocument_data.list" :key="index">
                <router-link
                  :to="{path:'/fileDetails',query:{'datakey':s.keyid,'chn':systemDocument_data.chn}}"
                >
                  <p>{{s.title}}</p>
                  <span>{{s.createtime | createtime('mm-dd')}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="mbrLeftReuse">
            <div class="mbrLeftTit">
              <p>党员风采</p>
              <a href="#">更多&gt;&gt;</a>
            </div>
            <ul class="mbrLeftHrefs">
              <li class="mbrLeftHref" v-for="(m ,index) in memberMien_data.list" :key="index">
                <router-link
                  :to="{path:'/informDetails',query:{'datakey':m.keyid,'chn':memberMien_data.chn}}"
                  :title="m.memberMienText"
                >
                  <p>{{m .title}}</p>
                  <span>{{m.createtime | createtime('mm-dd')}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="memberRight">
          <div class="mbrRtReuse">
            <div class="mbrRtTit">
              <p>专题学习</p>
              <router-link tag="a" to="/photoDetails" href="#">更多&gt;&gt;</router-link>
            </div>
            <div class="mbrRtHrefs">
              <router-link
                :to="{path:'/photoDetails',query:{'datakey':m1.keyid,'chn':m1.chn}}"
                class="mbrRtHref"
                v-for="(m1,index) in mbrRtReuse1_data.list"
                :key="index"
              >
                <img :src="base.imgurl +  m1.sacleImage" v-if="m1.sacleImage" />
              </router-link>
            </div>
          </div>
          <div class="mbrRtReuse">
            <div class="mbrRtTit">
              <p>党组织关系转接信息</p>
              <router-link tag="a" to="/photoDetails" href="#">更多&gt;&gt;</router-link>
            </div>
            <div class="mbrRtHrefs">
              <router-link
                tag="a"
                href="#"
                to="/photoDetails"
                class="mbrRtHref"
                v-for="(m2,index) in mbrRtReuse2_data"
                :key="index"
              >
                <img :src="m2.mbrRtReuse2Img" alt />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { common, partyMember } from "@/api";
import base from "@/api/base";
export default {
  name: "MemberBox",
  data() {
    return {
      base,
      systemDocument_data: { list: [], chn: "" },
      memberMien_data: { list: [], chn: "" },
      mbrRtReuse1_data: { list: [] },
      mbrRtReuse2_data: [
        { mbrRtReuse2Img: require("@/assets/images/mbrRtHref.png") },
        { mbrRtReuse2Img: require("@/assets/images/mbrRtHref.png") },
        { mbrRtReuse2Img: require("@/assets/images/mbrRtHref.png") },
        { mbrRtReuse2Img: require("@/assets/images/mbrRtHref.png") }
      ]
    };
  },
  methods: {
    async getParty() {
      let party = JSON.parse(localStorage.getItem("userparty"));
      let newparty = await partyMember.getParty({});
      if (party != JSON.stringify(newparty)) {
        localStorage.setItem("userparty", JSON.stringify(newparty));
      }
    },
    getzdwj() {
      common
        .column({ chn: "zdwj", curPage: 1, pageSize: 10 })
        .then(res => {
          this.systemDocument_data.list = res.datas;
          this.systemDocument_data.chn = "zdwj";
        })
        .catch(e => {});
    },
    getDyfc() {
      common
        .column({
          chn: "dyfc",
          curPage: 1,
          pageSize: 10
        })
        .then(res => {
          this.memberMien_data.list = res.datas;
          this.memberMien_data.chn = "dyfc";
        })
        .catch(e => {});
    },
    getzgzj(val) {
      common
        .column({
          chn: val,
          curPage: 1,
          pageSize: 1
        })
        .then(res => {
          res.datas.map(res => {
            if (res) {
              res.chn = val;
              this.mbrRtReuse1_data.list.push(res);
            }
          });

          //console.log(this.mbrRtReuse1_data.list);
        })
        .catch(e => {});
    }
  },
  mounted() {
    this.getzgzj("shyk");
    this.getzgzj("lxyzm");
    this.getzgzj("sjdztz");
    this.getzgzj("dxtj");

    this.getParty();
    this.getzdwj();
    this.getDyfc();
  }
};
</script>

<style scoped>
.bodyMember {
  width: 100%;
}
.memberBox {
  width: 978px;
  margin: 0 auto;
  padding-left: 22px;
  padding-bottom: 100px;
}
.memberNavs {
  width: 100%;
}
.memberNavs .memberNav {
  display: inline-block;
  padding-top: 15px;
  margin-right: 80px;
}
.memberNav p {
  font-size: 14px;
  color: black;
  margin: 10px 0;
}
/*memberLeft*/
.memberContent {
  overflow: hidden;
}
.memberContent .memberLeft {
  width: 66%;
  float: left;
}
.memberLeft .mbrLeftReuse {
  margin-top: 20px;
}
.mbrLeftReuse .mbrLeftTit {
  width: 100%;
  overflow: hidden;
  line-height: 34px;
  border-bottom: 2px solid #e5e5e5;
}
.mbrLeftTit p {
  font-size: 18px;
  float: left;
  border-bottom: 2px solid #ff0000;
}
.mbrLeftTit a {
  font-size: 14px;
  color: #9a9a9a;
  float: right;
  display: block;
}
.mbrLeftHrefs {
  width: 100%;
  margin-top: 16px;
  height: 340px;
}
.mbrLeftHrefs .mbrLeftHref {
  width: 100%;
  font-size: 13px;
  line-height: 34px;
}
.mbrLeftHref a {
  width: 100%;
  display: block;
  height: 34px;
}
.mbrLeftHref a:hover p {
  color: red;
}
.mbrLeftHref a:hover span {
  color: red;
}
.mbrLeftHref p {
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  display: inline-block;
}
.mbrLeftHref span {
  float: right;
  padding-right: 5px;
  color: black;
}
/*memberRight*/
.memberContent .memberRight {
  width: 30%;
  float: right;
}
.memberRight .mbrRtReuse {
  margin-top: 20px;
}
.mbrRtReuse .mbrRtTit {
  overflow: hidden;
  line-height: 36px;
  border-bottom: 2px solid #ff0000;
}
.mbrRtTit p {
  font-size: 18px;
  color: white;
  background-color: #ff0000;
  float: left;
  padding: 0 12px;
}
.mbrRtTit a {
  float: right;
  font-size: 14px;
  color: #9a9a9a;
}
.mbrRtReuse .mbrRtHrefs {
  padding-bottom: 8px;
  height: 332px;
}
.mbrRtHrefs .mbrRtHref {
  display: block;
  margin-top: 20px;
}
.mbrRtHref img {
  margin: 0 auto;
  height: 66px;
  width: 100%;
}
</style>
