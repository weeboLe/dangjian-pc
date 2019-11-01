<template>
  <div class="pageContent">
    <index-header></index-header>
    <public-nav></public-nav>
    <message-header></message-header>
    <membership-form-footer></membership-form-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import PublicNav from "../components/publicNav";
import MessageHeader from "../components/message/messageHeader";
import MembershipFormFooter from "../components/membershipForm/membershipFormFooter";
export default {
  name: "Message",
  components: { MembershipFormFooter, MessageHeader, PublicNav, IndexHeader }
};
</script>

<style scoped>
.pageContent {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
