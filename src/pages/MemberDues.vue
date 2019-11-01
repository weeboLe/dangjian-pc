<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <member-dues-box></member-dues-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import MemberDuesBox from "../components/memberDues/MemberDuesBox";
import IndexFooter from "../components/index/IndexFooter";
export default {
  name: "MemberDues",
  components: { IndexFooter, MemberDuesBox, PublicNav, IndexHeader }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
