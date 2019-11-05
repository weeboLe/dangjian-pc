<template>
  <div class="content">
    <div class="content_s">
      <div class="details">
        <h3 class="title">{{title}}</h3>
        <div class="main" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from "@/api";
export default {
  name: "fileDetailsCenter",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  mounted() {
    let data = this.$route.query;
    common
      .columnData(data)
      .then(res => {
        console.log(res);

        if (res.type == "success") {
          this.title = res.data.title;
          this.content = res.data.content;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  margin-bottom: 70px;
  flex-grow: 1;
}

.content .content_s {
  width: 50%;
  margin: 0 auto;
  border: 1px solid #dcdcdc;
  height: 100%;
}

.content .details {
  padding: 0 30px;
}

.content .details .title {
  text-align: center;
  line-height: 70px;
}
.main {
  margin-bottom: 40px;
}
.main >>> img {
  max-width: 100%;
  margin: 0 auto !important;
}

.main >>> p,
.main >>> span {
  font-size: 16px;
  color: black;
  line-height: 30px;
  margin-top: 20px;
}
</style>
