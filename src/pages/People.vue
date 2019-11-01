<template>
  <div class="content">
    <index-header></index-header>
    <public-nav></public-nav>
    <people-box></people-box>
    <index-footer></index-footer>
  </div>
</template>

<script>
import PeopleBox from "../components/people/PeopleBox";
import IndexHeader from "../components/index/IndexHeader";
import IndexFooter from "../components/index/IndexFooter";
import PublicNav from "../components/publicNav";
export default {
  name: "People",
  components: { PublicNav, IndexFooter, IndexHeader, PeopleBox }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
