<template>
  <div class="content">
    <div class="content_s">
      <div class="form">
        <label for class="labels">
          <span class="header">用户名</span>
        </label>
        <input type="text" class="int" placeholder="请输入您要发展的会员的用户名" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">密码</span>
        </label>
        <input type="text" class="int" placeholder="请输入您要发展的会员的密码" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">确认密码</span>
        </label>
        <input type="text" class="int" placeholder="请重新输入您要发展的会员的密码" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">姓名</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">党员工资</span>
        </label>
        <input type="text" class="int" placeholder="0" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">入党时间</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">手机号码</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">出生年月日</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">党员类型</span>
        </label>
        <select name id class="int">
          <option value="预备党员">预备党员</option>
          <option value="正式党员">正式党员</option>
          <option value="财务">财务</option>
          <option value="党办专干">党办专干</option>
          <option value="党办主任">党办主任</option>
          <option value="党组织部长">党组织部长</option>
          <option value="支部书记">支部书记</option>
        </select>
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">视频用户名</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">视频密码</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">是否在岗</span>
        </label>
        <select name class="int">
          <option value="在岗">在岗</option>
          <option value="离岗">离岗</option>
        </select>
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">组织机构</span>
        </label>
        <select name class="int">
          <option value="在岗">&nbsp;&nbsp;&nbsp;中共山阳县委员会组织部支部委员会</option>
        </select>
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">性别</span>
        </label>
        <select name class="int">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">民族</span>
        </label>
        <select name class="int">
          <option value="1">汉族</option>
          <option value="2">蒙古族</option>
          <option value="3">藏族</option>
          <option value="4">回族</option>
          <option value="5">维吾尔族</option>
          <option value="6">苗族</option>
          <option value="7">彝族</option>
          <option value="8">壮族</option>
          <option value="9">布依族</option>
          <option value="10">朝鲜族</option>
          <option value="11">满族</option>
          <option value="12">侗族</option>
          <option value="13">瑶族</option>
          <option value="14">白族</option>
          <option value="15">土家族</option>
          <option value="16">哈尼族</option>
          <option value="17">哈萨克族</option>
          <option value="18">黎族</option>
          <option value="19">傣族</option>
          <option value="20">傈僳族</option>
          <option value="21">佤族</option>
          <option value="22">畲族</option>
          <option value="23">高山族</option>
          <option value="24">拉祜族</option>
          <option value="25">水族</option>
          <option value="26">东乡族</option>
          <option value="27">纳西族</option>
          <option value="28">景颇族</option>
          <option value="29">柯尔克孜族</option>
          <option value="30">土族</option>
          <option value="31">达斡尔族</option>
          <option value="32">仫佬族</option>
          <option value="33">羌族</option>
          <option value="34">布朗族</option>
          <option value="35">撒拉族</option>
          <option value="36">毛难族</option>
          <option value="37">仡佬族</option>
          <option value="38">锡伯族</option>
          <option value="39">阿昌族</option>
          <option value="40">普米族</option>
          <option value="41">塔吉克族</option>
          <option value="42">怒族</option>
          <option value="43">乌孜别克族</option>
          <option value="44">俄罗斯族</option>
          <option value="45">鄂温克族</option>
          <option value="46">崩龙族</option>
          <option value="47">保安族</option>
          <option value="48">裕固族</option>
          <option value="49">京族</option>
          <option value="50">塔塔尔族</option>
          <option value="51">独龙族</option>
          <option value="52">鄂伦春族</option>
          <option value="53">赫哲族</option>
          <option value="54">门巴族</option>
          <option value="55">珞巴族</option>
          <option value="56">基诺族</option>
        </select>
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">身份证</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">学历</span>
        </label>
        <select name class="int">
          <option value="大专及以下学历">大专及以下学历</option>
          <option value="本科">本科</option>
          <option value="研究生">研究生</option>
          <option value="博士">博士</option>
          <option value="博士后及以上学历">博士后及以上学历</option>
        </select>
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">单位或者职称</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">居住地</span>
        </label>
        <select name class="int">
          <option value="选择省份">选择省份</option>
        </select>
        <!-- <label for class="labels">
          <span class="header"></span>
        </label>-->
        <select name class="int ints">
          <option value="选择城市">选择城市</option>
        </select>
        <!-- <label for class="labels">
          <span class="header"></span>
        </label>-->
        <select name class="int ints">
          <option value="选择区域">选择区域</option>
        </select>
        <label for class="labels">
          <span class="header">详细地址</span>
        </label>
        <input type="text" class="int ints" />
      </div>
      <div class="form form1">
        <label for class="labels">
          <span class="header">单位或者职务</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">专长</span>
        </label>
        <textarea type="text" class="int int1"></textarea>
      </div>
      <div class="form form2">
        <label for class="labels">
          <span class="header">附件</span>
        </label>
        <button class="int int2">上传文件</button>
      </div>
      <div class="form">
        <button class="dot">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import IndexFooter from "../index/IndexFooter";
export default {
  name: "membershipFormCenter",
  components: { IndexFooter }
};
</script>

<style scoped>
.content {
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}
.content_s {
  width: 45%;
  /* margin: 0 auto; */
  /* border-bottom: 2px solid #dcdcdc; */
}
.content .form {
  width: 100%;
  /* height: 50px; */
  margin: 0 auto;
}
.content .form label {
  display: block;
}

.content .form select {
  margin: 10px 0;
}
.content .header {
  font-size: 14px;
  display: inline-block;
  width: 85px;
  vertical-align: middle;
}
.content .int {
  display: inline-block;
  width: 450px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  text-indent: 6px;
  vertical-align: middle;
  margin-top: 5px;
}
/* .content .ints { */
/* margin-left: 170px; */
/* } */
.content .form1 {
  margin-top: 50px;
}
.content .form2 {
  margin-top: 30px;
}
.content .int1 {
  height: 70px;
  resize: none;
}
.content .int2 {
  height: 30px;
  text-align: center;
  background-color: cornflowerblue;
  color: white;
  font-size: 14px;
}
.content .dot {
  margin-top: 20px;
  width: 120px;
  height: 30px;
  font-size: 14px;
  margin-left: 170px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  background-color: skyblue;
}
</style>
