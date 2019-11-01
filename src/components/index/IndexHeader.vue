<template>
  <!--headerSearch-->
  <div class="headerSearch">
    <div class="headerBox">
      <div class="header">
        <div class="weather">
          <iframe
            src="//www.seniverse.com/weather/weather.aspx?uid=UB92757D5B&cid=CHSN000000&l=zh-CHS&p=SMART&a=1&u=C&s=4&m=2&x=1&d=0&fc=FFFFFF&bgc=&bc=&ti=0&in=0&li="
            frameborder="0"
            scrolling="no"
            width="300"
            height="40"
            allowtransparency="true"
          ></iframe>
        </div>
        <div class="headerRight">
          <a class="addCollect" href="javascript:void(0);">加入收藏</a>
          <span class="headerBar">|</span>
          <a href="#" class="logOut" @click="logOut">
            <span>{{userName}}</span> 退出
          </a>
        </div>
      </div>
    </div>
    <div class="textSearch">
      <a href="#" class="textImg">
        <img src="../../assets/images/logo.png" alt />
      </a>
      <div class="searchBox">
        <input type="text" placeholder="请输入关键字" class="searchInput" />
        <a href="#" class="searchIcon">
          <img src="../../assets/images/search.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexHeader",
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    logOut() {
      // localStorage.setItem("tickt", "");
      var state = confirm("确定要退出吗");
      if (state) {
        localStorage.setItem("ticket", "");
        this.$router.push({ name: "Login" });
      }
    }
  },
  mounted() {
    // document.querySelector(".addCollect").onclick = function() {
    //   alert("已收藏");
    // };

    let userData = JSON.parse(localStorage.getItem("user"));
    this.userName = userData.username;
  }
};
</script>

<style scoped>
.headerSearch {
  background-size: 100% 100%;
}
.headerRight {
  margin: 0 10px;
}
.headerBar {
  padding: 0 10px;
}
</style>
