<template>
  <!--member-->
  <div class="bodyMember">
    <div class="memberBox">
      <p class="siteBox">
        当前位置：
        <a href="#" class="site">
          首页
        </a>
        <span>&gt;</span>
        <a href="#" class="site">
          党员管理
        </a>
      </p>
      <div class="memberNavs">
        <router-link tag="a" to="/member/memberDues" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav1.png" alt="">
          <p>党费缴纳</p>
        </router-link>
        <router-link tag="a" to="/member/memberTransfer" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav2.png" alt="">
          <p>关系转接</p>
        </router-link>
        <router-link tag="a" to="/member/memberData" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav3.png" alt="">
          <p>数据分析</p>
        </router-link>
        <router-link tag="a" to="/member/memberFrame" href="#" class="memberNav">
          <img src="~@/assets/images/memberNav4.png" alt="">
          <p>组织架构</p>
        </router-link>
        <!--<a href="#" class="memberNav">-->
          <!--<img src="~@/assets/images/memberNav4.png" alt="">-->
          <!--<p>组织架构</p>-->
        <!--</a>-->
      </div>
      <div class="memberContent">
        <div class="memberLeft">
          <div class="mbrLeftReuse">
            <div class="mbrLeftTit">
              <p>制度文件</p>
              <router-link tag="a" to="/fileDetails" href="#">更多&gt;&gt;</router-link>
            </div>
            <ul class="mbrLeftHrefs">
              <li class="mbrLeftHref" v-for="(s,index) in systemDocument_data" :key="index">
                <router-link tag="a" to="/fileDetails" href="#" :title="s.systemDocumentText">
                  <p>{{s.systemDocumentText}}</p>
                  <span>{{s.systemDocumentTime}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="mbrLeftReuse">
            <div class="mbrLeftTit">
              <p>党员风采</p>
              <a href="#">更多&gt;&gt;</a>
            </div>
            <ul class="mbrLeftHrefs">
              <li class="mbrLeftHref" v-for="(m ,index) in memberMien_data" :key="index">
                <router-link tag="a" to="/informDetails" href="#" :title="m.memberMienText">
                  <p>{{m .memberMienText}}</p>
                  <span>{{m.memberMienTime}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="memberRight">
          <div class="mbrRtReuse">
            <div class="mbrRtTit">
              <p>专题学习</p>
              <router-link tag="a" to="/photoDetails" href="#">更多&gt;&gt;</router-link>
            </div>
            <div class="mbrRtHrefs">
              <router-link tag="a" to="/photoDetails" href="#" class="mbrRtHref" v-for="(m1,index) in mbrRtReuse1_data" :key="index">
                <img :src="m1.mbrRtReuse1Img" alt="">
              </router-link>
            </div>
          </div>
          <div class="mbrRtReuse">
            <div class="mbrRtTit">
              <p>党组织关系转接信息</p>
              <router-link tag="a" to="/photoDetails" href="#">更多&gt;&gt;</router-link>
            </div>
            <div class="mbrRtHrefs">
              <router-link tag="a" href="#" to="/photoDetails" class="mbrRtHref" v-for="(m2,index) in mbrRtReuse2_data" :key="index">
                <img :src="m2.mbrRtReuse2Img" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MemberBox",
      data(){
          return{
            systemDocument_data:[
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              },
              {
                systemDocumentText:'山阳县村级党组织领导班子和第十次村民委员会换届选举工作安排意见',
                systemDocumentTime:'10-1'
              }
            ],
            memberMien_data:[
              {
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },
              {
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },
              {
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },
              {
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },{
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },
              {
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },{
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },
              {
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },{
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              },
              {
                memberMienText:'关于印发《中共山阳县委组织部部机关 管理制度》的通知3',
                memberMienTime:'8-24'
              }




            ],
            mbrRtReuse1_data:[
              {mbrRtReuse1Img:require('@/assets/images/mbrRtHref.png')},
              {mbrRtReuse1Img:require('@/assets/images/mbrRtHref.png')},
              {mbrRtReuse1Img:require('@/assets/images/mbrRtHref.png')},
              {mbrRtReuse1Img:require('@/assets/images/mbrRtHref.png')}
            ],
            mbrRtReuse2_data:[
              {mbrRtReuse2Img:require('@/assets/images/mbrRtHref.png')},
              {mbrRtReuse2Img:require('@/assets/images/mbrRtHref.png')},
              {mbrRtReuse2Img:require('@/assets/images/mbrRtHref.png')},
              {mbrRtReuse2Img:require('@/assets/images/mbrRtHref.png')}
            ]
          }
      }
    }
</script>

<style scoped>
  .bodyMember{
    width:100%;
  }
  .memberBox{
    width:978px;
    margin:0 auto;
    padding-left: 22px;
    padding-bottom: 100px;
  }
  .memberNavs{
    width:100%;
  }
  .memberNavs .memberNav{
    display: inline-block;
    padding-top: 15px;
    margin-right:80px;
  }
  .memberNav p{
    font-size: 14px;
    color:black;
    margin:10px 0;
  }
  /*memberLeft*/
  .memberContent{
    overflow: hidden;
  }
  .memberContent .memberLeft{
    width:66%;
    float:left;
  }
  .memberLeft .mbrLeftReuse{
    margin-top: 20px;
  }
  .mbrLeftReuse .mbrLeftTit{
    width:100%;
    overflow: hidden;
    line-height: 34px;
    border-bottom: 2px solid #e5e5e5;
  }
  .mbrLeftTit p{
    font-size: 18px;
    float: left;
    border-bottom:2px solid #ff0000;
  }
  .mbrLeftTit a{
    font-size: 14px;
    color:#9a9a9a;
    float: right;
    display: block;
  }
  .mbrLeftHrefs{
    width:100%;
    margin-top:16px;
  }
  .mbrLeftHrefs .mbrLeftHref{
    width:100%;
    font-size: 13px;
    line-height: 34px;
  }
  .mbrLeftHref a{
    width:100%;
    display: block;
    height:34px;
  }
  .mbrLeftHref a:hover p{
    color:red;
  }
  .mbrLeftHref a:hover span{
    color:red;
  }
  .mbrLeftHref p{
    width:500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:black;
    display: inline-block;
  }
  .mbrLeftHref span{
    float:right;
    padding-right: 5px;
    color:black;
  }
  /*memberRight*/
  .memberContent .memberRight{
    width:30%;
    float: right;
  }
  .memberRight .mbrRtReuse{
    margin-top: 20px;
  }
  .mbrRtReuse .mbrRtTit{
    overflow: hidden;
    line-height: 36px;
    border-bottom: 2px solid #ff0000;
  }
  .mbrRtTit p{
    font-size: 18px;
    color:white;
    background-color: #ff0000;
    float: left;
    padding:0 12px;
  }
  .mbrRtTit a{
    float: right;
    font-size: 14px;
    color:#9a9a9a;
  }
  .mbrRtReuse .mbrRtHrefs{
    padding-bottom: 8px;
  }
  .mbrRtHrefs .mbrRtHref{
    display: block;
    margin-top: 20px;
  }
  .mbrRtHref img{
    margin:0 auto;
  }
</style>
