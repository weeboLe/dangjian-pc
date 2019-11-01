<template>
  <div class="pageContent">
    <index-header></index-header>
    <public-nav></public-nav>
    <difficult-apply-header></difficult-apply-header>
    <difficult-apply-center></difficult-apply-center>
    <membership-form-footer></membership-form-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import DifficultApplyHeader from "../components/difficultApply/DifficultApplyHeader";
import DifficultApplyCenter from "../components/difficultApply/DifficultApplyCenter";
import MembershipFormFooter from "../components/membershipForm/membershipFormFooter";
export default {
  name: "DifficultApply",
  components: {
    MembershipFormFooter,
    DifficultApplyCenter,
    DifficultApplyHeader,
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
