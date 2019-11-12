<template>
  <!--transfer-->
  <div class="bodyTransfer">
    <div class="transferBox">
      <p class="siteBox">
        当前位置：
        <a href="javascript:;" class="site">首页</a>
        <span>&gt;</span>
        <a href="javascript:;" class="site">党员管理</a>
        <span>&gt;</span>
        <a href="javascript:;" class="site">党组织关系转接</a>
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
          <td>{{userparty.userName}}</td>
          <td>{{userparty.name}}</td>
          <td>{{userparty.address || '无'}}</td>
          <td>{{userparty.operateTime || '无'}}</td>
        </tr>
      </table>
      <p class="transferHint">说明：如需要转接党组织关系请选择或查询您要转接到的党组织关系。</p>
      <div class="partyOnline">
        <p>网上党支部</p>
      </div>
      <div class="selectOnline">
        <div class="selectOnline_s" v-for="(item,index) in partyData" :key="index">
          <a
            href="javascript:;"
            :class="{'active':active == item.id}"
            @click="selected(item.id)"
          >{{item.name}}</a>
        </div>
      </div>
      <div class="confirmBox">
        <el-button type="text" class="transferBtn" @click="dialogVisible = active != ''">确认转接</el-button>
      </div>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        @click="dialogVisible = false"
      >
        <span>确认要转接至该组织吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { partyMember } from "@/api";
export default {
  name: "MemberTransferBox",
  data() {
    return {
      dialogVisible: false,
      userparty: {
        address: "",
        operateTime: "",
        name: "",
        deptId: "",
        userName: ""
      },
      partyData: [],
      active: ""
    };
  },
  methods: {
    async getParty() {
      let party = JSON.parse(localStorage.getItem("userparty"));
      if (!party) {
        party = await partyMember.getParty({});
        localStorage.setItem("userparty", JSON.stringify(party));
      }
      this.userparty = party.data;
    },
    async getAllOrg() {
      let allparty = await partyMember.getAllOrg({});
      this.partyData = allparty.datas;
    },
    selected(id) {
      if (this.active == id) {
        this.active = "";
        return;
      }
      this.active = id;
    },
    submit() {
      this.dialogVisible = false;
      let data = {
        "relationChangeDto.fromOrg": this.active,
        "relationChangeDto.toOrg": this.userparty.deptId
      };
      partyMember
        .changeParty(data)
        .then(res => {
          if (res.type == "success") {
            this.$message({
              showClose: true,
              message: "转接成功",
              type: "success"
            });
            this.active = "";
          }
        })
        .catch(err => {
          //console.log(err);
        });
    }
  },
  mounted() {
    this.getParty();
    this.getAllOrg();
  }
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
  width: 100%;
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
  padding: 10px;
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
  height: 300px;
  overflow: auto;
  padding: 10px;
  border: 1px solid #ccc;
}
.transferBox .selectOnline_s {
  width: 33.33333%;
  height: 30px;
  line-height: 30px;
  box-shadow: 0 0 1px 1px #ccc;
  display: inline-block;
  background-color: #eeeeee;
}
.selectOnline_s a {
  font-size: 14px;
  color: #818181;
  padding: 0 15px;
  border-radius: 3px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.selectOnline_s a.active {
  color: #fff;
  background-color: #ff0000;
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
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
