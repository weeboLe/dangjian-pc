<template>
  <!--transfer-->
  <div class="bodyTransfer">
    <div class="transferBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">首页</a>
        <span>&gt;</span>
        <a href="#" class="site">党员管理</a>
        <span>&gt;</span>
        <a href="#" class="site">党组织关系转接</a>
      </p>
      <p class="transferTit">当前党组织所有信息</p>
      <table cellspacing="0" class="transferNow">
        <tr>
          <td>姓名</td>
          <td>党组织名称</td>
          <td>党组织所在地</td>
          <td>转入党组织时间</td>
        </tr>
        <tr>
          <td>张大脸</td>
          <td>中共山阳县委员会组织部支部委员会</td>
          <td>陕西省商洛市山阳县</td>
          <td>1970-01-01</td>
        </tr>
      </table>
      <p class="transferHint">说明：如需要转接党组织关系请选择或查询您要转接到的党组织关系。</p>
      <div class="partyOnline">
        <p>网上党支部</p>
      </div>
      <div class="selectOnline">
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
        <div class="selectOnline_s">
          <a href="#">中共山阳县委员会组织部支部委员会</a>
        </div>
      </div>
      <div class="confirmBox">
        <a href="#" class="transferBtn">确认转接</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberTransferBox"
};
</script>

<style scoped>
.bodyTransfer {
  width: 100%;
}
.bodyTransfer .transferBox {
  width: 960px;
  margin: 0 auto 170px;
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  min-height: 600px;
}
.transferTit {
  font-size: 15px;
  color: #969696;
  margin: 40px 0 20px;
}
.transferNow {
  background-color: #f8f8f8;
  border: 1px solid #bfbfbf;
  font-size: 15px;
  color: #7c7c7c;
  line-height: 20px;
  text-align: center;
}
.transferNow td {
  width: 25%;
  border-right: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  padding: 10px 0;
}
.transferNow tr td:nth-child(4) {
  border-right: none;
}
.transferNow tr:last-child td {
  border-bottom: none;
}
.transferBox .transferHint {
  font-size: 12px;
  color: #ff0000;
  line-height: 24px;
}
.transferBox .partyOnline {
  margin-top: 20px;
  overflow: hidden;
}
.partyOnline img {
  float: left;
}
.partyOnline p {
  font-size: 15px;
  color: #757575;
  float: left;
  margin-top: 12px;
  margin-left: 10px;
}
.transferBox .selectOnline {
  margin-top: 30px;
}
.transferBox .selectOnline_s {
  width: 260px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #bfbfbf;
  display: inline-block;
  background-color: #eeeeee;
}
.selectOnline_s a {
  font-size: 14px;
  color: #818181;
  padding: 0 15px;
  border-radius: 3px;
  display: inline-block;
}
.transferBox .confirmBox {
  width: 100%;
  text-align: center;
}
.confirmBox .transferBtn {
  font-size: 18px;
  color: white;
  background-color: #ff0000;
  width: 240px;
  line-height: 45px;
  display: inline-block;
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
