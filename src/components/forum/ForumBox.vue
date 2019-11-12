<template>
  <!--forum-->
  <div class="forum">
    <div class="sumBox">
      <div class="sum">
        <span>0</span>
        <p>今日发帖数</p>
      </div>
      <div class="sum">
        <span>0</span>
        <p>昨日发帖数</p>
      </div>
      <div class="sum">
        <span>0</span>
        <p>帖子总数</p>
      </div>
      <div class="sum">
        <span>0</span>
        <p>总话题</p>
      </div>
      <div class="sum">
        <span>0</span>
        <p>最高日帖数</p>
      </div>
      <div class="sum">
        <span>0</span>
        <p>注册会员</p>
      </div>
    </div>
    <div class="forumReuse">
      <p class="frmRseTit">版面一</p>
      <ul class="frmRseMask">
        <li class="maskUnder">
          <img class="mskUdrImg" src="@/assets/images/maskLayer1.png" alt />
          <p class="mskUdrName">党员圈</p>
          <p class="mskUdrNum">
            今日：
            <span>0</span>&nbsp;&nbsp;&nbsp;&nbsp;帖数：
            <span>29</span>
          </p>
          <div class="maskLayer">
            <p>党员交流好帮手！</p>
            <router-link tag="a" to="/party" href="#">进入主题</router-link>
            <router-link tag="a" to="/message" href="#">发帖</router-link>
          </div>
        </li>
        <li class="maskUnder">
          <img class="mskUdrImg" src="@/assets/images/maskLayer1.png" alt />
          <p class="mskUdrName">党员意见</p>
          <p class="mskUdrNum">
            今日：
            <span>0</span>&nbsp;&nbsp;&nbsp;&nbsp;帖数：
            <span>29</span>
          </p>
          <div class="maskLayer">
            <p>有什么好建议尽管提！</p>
            <router-link tag="a" to="/party" href="#">进入主题</router-link>
            <router-link tag="a" to="/message" href="#">发帖</router-link>
          </div>
        </li>
        <li class="maskUnder">
          <img class="mskUdrImg" src="@/assets/images/maskLayer1.png" alt />
          <p class="mskUdrName">微投票</p>
          <p class="mskUdrNum">
            今日：
            <span>0</span>&nbsp;&nbsp;&nbsp;&nbsp;主题：
            <span>0</span>
          </p>
          <div class="maskLayer">
            <p>民主选举，公开的投票尽在这里！</p>
            <router-link tag="a" to="/party" href="#">进入主题</router-link>
            <router-link tag="a" to="/message" href="#">发帖</router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="forumReuse">
      <p class="frmRse2Tit">版面二</p>
      <div class="frmRse2Con">
        <router-link tag="a" to="/work/workStaffHome/workStaffHome1" href="#" class="frmRse2Href">
          <img c src="@/assets/images/maskLayer3.png" alt />
          <p>党旗领航</p>
        </router-link>
        <router-link tag="a" to="/work/workStaffHome/workStaffHome1" href="#" class="frmRse2Href">
          <img c src="@/assets/images/maskLayer2.png" alt />
          <p>党员意见</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumBox"
};
</script>

<style scoped>
.forum {
  width: 100%;
  padding-bottom: 50px;
}
.forum .sumBox {
  width: 1000px;
  margin: 22px auto 0;
  padding-bottom: 18px;
  border-bottom: 2px solid #dcdcdc;
}
.sumBox .sum {
  width: 16%;
  display: inline-block;
  text-align: center;
  padding-bottom: 12px;
  border-right: 1px dashed #dddddd;
}
.sumBox .sum:last-child {
  border-right: none;
}
.sum span {
  font-size: 22px;
  color: #2a9dff;
  line-height: 50px;
}
.sum p {
  font-size: 12px;
  line-height: 22px;
}
.forumReuse {
  box-sizing: border-box;
  padding: 0 10px;
  width: 1000px;
  margin: 0 auto;
}
.forumReuse .frmRseTit {
  font-size: 23px;
  line-height: 85px;
}
.forumReuse .frmRseMask {
  width: 100%;
}
.frmRseMask .maskUnder {
  width: 250px;
  height: 180px;
  background-color: #7ecef4;
  color: white;
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px #aaa9a9;
  display: inline-block;
  margin-right: 70px;
  margin-bottom: 10px;
  overflow: hidden;
}
.frmRseMask .maskUnder:first-child {
  background-color: #7ecef4;
}
.frmRseMask .maskUnder:nth-child(2) {
  background-color: #84ccc9;
}
.frmRseMask .maskUnder:nth-child(3) {
  background-color: #acd598;
}
.maskUnder .mskUdrImg {
  width: 67px;
  height: 67px;
  float: left;
  margin: 20px;
}
.maskUnder .mskUdrName {
  font-size: 30px;
  float: left;
  line-height: 67px;
  margin-top: 20px;
}
.maskUnder .mskUdrNum {
  font-size: 15px;
  position: absolute;
  left: 20px;
  bottom: 15px;
}
.maskUnder .maskLayer {
  position: absolute;
  left: 0;
  top: -180px;
  width: 250px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: all 0.2s linear;
}
.maskLayer p {
  font-size: 16px;
  margin: 32px 22px 0 22px;
  height: 110px;
  overflow: hidden;
}
.maskLayer a {
  font-size: 15px;
  line-height: 26px;
  padding: 0 10px;
  color: white;
  background-color: #0094db;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  margin-left: 20px;
}
.maskUnder:hover .maskLayer {
  top: 0;
}
/*forumReuse2*/
.forumReuse .frmRse2Tit {
  font-size: 23px;
  line-height: 85px;
}
.forumReuse .frmRse2Con {
  width: 100%;
}
.frmRse2Con .frmRse2Href {
  width: 250px;
  height: 180px;
  background-color: #7ecef4;
  color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px #aaa9a9;
  display: inline-block;
  margin-right: 70px;
  margin-bottom: 10px;
}
.frmRse2Con .frmRse2Href:first-child {
  background-color: #7ecef4;
}
.frmRse2Con .frmRse2Href:nth-child(2) {
  background-color: #84ccc9;
}
.frmRse2Con .frmRse2Href:nth-child(3) {
  background-color: #acd598;
}
.frmRse2Href img {
  width: 67px;
  height: 67px;
  margin: 30px auto 0;
}
.frmRse2Href p {
  font-size: 22px;
  text-align: center;
  margin-top: 22px;
}
</style>
