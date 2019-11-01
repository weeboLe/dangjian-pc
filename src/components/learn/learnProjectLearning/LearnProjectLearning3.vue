 <template>
  <div class="second second1">
    <router-link tag="a" class="sec1" to="/photoDetails" href="#" v-for="(o,index) in onlineSchool1_data" :key="index">
      <img class="sec1Img" :src="o.onlineSchool1Img" alt="">
      <p class="sec1Text">{{o.onlineSchool1Text}}</p>
      <div class="sec1Bottom">
        <p class="sec1Time">{{o.onlineSchool1Time}}</p>
        <p class="sec1Add">
          <span class="studyNum">{{o.onlineSchool1Num}}</span>
          人已学习
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "LearnProjectLearning3",
      data(){
        return{
          onlineSchool1_data:[
            {
              onlineSchool1Img:require('@/assets/images/onlineSchool3-1.jpg'),
              onlineSchool1Text:'1全国两会解读聚焦两会PPT',
              onlineSchool1Time:'已过期',
              onlineSchool1Num:'4'
            },
            {
              onlineSchool1Img:require('@/assets/images/onlineSchool3-2.jpg'),
              onlineSchool1Text:'1全国两会解读聚焦两会PPT',
              onlineSchool1Time:'已过期',
              onlineSchool1Num:'4'
            },
            {
              onlineSchool1Img:require('@/assets/images/onlineSchool1-1.png'),
              onlineSchool1Text:'1全国两会解读聚焦两会PPT',
              onlineSchool1Time:'已过期',
              onlineSchool1Num:'4'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .second{
    width:100%;
  }
  .second1 .sec1{
    display:inline-block;
    background-color: #eeeeee;
    border-radius: 6px;
    box-shadow: 5px 5px 6px 1px #dfdede;
    margin-bottom: 50px;
    margin-right: 50px;
    margin-left: 50px;
  }
  .sec1 .sec1Img{
    width:360px;
    height:300px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .second .sec1:nth-child(2n){
    margin-right: 0;
  }
  .sec1 .sec1Text{
    font-size: 12px;
    color:#838383;
    text-indent: 10px;
    line-height: 40px;
  }
  .sec1 .sec1Bottom{
    padding-bottom: 10px;
  }
  .sec1Bottom .sec1Time{
    font-size: 11px;
    color:white;
    background-color: #b5b5b5;
    line-height: 25px;
    padding:0 10px;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
  }
  .sec1Bottom .sec1Add{
    font-size: 11px;
    color:#838383;
    float:right;
    margin-right:10px;
  }
  .sec1Add .studyNum{
    color:#fd3f3f;
  }
</style>
