<template>
  <div class="content">
    <div class="content_s">
      <div class="form">
        <label for class="labels">
          <span class="header">申请人</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">身份证</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">联系电话</span>
        </label>
        <input type="text" class="int" />
      </div>
      <div class="form">
        <label for class="labels">
          <span class="header">申请事由</span>
        </label>
        <textarea type="text" class="int int1"></textarea>
      </div>
      <div class="form form1">
        <label for class="labels">
          <span class="header">附件</span>
        </label>
        <button class="int int2">上传文件</button>
      </div>
      <div class="form btn">
        <label for class="labels">
          <span class="header"></span>
        </label>
        <button class="dot">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DifficultApplyCenter"
};
</script>

<style scoped>
.content {
  width: 100%;
  margin-bottom: 70px;
}
.content_s {
  width: 45%;
  margin: 0 auto;
  border-bottom: 2px solid #dcdcdc;
}
.content .form {
  display: flex;
  margin: 0 0 10px;
  width: 100%;
}
.content .header {
  margin-left: 60px;
  font-size: 14px;
  display: inline-block;
  width: 60px;
  height: 30px;
  vertical-align: middle;
}
.content .int {
  flex-grow: 1;
  display: inline-block;
  /* width: 450px; */
  height: 30px;
  border-radius: 5px;
  margin-left: 20px;
  border: 1px solid #dcdcdc;
  text-indent: 6px;
  vertical-align: middle;
  margin-top: 5px;
}
.content .int1 {
  height: 80px;
  resize: none;
}
.content .form1 {
  margin-top: 40px;
}
.content .int2 {
  background-color: cornflowerblue;
  font-size: 16px;
  color: white;
}
.btn {
  text-align: center;
}
.btn .dot {
  width: 120px;
  height: 30px;
  font-size: 14px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  background-color: skyblue;
}
button:focus,
input:focus,
textarea:focus {
  outline: none;
}
</style>
