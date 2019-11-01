<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <learn-content></learn-content>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import LearnContent from "../components/learn/LearnContent";
import IndexFooter from "../components/index/IndexFooter";
import PublicNav from "../components/publicNav";
export default {
  name: "Learn",
  components: { PublicNav, IndexFooter, LearnContent, IndexHeader }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
