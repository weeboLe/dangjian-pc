<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title title1" @mouseenter="showList1()">
        志愿者活动
        <span class="titleBorder" v-show="tit1"></span>
      </a>
      <a href="#" class="title" @mouseenter="showList2()">
        在线商城
        <span class="titleBorder" v-show="tit2"></span>
      </a>
    </div>
    <div class="hrefBox">
      <div class="onlineSchool" v-show="tab1">
        <div class="onlineHref" v-for="(v,index) in volunteerData" :key="index">
          <router-link
            tag="a"
            to="/people/peopleVolunteerActivity/peopleVolunteerActivity1"
            href="#"
          >
            <img class="onlineImg" :src="v.volunteerImage" alt />
            <p class="onlineText">{{v.volunteerTit}}</p>
          </router-link>
        </div>
      </div>
      <div class="onlineSchool" v-show="tab2">
        <div class="onlineHref" v-for="(m,index) in mallData" :key="index">
          <router-link tag="a" to="/people/peopleOnlineMall/peopleOnlineMall1" href="#">
            <img class="onlineImg" :src="m.mallImage" alt />
            <p class="onlineText">{{m.mallTit}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexNav7Right",
  data() {
    return {
      tab1: true,
      tab2: false,
      tit1: true,
      tit2: false,
      volunteerData: [
        {
          volunteerImage: require("@/assets/images/study1.png"),
          volunteerTit: "11党务工作规范学习123"
        },
        {
          volunteerImage: require("@/assets/images/study2.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study3.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study4.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study5.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study6.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study1.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study2.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study3.png"),
          volunteerTit: "党务工作规范学习"
        },
        {
          volunteerImage: require("@/assets/images/study4.png"),
          volunteerTit: "党务工作规范学习"
        }
      ],
      mallData: [
        {
          mallImage: require("@/assets/images/peopleMall-small.png"),
          mallTit: "廉政文化 廉政口号 警示格言 桌面警示牌 桌牌 办公用品"
        },
        {
          mallImage: require("@/assets/images/study1.png"),
          mallTit: "党务工作规范学习"
        },
        {
          mallImage: require("@/assets/images/study2.png"),
          mallTit: "党务工作规范学习"
        },
        {
          mallImage: require("@/assets/images/study3.png"),
          mallTit: "党务工作规范学习"
        },
        {
          mallImage: require("@/assets/images/study4.png"),
          mallTit: "党务工作规范学习"
        },
        {
          mallImage: require("@/assets/images/study5.png"),
          mallTit: "党务工作规范学习"
        }
      ]
    };
  },
  methods: {
    showList1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tit1 = true;
      this.tit2 = false;
    },
    showList2() {
      this.tab1 = false;
      this.tab2 = true;
      this.tit1 = false;
      this.tit2 = true;
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
  margin-right: 8px;
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
.hrefBox .onlineSchool {
  width: 100%;
  height: 390px;
  overflow-y: auto;
  margin-top: 15px;
}
.onlineHref {
  display: inline-block;
  margin: 0 12px;
}
.onlineSchool .onlineHref:nth-child(3n) {
  margin-right: 0;
}
.onlineHref .onlineImg {
  width: 120px;
  height: 80px;
}
.onlineHref .onlineText {
  font-size: 15px;
  color: black;
  line-height: 20px;
  margin-top: 10px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
