<template>
  <!--affairs-->
  <div class="bodyAffairs">
    <div class="affairsBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">党务管理</a>
      </p>
      <div class="affairs">
        <ul class="affairsLeft">
          <li>
            <a class="afrNav" href="javascript:void(0)" @click="showAfrRtPage1">党务公开</a>
          </li>
          <li>
            <a class="afrNav" href="javascript:void(0)" @click="showAfrRtPage2">党内奖惩</a>
          </li>
          <li>
            <a class="afrNav" href="javascript:void(0)" @click="showAfrRtPage3">党建考核</a>
          </li>
        </ul>
        <div class="affairsRight">
          <div class="afrRt afrRt1" v-show="afrRtPage1">
            <div class="afrTitle">
              <p>党务公开</p>
            </div>
            <div class="afrCon">
              <a href="#" class="afrConHref" v-for="(a1,index) in afrRtPage1_data" :key="index">
                <p>{{a1.afrRtText}}</p>
                <span>{{a1.afrRtTime}}</span>
              </a>
            </div>
          </div>
          <div class="afrRt afrRt2" v-show="afrRtPage2">
            <div class="afrTitle">
              <p>党内奖惩</p>
            </div>
            <div class="afrCon">
              <a href="#" class="afrConHref" v-for="(a2,index) in afrRtPage2_data" :key="index">
                <p>{{a2.afrRtText}}</p>
                <span>{{a2.afrRtTime}}</span>
              </a>
            </div>
          </div>
          <div class="afrRt afrRt3" v-show="afrRtPage3">
            <div class="afrTitle">
              <p>党建考核</p>
            </div>
            <div class="afrCon">
              <a href="#" class="afrConHref" v-for="(a3,index) in afrRtPage3_data" :key="index">
                <p>{{a3.afrRtText}}</p>
                <span>{{a3.afrRtTime}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AffairsBox",
  data() {
    return {
      afrRtPage1: true,
      afrRtPage2: false,
      afrRtPage3: false,
      afrRtPage1_data: [
        {
          afrRtText: "图解党支部书记、委员工作职责",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "图解党支部书记、委员工作职责",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "党支部书记要会解难题",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "党支部书记要会解难题",
          afrRtTime: "09-22"
        }
      ],
      afrRtPage2_data: [
        {
          afrRtText: "图解党支部书记、委员工作职责",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "党支部书记要会解难题",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "图解党支部书记、委员工作职责",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "党支部书记要会解难题",
          afrRtTime: "09-22"
        }
      ],
      afrRtPage3_data: [
        {
          afrRtText: "党支部书记要会解难题",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "党支部书记要会解难题",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "图解党支部书记、委员工作职责",
          afrRtTime: "09-22"
        },
        {
          afrRtText: "图解党支部书记、委员工作职责",
          afrRtTime: "09-22"
        }
      ]
    };
  },
  methods: {
    showAfrRtPage1() {
      this.afrRtPage1 = true;
      this.afrRtPage2 = false;
      this.afrRtPage3 = false;
    },
    showAfrRtPage2() {
      this.afrRtPage1 = false;
      this.afrRtPage2 = true;
      this.afrRtPage3 = false;
    },
    showAfrRtPage3() {
      this.afrRtPage1 = false;
      this.afrRtPage2 = false;
      this.afrRtPage3 = true;
    }
  }
};
</script>

<style scoped>
.bodyAffairs {
  width: 100%;
}
.bodyAffairs .affairsBox {
  width: 1000px;
  margin: 0 auto;
}
.affairsBox .affairs {
  width: 100%;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  margin-bottom: 130px;
}
.affairs .affairsLeft {
  float: left;
  background-color: #eeeeee;
  padding: 20px;
  width: 160px;
  height: 600px;
  list-style-type: none;
}
.affairsLeft .afrNav {
  display: block;
  font-size: 20px;
  color: white;
  margin-bottom: 16px;
  box-shadow: -3px 6px 5px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  background-image: url("~@/assets/images/afrNav.png");
  background-size: 160px 46px;
  width: 160px;
  height: 46px;
  line-height: 46px;
}
.affairs .affairsRight {
  width: 800px;
  float: right;
  min-height: 500px;
  max-height: 1000px;
}
.afrTitle {
  margin: 10px 5px 0 20px;
  border-bottom: 1px solid #d2d2d2;
  overflow: hidden;
}
.afrTitle p {
  font-size: 20px;
  line-height: 20px;
  border-left: 4px solid red;
  text-indent: 10px;
  margin: 15px 0;
  margin-left: 5px;
}
.afrCon {
  width: 100%;
  padding-top: 15px;
  overflow-y: auto;
  padding-bottom: 20px;
}
.afrCon .afrConHref {
  display: block;
  font-size: 16px;
  overflow: hidden;
  line-height: 26px;
}
.afrConHref p {
  color: black;
  float: left;
  margin-left: 40px;
}
.afrConHref span {
  color: #ababab;
  float: right;
  margin-right: 25px;
}
</style>
