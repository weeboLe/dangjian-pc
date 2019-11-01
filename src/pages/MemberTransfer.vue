<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <member-transfer-box></member-transfer-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import MemberTransferBox from "../components/memberTransfer/MemberTransferBox";
import IndexFooter from "../components/index/IndexFooter";
export default {
  name: "MemberTransfer",
  components: { IndexFooter, MemberTransferBox, PublicNav, IndexHeader }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
