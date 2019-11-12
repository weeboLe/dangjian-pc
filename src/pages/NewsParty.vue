<template>
  <div class="pageContent">
    <index-header></index-header>
    <public-nav></public-nav>
    <news-party-header></news-party-header>
    <news-party-center></news-party-center>
    <membership-form-footer></membership-form-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import NewsPartyHeader from "../components/newsParty/newsPartyHeader";
import NewsPartyCenter from "../components/newsParty/newsPartyCenter";
import MembershipFormFooter from "../components/membershipForm/membershipFormFooter";
export default {
  name: "NewsParty",
  components: {
    MembershipFormFooter,
    NewsPartyCenter,
    NewsPartyHeader,
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
