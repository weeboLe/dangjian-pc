<template>
  <!--dues-->
  <div class="bodyDues">
    <div class="duesBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">党员管理</a>
        <span>&gt;</span>
        <a href="#" class="site">党费查询缴纳</a>
      </p>
      <div class="duesQuery">
        <div class="duesQryTit">
          <img src="~@/assets/images/duesQuery.png" alt />
          <p>党费查询：</p>
        </div>
        <form action class="queryResult">
          <div class="qryLeft">
            <p>查询类型：身份证</p>
            <span>身份证号码：</span>
            <input id="qryNumber" type="text" placeholder="请输入身份证号码" />
            <br />
            <input id="qryBtn" type="submit" value="查询" />
          </div>
          <div class="qryRight">
            <p>查询结果显示</p>
            <p>
              姓名：
              <span>张大脸</span>
            </p>
            <p>
              未交党费年月：
              <span>2018/4</span>
            </p>
          </div>
        </form>
      </div>
      <div class="duesPay">
        <div class="duesQryTit">
          <img src="~@/assets/images/duesPay.png" alt />
          <p>
            党费缴纳：&nbsp;&nbsp;已选择：
            <span ref="monthSpan" class="selectMonth"></span>
          </p>
        </div>
        <div class="payMonthBox">
          <a
            href="javascript:void(0)"
            class="payMonth payMonth1"
            @click="changeColor1()"
            ref="month1"
          >1月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth2"
            @click="changeColor2()"
            ref="month2"
          >2月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth3"
            @click="changeColor3()"
            ref="month3"
          >3月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth4"
            @click="changeColor4()"
            ref="month4"
          >4月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth5"
            @click="changeColor5()"
            ref="month5"
          >5月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth6"
            @click="changeColor6()"
            ref="month6"
          >6月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth7"
            @click="changeColor7()"
            ref="month7"
          >7月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth8"
            @click="changeColor8()"
            ref="month8"
          >8月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth9"
            @click="changeColor9()"
            ref="month9"
          >9月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth10"
            @click="changeColor10()"
            ref="month10"
          >10月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth11"
            @click="changeColor11()"
            ref="month11"
          >11月份</a>
          <a
            href="javascript:void(0)"
            class="payMonth payMonth12"
            @click="changeColor12()"
            ref="month12"
          >12月份</a>
        </div>
      </div>
      <div class="payMode">
        <div class="duesQryTit">
          <img src="~@/assets/images/payMode.png" alt />
          <p>支付方式：</p>
        </div>
        <form action class="modeSelectBox">
          <input class="modeSelect" type="radio" name="select" id="zfbBox" />
          <label for="zfbBox">
            <img class="payMode-zfb" src="~@/assets/images/payMode-zfb.png" alt />
          </label>

          <input class="modeSelect" type="radio" name="select" id="alipay" />
          <label for="alipay">
            <img class="payMode-wx" src="~@/assets/images/payMode-wx.png" alt />
          </label>
          <div class="payBtnBox">
            <input class="payBtn" type="button" value="确定缴纳" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberDuesBox",
  methods: {
    changeColor1() {
      this.$refs.monthSpan.innerHTML = "1月份";
    },
    changeColor2() {
      this.$refs.monthSpan.innerHTML = "2月份";
    },
    changeColor3() {
      this.$refs.monthSpan.innerHTML = "3月份";
    },
    changeColor4() {
      this.$refs.monthSpan.innerHTML = "4月份";
    },
    changeColor5() {
      this.$refs.monthSpan.innerHTML = "5月份";
    },
    changeColor6() {
      this.$refs.monthSpan.innerHTML = "6月份";
    },
    changeColor7() {
      this.$refs.monthSpan.innerHTML = "7月份";
    },
    changeColor8() {
      this.$refs.monthSpan.innerHTML = "8月份";
    },
    changeColor9() {
      this.$refs.monthSpan.innerHTML = "9月份";
    },
    changeColor10() {
      this.$refs.monthSpan.innerHTML = "10月份";
    },
    changeColor11() {
      this.$refs.monthSpan.innerHTML = "11月份";
    },
    changeColor12() {
      this.$refs.monthSpan.innerHTML = "12月份";
    }
  }
};
</script>

<style scoped>
.bodyDues {
  width: 100%;
}
.bodyDues .duesBox {
  width: 960px;
  margin: 0 auto 150px;
  border: 1px solid #e5e5e5;
  padding: 0 20px;
}
.duesBox .duesQuery {
  margin-top: 20px;
  border-top: 1px solid #e5e5e5;
}
.duesQryTit {
  overflow: hidden;
  margin: 20px 0 0 6px;
}
.duesQryTit img {
  float: left;
}
.duesQryTit p {
  font-size: 15px;
  color: #f90505;
  float: left;
  margin-top: 10px;
  text-indent: 10px;
}
.duesQryTit .selectMonth {
  font-size: 20px;
}
.duesQuery .queryResult {
  background-color: #eeeeee;
  margin: 10px;
  overflow: hidden;
  font-size: 15px;
  color: #77787a;
  line-height: 32px;
}
.queryResult .qryLeft {
  float: left;
  width: 50%;
  padding-left: 100px;
  box-sizing: border-box;
  margin: 15px 0;
}
.queryResult .qryRight {
  float: left;
  width: 50%;
  padding-left: 100px;
  box-sizing: border-box;
  border-left: 2px solid white;
  margin: 15px 0;
}
.queryResult #qryNumber {
  font-size: 16px;
  border: none;
  height: 20px;
}
.queryResult #qryBtn {
  font-size: 16px;
  padding: 0 5px;
}
/* .duesPay .payMonthBox {
} */
.payMonthBox a {
  width: 218px;
  height: 70px;
  background-color: #eeeeee;
  font-size: 22px;
  color: black;
  display: inline-block;
  margin: 9px;
  line-height: 70px;
  text-align: center;
  border-radius: 5px;
}
/*.payMonthBox a:nth-child(1){
    background-color: #f90505;
    color:white;
  }*/
.payMonthBox a:nth-child(4n) {
  margin-right: 0;
}

.payMode .modeSelectBox {
  padding-top: 20px;
  padding-left: 20px;
  overflow: hidden;
}
.modeSelectBox .modeSelect {
  /* display: inline-block; */
  margin-top: 15px;
  margin-right: 10px;
  float: left;
}
.modeSelectBox .payMode-zfb {
  /* display: inline-block; */
  width: 105px;
  height: 38px;
  margin-right: 50px;
  float: left;
}
.modeSelectBox .payMode-wx {
  /* display: inline-block; */
  width: 149px;
  height: 34px;
  float: left;
}
.modeSelectBox .payBtnBox {
  float: left;
  width: 100%;
  margin: 50px 0;
  text-align: center;
}
.payBtnBox .payBtn {
  width: 200px;
  height: 45px;
  font-size: 18px;
  color: white;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
}
</style>
