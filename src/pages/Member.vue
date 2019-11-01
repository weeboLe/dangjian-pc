<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <member-box></member-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import MemberBox from "../components/member/MemberBox";
import IndexFooter from "../components/index/IndexFooter";
import PublicNav from "../components/publicNav";
export default {
  name: "Member",
  components: { PublicNav, IndexFooter, MemberBox, IndexHeader }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
