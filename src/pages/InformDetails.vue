<template>
  <div class="pageContent">
    <index-header></index-header>
    <public-nav></public-nav>
    <inform-details-header></inform-details-header>
    <inform-details-center></inform-details-center>
    <membership-form-footer></membership-form-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import InformDetailsHeader from "../components/informDetails/informDetailsHeader";
import InformDetailsCenter from "../components/informDetails/informDetailsCenter";
import MembershipFormFooter from "../components/membershipForm/membershipFormFooter";
export default {
  name: "InformDetails",
  components: {
    MembershipFormFooter,
    InformDetailsCenter,
    InformDetailsHeader,
    PublicNav,
    IndexHeader
  }
};
</script>

<style scoped>
.pageContent {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
