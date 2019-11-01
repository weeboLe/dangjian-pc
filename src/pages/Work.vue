<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <work-box></work-box>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import WorkBox from "../components/work/WorkBox";
import PublicNav from "../components/publicNav";
export default {
  name: "Work",
  components: { PublicNav, WorkBox, IndexHeader }
};
</script>

<style scoped>
.content {
  width: 100%;
  min-width: 1000px;
  height: 100%;
}
</style>
