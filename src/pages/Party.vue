<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <party-member></party-member>
    <index-footer></index-footer>
  </div>
</template>

<script>
import PartyMember from "../components/partyMember/partyMember";
import IndexHeader from "../components/index/IndexHeader";
import IndexFooter from "../components/index/IndexFooter";
import PublicNav from "../components/publicNav";
export default {
  name: "Party",
  components: { PublicNav, IndexFooter, IndexHeader, PartyMember }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
