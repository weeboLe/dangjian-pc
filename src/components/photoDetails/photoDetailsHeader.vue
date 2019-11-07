<template>
  <div class="content">
    <div class="content_s">
      <div class="details">
        <h3 class="title">{{data.title}}</h3>
        <p class="time">{{data.releaseDate}}</p>
        <div class="main" v-if="data.content" v-html="data.content"></div>
        <div class="pptx" v-if="data.fileClassify == 1">
          <p>暂时无法在线预览ppt</p>请下载预览:
          <a :href="base.imgurl + data.videoFile[0].filePath" class="download">下载</a>
          <!-- <iframe
            :src="base.imgurl + data.videoFile[0].filePath"
            width="100%"
            height="100%"
            frameborder="1"
          ></iframe>-->
        </div>
        <div class="audio" v-if="data.fileClassify == 2">
          <audio id="audio" :src="base.imgurl + data.videoFile[0].filePath" controls="controls"></audio>
        </div>
        <div class="video" v-if="data.fileClassify == 3">
          <video width="100%" height controls>
            <source type="video/mp4" :src="base.imgurl + data.videoFile[0].filePath" />
          </video>
        </div>
        <p class="summary">{{data.summary}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from "@/api";
import base from "@/api/base";
export default {
  name: "photo-details-header",
  data() {
    return {
      base,
      data: {
        content: "",
        fileClassify: "",
        releaseDate: "",
        summary: "",
        videoFile: []
      }
    };
  },
  mounted() {
    let data = this.$route.query;
    common
      .columnData(data)
      .then(res => {
        if (res.type == "success") {
          this.data = res.data;
        }
      })
      .catch(err => {
        // console.log(err);
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
  width: 60%;
  margin: 0 auto;
  padding: 0px 30px;
}
.time {
  margin: 10px 0;
}
.pptx p {
  margin: 10px 0;
}

audio,
video {
  display: block;
  margin: 0 auto;
}
audio:focus {
  outline: none;
}
.download {
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.summary {
  margin: 10px 0;
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
