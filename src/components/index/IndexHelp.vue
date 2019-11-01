<template>
  <!--help-->
  <div class="bodyHelp">
    <div class="help">
      <div class="helpTitleBox">
        <a
          class="helpTitle helpTitle1"
          href="#"
          @mouseenter="showLeft()"
          @mouseleave="leaveLeft()"
          ref="title1"
        >困难帮扶</a>
        <span class="helpTitBar">|</span>
        <a
          class="helpTitle helpTitle2"
          href="#"
          @mouseenter="showRight()"
          @mouseleave="leaveRight()"
          ref="title2"
        >志愿者服务</a>
      </div>
      <div class="helpContent">
        <div class="helpBox helpBox1" v-show="leftTab">
          <div class="helpLink" v-for="(h,index) in help_data" :key="index">
            <router-link tag="a" to="/people/peopleDifficultyHelp/peopleDifficultyHelp1" href="#">
              <img :src="h.helpImg" alt />
              <p>{{h.helpText}}</p>
            </router-link>
          </div>
        </div>
        <div class="helpBox helpBox2" v-show="rightTab">
          <div class="helpLink" v-for="(v,index) in volunteer_data" :key="index">
            <router-link
              tag="a"
              to="/people/peopleVolunteerActivity/peopleVolunteerActivity1"
              href="#"
            >
              <img :src="v.volunteerImg" alt />
              <p>{{v.volunteerText}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexHelp",
  data() {
    return {
      leftTab: true,
      rightTab: false,
      help_data: [
        {
          helpImg: require("@/assets/images/help1.png"),
          helpText: "2018年大学生志愿服务西部计划启动",
          path: "/people/peopleDifficultyHelp/peopleDifficultyHelp1"
        },
        {
          helpImg: require("@/assets/images/help1.png"),
          helpText: "2018年大学生志愿服务西部计划启动",
          path: "/people/peopleDifficultyHelp/peopleDifficultyHelp1"
        },
        {
          helpImg: require("@/assets/images/help1.png"),
          helpText: "2018年大学生志愿服务西部计划启动",
          path: "/people/peopleDifficultyHelp/peopleDifficultyHelp1"
        },
        {
          helpImg: require("@/assets/images/help1.png"),
          helpText: "2018年大学生志愿服务西部计划启动",
          path: "/people/peopleDifficultyHelp/peopleDifficultyHelp1"
        },
        {
          helpImg: require("@/assets/images/help1.png"),
          helpText: "2018年大学生志愿服务西部计划启动",
          path: "/people/peopleDifficultyHelp/peopleDifficultyHelp1"
        }
      ],
      volunteer_data: [
        {
          volunteerImg: require("@/assets/images/peopleHelp1.png"),
          volunteerText: "2018年大学生志愿服务西部计划启动"
        },
        {
          volunteerImg: require("@/assets/images/peopleHelp1.png"),
          volunteerText: "2018年大学生志愿服务西部计划启动"
        }
      ]
    };
  },
  methods: {
    showLeft() {
      this.leftTab = true;
      this.rightTab = false;
      this.$refs.title1.style.color = "red";
    },
    showRight() {
      this.leftTab = false;
      this.rightTab = true;
      this.$refs.title2.style.color = "red";
    },
    leaveLeft() {
      this.$refs.title1.style.color = "black";
    },
    leaveRight() {
      this.$refs.title2.style.color = "black";
    }
  }
};
</script>

<style scoped>
/*help*/
.bodyHelp {
  width: 100%;
}
.bodyHelp .help {
  width: 976px;
  height: 280px;
  margin: 30px auto 0;
  border: 2px solid #d2d2d2;
  /*background-color: #f4f4f4;*/
  padding: 0 10px;
}
.help .helpTitleBox {
  margin-top: 10px;
}
.helpTitleBox .helpTitle {
  font-size: 18px;
  color: black;
  line-height: 30px;
  padding: 0 15px;
  display: inline-block;
}
.helpTitleBox .helpTitBar {
  display: inline-block;
}

.help .helpContent {
  width: 100%;
}
.helpContent .helpBox {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.helpBox::-webkit-scrollbar {
  width: 50px;
  height: 10px;
}
.helpBox::-webkit-scrollbar-thumb {
  background: #dcdcdc;
  border-radius: 4px;
}
.helpBox {
  scrollbar-base-color: #dcdcdc;
  scrollbar-track-color: white;
  scrollbar-arrow-color: white;
}
.helpBox .helpLink {
  display: inline-block;
  margin: 15px;
}
.helpLink img {
  width: 250px;
  height: 170px;
}
.helpLink p {
  display: inline-block;
  font-size: 15px;
  text-align: center;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}
</style>
