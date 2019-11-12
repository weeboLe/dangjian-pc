<template>
  <div class="pageContent">
    <index-header></index-header>
    <public-nav></public-nav>
    <membership-form-header></membership-form-header>
    <membership-form-center></membership-form-center>
    <membership-form-footer></membership-form-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import MembershipFormHeader from "../components/membershipForm/membershipFormHeader";
import MembershipFormCenter from "../components/membershipForm/membershipFormCenter";
import MembershipFormFooter from "../components/membershipForm/membershipFormFooter";

export default {
  name: "MembershipForm",
  components: {
    MembershipFormFooter,
    MembershipFormCenter,
    MembershipFormHeader,
    PublicNav,
    IndexHeader
  }
};
</script>

<style scoped>
.pageContent {
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
