<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <member-frame-box></member-frame-box>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import MemberFrameBox from "../components/memberFrame/MemberFrameBox";
export default {
  name: "MemberFrame",
  components: { MemberFrameBox, PublicNav, IndexHeader }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
