<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <party-flag-box></party-flag-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import PartyFlagBox from "../components/partyFlag/partyFlagBox";
import IndexHeader from "../components/index/IndexHeader";
import IndexFooter from "../components/index/IndexFooter";
import PublicNav from "../components/publicNav";
export default {
  name: "Flags",
  components: { PublicNav, IndexFooter, IndexHeader, PartyFlagBox }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
