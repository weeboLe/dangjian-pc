<template>
  <div class="pageContent">
      <index-header></index-header>
      <public-nav></public-nav>
      <file-details-header></file-details-header>
      <file-details-center></file-details-center>
      <membership-form-footer></membership-form-footer>
  </div>
</template>

<script>
    import IndexHeader from "../components/index/IndexHeader";
    import PublicNav from "../components/publicNav";
    import FileDetailsHeader from "../components/fileDetails/fileDetailsHeader";
    import FileDetailsCenter from "../components/fileDetails/fileDetailsCenter";
    import MembershipFormFooter from "../components/membershipForm/membershipFormFooter";
    export default {
        name: "FileDetails",
      components: {MembershipFormFooter, FileDetailsCenter, FileDetailsHeader, PublicNav, IndexHeader}
    }
</script>

<style scoped>

</style>
