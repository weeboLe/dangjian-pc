<template>
  <div class="study study2">
    <div class="studyTit">
      <p class="studyTitText">党员风采</p>
      <router-link tag="a" to="/photoDetails" href="#" class="studyMore">更多&gt;&gt;</router-link>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data" :key="index">
          <router-link tag="a" to="/informDetails" href="#" :title="l.hrefText">
            <p class="hrefText">{{l.hrefText}}</p>
            <span class="hrefTime">{{l.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexList4",
        data(){
          return{
            leftHrefs_data:[
              {
                hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
                hrefTime:'8-24'
              },
              {
                hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
                hrefTime:'8-24'
              },
              {
                hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
                hrefTime:'8-24'
              },
              {
                hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
                hrefTime:'8-24'
              },
              {
                hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
                hrefTime:'8-24'
              },
              {
                hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
                hrefTime:'8-24'
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .study2{
    padding-top:40px;
  }
  .study .studyTit{
    background-color: #f4f4f4;
    border-bottom:1px solid #e5e5e5;
  }
  .studyTit .studyTitText{
    font-size:16px;
    color:white;
    line-height:36px;
    padding:0 16px;
    background-color: #fe0000;
    display:inline-block;
  }
  .studyTit .studyMore{
    font-size:14px;
    color:#979797;
    float:right;
    margin-right: 16px;
    line-height:36px;
  }
  .hrefBox{
    width:100%;
  }
  .hrefBox .hrefUl{
    width:100%;
    margin-top:16px;
  }
  .hrefUl .hrefLi{
    width:100%;
    font-size: 13px;
    position: relative;
    overflow: hidden;
    line-height: 38px;
    display: block;
  }
  .hrefLi a{
    /*overflow: hidden;*/
    width:100%;
    display: block;
    height:40px;
  }
  .hrefLi .hrefText{
    width:295px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /*float:left;*/
    margin-right: 15px;
    color:black;
    display: inline-block;
  }
  .hrefLi .hrefTime{
    float:right;
    padding-right: 5px;
    color:black;
  }
</style>
