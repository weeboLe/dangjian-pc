<template>
  <!--data-->
  <div class="bodyData">
    <div class="dataBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">党员管理</a>
        <span>&gt;</span>
        <a href="#" class="site">数据分析</a>
      </p>
      <div class="dataAnalysis">
        <ul class="dataLeft">
          <li>
            <a class="dataNav" href="javascript:void(0)" @click="showAfrRtPage1">党员民族分析</a>
          </li>
          <li>
            <a class="dataNav" href="javascript:void(0)" @click="showAfrRtPage2">党员性别分析</a>
          </li>
          <li>
            <a class="dataNav" href="javascript:void(0)" @click="showAfrRtPage3">党员年龄分析</a>
          </li>
          <li>
            <a class="dataNav" href="javascript:void(0)" @click="showAfrRtPage4">党员学历分析</a>
          </li>
          <li>
            <a class="dataNav" href="javascript:void(0)" @click="showAfrRtPage5">党员在岗分析</a>
          </li>
        </ul>
        <div class="dataRight">
          <div class="afrRt afrRt1" v-show="afrRtPage1">
            <div class="afrTitle">
              <p>党员民族分析</p>
            </div>
          </div>
          <div class="afrRt afrRt2" v-show="afrRtPage2">
            <div class="afrTitle">
              <p>党员性别分析</p>
            </div>
          </div>
          <div class="afrRt afrRt3" v-show="afrRtPage3">
            <div class="afrTitle">
              <p>党员年龄分析</p>
            </div>
          </div>
          <div class="afrRt afrRt3" v-show="afrRtPage4">
            <div class="afrTitle">
              <p>党员学历分析</p>
            </div>
          </div>
          <div class="afrRt afrRt3" v-show="afrRtPage5">
            <div class="afrTitle">
              <p>党员在岗分析</p>
            </div>
          </div>
          <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from "highcharts/highstock";
export default {
  name: "MemberDataBox",
  data() {
    return {
      afrRtPage1: true,
      afrRtPagetitle: "",
      afrRtPageData: [],
      afrRtPage2: false,
      afrRtPage3: false,
      afrRtPage4: false,
      afrRtPage5: false
    };
  },
  mounted() {
    this.showAfrRtPage1();
  },
  methods: {
    highechart() {
      Highcharts.chart("container", {
        chart: {
          type: "column"
        },
        title: {
          text: this.afrRtPagetitle
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          title: {
            text: this.afrRtPagetitle
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:f}"
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b> of total<br/>'
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: this.afrRtPageData
          }
        ]
      });
    },
    showAfrRtPage1() {
      this.afrRtPage1 = true;
      this.afrRtPage2 = false;
      this.afrRtPage3 = false;
      this.afrRtPage4 = false;
      this.afrRtPage5 = false;
      this.afrRtPagetitle = "党员名族分析";
      this.afrRtPageData = [
        {
          name: "汉族",
          y: 310
        },
        {
          name: "回族",
          y: 1
        }
      ];
      this.highechart();
    },
    showAfrRtPage2() {
      this.afrRtPage1 = false;
      this.afrRtPage2 = true;
      this.afrRtPage3 = false;
      this.afrRtPage4 = false;
      this.afrRtPage5 = false;
      this.afrRtPagetitle = "党员年龄分析";
      this.afrRtPageData = [
        {
          name: "男",
          y: 222
        },
        {
          name: "女",
          y: 64
        }
      ];
      this.highechart();
    },
    showAfrRtPage3() {
      this.afrRtPage1 = false;
      this.afrRtPage2 = false;
      this.afrRtPage3 = true;
      this.afrRtPage4 = false;
      this.afrRtPage5 = false;
      this.afrRtPagetitle = "党员性别分析";
      this.afrRtPageData = [
        {
          name: "20岁以下",
          y: 30
        },
        {
          name: "22~25",
          y: 18
        },
        {
          name: "25~30",
          y: 16
        },
        {
          name: "30~35",
          y: 17
        },
        {
          name: "35~40",
          y: 27
        },
        {
          name: "45~50",
          y: 32
        },
        {
          name: "50以上",
          y: 60
        }
      ];
      this.highechart();
    },
    showAfrRtPage4() {
      this.afrRtPage1 = false;
      this.afrRtPage2 = false;
      this.afrRtPage3 = false;
      this.afrRtPage4 = true;
      this.afrRtPage5 = false;
      this.afrRtPagetitle = "党员学历分析";
      this.afrRtPageData = [
        {
          name: "大专",
          y: 0
        },
        {
          name: "本科",
          y: 0
        },
        {
          name: "研究生",
          y: 0
        },
        {
          name: "博士",
          y: 0
        }
      ];
      this.highechart();
    },
    showAfrRtPage5() {
      this.afrRtPage1 = false;
      this.afrRtPage2 = false;
      this.afrRtPage3 = false;
      this.afrRtPage4 = false;
      this.afrRtPage5 = true;
      this.afrRtPagetitle = "党员在岗分析";
      this.afrRtPageData = [
        {
          name: "在岗",
          y: 256
        },
        {
          name: "离职",
          y: 32
        }
      ];
      this.highechart();
    }
  }
};
</script>

<style scoped>
.bodyData {
  width: 100%;
}
.bodyData .dataBox {
  width: 1000px;
  margin: 0 auto;
}
.dataBox .dataAnalysis {
  width: 100%;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  margin-bottom: 200px;
}
.dataAnalysis .dataLeft {
  float: left;
  background-color: #eeeeee;
  padding: 20px;
  width: 160px;
  height: 600px;
  list-style-type: none;
}
.dataLeft .dataNav {
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
.dataRight {
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
