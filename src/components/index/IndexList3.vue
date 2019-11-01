<template>
  <div class="ruler ruler2">
    <img class="rulerImg" :src="rulerImg" alt />
    <div class="titleBox rulerTitle">
      <a href="#" class="title title1" @mouseenter="showLeft()" ref="leftBorder">职工之家</a>
      <a href="#" class="title title2" @mouseenter="showRight()" ref="rightBorder">团旗飘飘</a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs" v-show="leftTab">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data" :key="index">
          <router-link tag="a" to="/newsParty" href="#" :title="l.hrefText">
            <p class="hrefText">{{l.hrefText}}</p>
            <span class="hrefTime">{{l.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="rightTab">
        <li class="hrefLi" v-for="(r,index) in rightHrefs_data" :key="index">
          <router-link tag="a" to="/informDetails" href="#" :title="r.hrefText">
            <p class="hrefText">{{r.hrefText}}</p>
            <span class="hrefTime">{{r.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexList3",
  data() {
    return {
      rulerImg: require("@/assets/images/ruler-bottom.png"),
      leftTab: true,
      rightTab: false,
      leftTit: true,
      rightTit: false,
      newsLeftImg: require("@/assets/images/newsImg.png"),
      leftHrefs_data: [
        {
          hrefText: "党员干部这些曾被点名通报的 ”特产“ 不能收",
          hrefTime: "01-01"
        },
        {
          hrefText: "党员干部这些曾被点名通报的 ”特产“ 不能收",
          hrefTime: "01-01"
        },
        {
          hrefText: "党员干部这些曾被点名通报的 ”特产“ 不能收",
          hrefTime: "01-01"
        },
        {
          hrefText: "党员干部这些曾被点名通报的 ”特产“ 不能收",
          hrefTime: "01-01"
        },
        {
          hrefText: "党员干部这些曾被点名通报的 ”特产“ 不能收",
          hrefTime: "01-01"
        },
        {
          hrefText: "党员干部这些曾被点名通报的 ”特产“ 不能收",
          hrefTime: "01-01"
        }
      ],
      rightHrefs_data: [
        {
          hrefText: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          hrefTime: "8-24"
        },
        {
          hrefText: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          hrefTime: "8-24"
        },
        {
          hrefText: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          hrefTime: "8-24"
        },
        {
          hrefText: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          hrefTime: "8-24"
        },
        {
          hrefText: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          hrefTime: "8-24"
        },
        {
          hrefText: "关于印发《中共山阳县委组织部机关管理制度》的通知",
          hrefTime: "8-24"
        }
      ]
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
    }
  }
};
</script>

<style scoped>
.ruler {
  width: 100%;
}
.ruler .rulerTitle {
  border-bottom: 1px solid #e5e5e5;
}
.rulerTitle .title {
  padding: 0 15px;
}
.ruler .rulerImg {
  margin-top: 15px;
  margin-bottom: 30px;
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
