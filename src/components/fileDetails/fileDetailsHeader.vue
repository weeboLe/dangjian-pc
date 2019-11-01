<template>
    <div class="content">
      <p class="font">当前位置：首页&nbsp;>&nbsp;制度文件<span class="notbr">&nbsp;>详情</span></p>
    </div>
</template>

<script>
    export default {
        name: "fileDetailsHeader"
    }
</script>

<style scoped>
  .content{
    width:100%;
  }
  .content .font{
    width:45%;
    margin: 0 auto;
    font-size:16px;
    color:black;
    line-height:50px;
  }
  .content .font .notbr{
    color:red;
  }

</style>
