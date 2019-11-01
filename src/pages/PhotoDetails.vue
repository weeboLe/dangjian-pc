<template>
  <div class="pageContent">
    <index-header></index-header>
    <public-nav></public-nav>
    <photo-details-header></photo-details-header>
    <membership-form-footer></membership-form-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import PhotoDetailsHeader from "../components/photoDetails/photoDetailsHeader";
import MembershipFormFooter from "../components/membershipForm/membershipFormFooter";

export default {
  components: {
    MembershipFormFooter,
    PhotoDetailsHeader,
    PublicNav,
    IndexHeader
  },
  name: "photo-details"
};
</script>

<style scoped>
.pageContent {
display:flex;
flex-direction: column;
  height: 100%;
}
</style>
