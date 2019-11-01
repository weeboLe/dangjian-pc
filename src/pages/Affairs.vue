<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <affairs-box></affairs-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import AffairsBox from "../components/affairs/AffairsBox";
import PublicNav from "../components/publicNav";
import IndexFooter from "../components/index/IndexFooter";
export default {
  name: "Affairs",
  components: { IndexFooter, PublicNav, AffairsBox, IndexHeader }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
