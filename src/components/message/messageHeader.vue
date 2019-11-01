<template>
    <div class="content">
      <div class="content_s">
        <p class="font">党员圈</p>
        <span class="title">标题</span>
        <input type="text" class="title1">
        <div class="content_opinion">
          <span class="con">意见内容</span>
          <input type="text" class="con1">
        </div>
        <router-link  tag="a" to="/party/partyMember" href="#">确定</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "messageHeader"
    }
</script>

<style scoped>

  .content{
    width:100%;
  }
  .content_s{
    width:40%;
    margin: 0 auto;
    height:600px;
  }
  .content_s .font{
    color:skyblue;
    margin-top:20px;
  }
  .content .title{
    display:inline-block;
    margin-left:60px;
    font-size:14px;
  }
  .content .title1{
    display:inline-block;
    width:450px;
    height:25px;
    border-radius:5px;
    border:1px solid #dcdcdc;
    margin-left:15px;
  }
  .content .con{
    font-size:14px;
    margin-left:38px;
    margin-top:30px;
    margin-right: 10px;
    display:inline-block;
  }
  .content .con1{
    display:inline-block;
    width:450px;
    height:400px;
    border-radius:5px;
    border:1px solid #dcdcdc;
    margin-top:30px;
  }
  .content a{
    display: block;
    width:100px;
    height:30px;
    text-align:center;
    line-height:30px;
    background-color:deepskyblue;
    margin-left:130px;
    border-radius:5px;
    margin-top:20px;
    color:white;
  }
</style>
