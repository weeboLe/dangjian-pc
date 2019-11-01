<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title">
        党建考核
      </a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs">
        <li class="hrefLi" v-for="(l,index) in leftHrefs_data" :key="index">
          <router-link tag="a" to="/newsParty" href="#" :title="l.hrefText">
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
        name: "IndexNav3Left",
      data(){
        return{
          leftHrefs_data:[
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
      }
    }
</script>

<style scoped>
  .newsBox{
    float:left;
    width:450px;
    margin-left:30px;
    margin-top: 15px;
    padding-right: 15px;
    border-right: 1px dashed #dcdcdc;
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
    margin-right:22px;
    line-height:22px;
    padding-left:10px;
    border-left: 4px solid #d02424;
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
    overflow: hidden;
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
