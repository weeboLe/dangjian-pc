<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <forum-box></forum-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import ForumBox from "../components/forum/ForumBox";
import IndexHeader from "../components/index/IndexHeader";
import IndexFooter from "../components/index/IndexFooter";
import PublicNav from "../components/publicNav";
export default {
  name: "Forum",
  components: { PublicNav, IndexFooter, IndexHeader, ForumBox }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
