<template>
  <div class="newsBox">
    <div class="titleBox">
      <a href="#" class="title title1" @mouseenter="showList1()" ref="border1">
        学习交流
        <span class="titleBorder" v-show="tit1"></span>
      </a>
      <a href="#" class="title" @mouseenter="showList2()" ref="border2">
        勤廉楷模
        <span class="titleBorder" v-show="tit2"></span>
      </a>
      <a href="#" class="title" @mouseenter="showList3()" ref="border2">
        以案示警
        <span class="titleBorder" v-show="tit3"></span>
      </a>
      <a href="#" class="title" @mouseenter="showList4()" ref="border3">
        廉政时讯
        <span class="titleBorder" v-show="tit4"></span>
      </a>
    </div>
    <div class="hrefBox">
      <ul class="hrefUl leftHrefs" v-show="tab1">
        <li class="hrefLi" v-for="(h1,index) in Hrefs1_data" :key="index">
          <router-link tag="a" to="/newsParty" href="#" :title="h1.hrefText">
            <p class="hrefText">{{h1.hrefText}}</p>
            <span class="hrefTime">{{h1.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="tab2">
        <li class="hrefLi" v-for="(h2,index) in Hrefs2_data" :key="index">
          <router-link tag="a" to="/informDetails" href="#" :title="h2.hrefText">
            <p class="hrefText">{{h2.hrefText}}</p>
            <span class="hrefTime">{{h2.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="tab3">
        <li class="hrefLi" v-for="(h3,index) in Hrefs3_data" :key="index">
          <router-link tag="a" to="/newsParty" href="#" :title="h3.hrefText">
            <p class="hrefText">{{h3.hrefText}}</p>
            <span class="hrefTime">{{h3.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="hrefUl rightHrefs" v-show="tab4">
        <li class="hrefLi" v-for="(h4,index) in Hrefs4_data" :key="index">
          <router-link tag="a" to="/informDetails" href="#" :title="h4.hrefText">
            <p class="hrefText">{{h4.hrefText}}</p>
            <span class="hrefTime">{{h4.hrefTime}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexNav6Right",
      data(){
        return{
          tab1:true,
          tab2:false,
          tab3:false,
          tab4:false,
          tit1:true,
          tit2:false,
          tit3:false,
          tit4:false,
          Hrefs1_data:[
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            }
          ],
          Hrefs2_data:[
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            }
          ],
          Hrefs3_data:[
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            },
            {
              hrefText:'党员干部这些曾被点名通报的“特产”不能收',
              hrefTime:'6-8'
            }
          ],
          Hrefs4_data:[
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            },
            {
              hrefText:'关于印发《中共山阳县委组织部机关管理制度》的通知',
              hrefTime:'6-8'
            }
          ]
        }
      },
      methods:{
        showList1(){
          this.tab1 = true;
          this.tab2 = false;
          this.tab3 = false;
          this.tab4 = false;
          this.tit1 = true;
          this.tit2 = false;
          this.tit3 = false;
          this.tit4 = false;
        },
        showList2(){
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = false;
          this.tab4 = false;
          this.tit1 = false;
          this.tit2 = true;
          this.tit3 = false;
          this.tit4 = false;
        },
        showList3(){
          this.tab1 = false;
          this.tab2 = false;
          this.tab3 = true;
          this.tab4 = false;
          this.tit1 = false;
          this.tit2 = false;
          this.tit3 = true;
          this.tit4 = false;
        },
        showList4(){
          this.tab1 = false;
          this.tab2 = false;
          this.tab3 = false;
          this.tab4 = true;
          this.tit1 = false;
          this.tit2 = false;
          this.tit3 = false;
          this.tit4 = true;
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
    margin-right:8px;
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
