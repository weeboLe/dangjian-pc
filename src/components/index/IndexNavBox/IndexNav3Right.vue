<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title title1" @mouseenter="showLeft()" ref="leftBorder">
        党务公开
        <span class="titleBorder" v-show="leftTit" ></span>
      </a>
      <a href="#" class="title title2" @mouseenter="showRight()" ref="rightBorder">
        党内奖惩
        <span class="titleBorder" v-show="rightTit" ></span>
      </a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs" v-show="leftTab">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data" :key="index">
          <router-link tag="a" to="/informDetails" href="#" :title="l.hrefText">
            <p class="hrefText">{{l.hrefText}}</p>
            <span class="hrefTime">{{l.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="rightTab">
        <li class="hrefLi" v-for="(r,index) in rightHrefs_data" :key="index">
          <router-link tag="a" to="/newsParty" href="#" :title="r.hrefText">
            <p class="hrefText">{{r.hrefText}}</p>
            <span class="hrefTime">{{r.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexNav3Right",
      data(){
        return{
          leftTab:true,
          rightTab:false,
          leftTit:true,
          rightTit:false,
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
          ],
          rightHrefs_data:[
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'01-01'
            }
          ]
        }
      },
      methods:{
        showLeft(){
          this.leftTab = true;
          this.rightTab = false;
          this.leftTit = true;
          this.rightTit = false;
        },
        showRight(){
          this.leftTab = false;
          this.rightTab = true;
          this.leftTit = false;
          this.rightTit = true;
        }
      }
    }
</script>

<style scoped>
  .newsBox{
    float:left;
    width:450px;
    margin-left:30px;
    margin-top: 15px;
  }
  .newsBox .titleBox{
    width:100%;
    border-bottom: 1px solid #dcdcdc;
  }
  .titleBox .title{
    font-size:20px;
    color:black;
    font-weight: bold;
    display: inline-block;
    margin-right:20px;
    line-height:22px;
    position: relative;
    padding-left:10px;
  }
  .titleBox .title1{
    padding-left:10px;
    border-left: 4px solid #d02424;
  }
  .title .titleBorder{
    display: block;
    width:90px;
    height:2px;
    background-color: #fe0000;
    position:absolute;
    left:5px;
    top:33px;
  }
  .newsBox .hrefBox{
    width:100%;
  }
  .hrefBox .hrefUl{
    width:100%;
    margin-top:15px;
    list-style: none;
  }
  .hrefUl .hrefLi{
    width:100%;
    font-size: 15px;
    position:relative;
    line-height: 30px;
  }
  .hrefLi a{
    width:100%;
    display: block;
    height:40px;
    color:black;
  }
  .hrefUl .hrefLi a:hover{
    color:#ff0000;
  }
  .hrefText{
    width:350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
  .hrefLi .hrefTime{
    float:right;
    padding-right: 10px;
  }
</style>
