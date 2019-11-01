<template>
  <div class="memberNavs">
    <router-link tag="a" to="/member/memberDues" href="#" class="memberNav" >
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
    <router-link tag="a" to="/member" href="#" class="memberNav">
      <img src="~@/assets/images/memberNav1.png" alt="">
      <p>制度文件</p>
    </router-link>
    <router-link tag="a" to="/member" href="#" class="memberNav">
      <img src="~@/assets/images/memberNav2.png" alt="">
      <p>党员风采</p>
    </router-link>

  </div>
</template>

<script>
    export default {
        name: "IndexNav4",
        // data(){
        //   return{
            // memberNavs_data:[
            //   {
            //     menberNavImg:require('@/assets/images/memberNav1.png'),
            //     memberNavText:'党费缴纳',
            //     path:'#/member/memberDues',
            //   },
            //   {
            //     menberNavImg:require('@/assets/images/memberNav2.png'),
            //     memberNavText:'关系转接'
            //   },
            //   {
            //     menberNavImg:require('@/assets/images/memberNav3.png'),
            //     memberNavText:'数据分析'
            //   },
            //   {
            //     menberNavImg:require('@/assets/images/memberNav4.png'),
            //     memberNavText:'组织架构'
            //   },
            //   {
            //     menberNavImg:require('@/assets/images/memberNav1.png'),
            //     memberNavText:'制度文件'
            //   },
            //   {
            //     menberNavImg:require('@/assets/images/memberNav2.png'),
            //     memberNavText:'党员风采'
            //   }
            // ]
        //   }
        // }
    }
</script>

<style scoped>
  .memberNavs{
    width:100%;
    text-align: center;
  }
  .memberNavs .memberNav{
    display: inline-block;
    padding-top: 15px;
    margin:40px;
  }
  .memberNav p{
    font-size: 16px;
    color:black;
    margin:10px 0;
    text-align: center;
  }
</style>
