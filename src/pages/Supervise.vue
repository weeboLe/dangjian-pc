<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <supervise-box></supervise-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import SuperviseBox from "../components/supervise/SuperviseBox";
import IndexHeader from "../components/index/IndexHeader";
import IndexFooter from "../components/index/IndexFooter";
import PublicNav from "../components/publicNav";
export default {
  name: "Supervise",
  components: { PublicNav, IndexFooter, IndexHeader, SuperviseBox }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
