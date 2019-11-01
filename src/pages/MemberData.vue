<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <member-data-box></member-data-box>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import MemberDataBox from "../components/memberData/MemberDataBox";
export default {
  name: "MemberData",
  components: { MemberDataBox, PublicNav, IndexHeader }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
