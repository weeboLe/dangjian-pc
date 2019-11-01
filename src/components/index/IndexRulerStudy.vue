<template>
  <!--rulerStudy-->
  <div class="bodyRulerStudy">
    <div class="rulerStudy">
      <div class="rulerBox">
        <index-list2></index-list2>
        <index-list3></index-list3>
      </div>
      <div class="studyBox">
        <index-study-imgs></index-study-imgs>
        <index-list4></index-list4>
      </div>
    </div>
  </div>
</template>

<script>
    import IndexList2 from "./IndexList2";
    import IndexList3 from "./IndexList3";
    import IndexStudyImgs from "./IndexStudyImgs";
    import IndexList4 from "./IndexList4";
    export default {
        name: "IndexRulerStudy",
      components: {IndexList4, IndexStudyImgs, IndexList3, IndexList2}
    }
</script>

<style scoped>
  /*rulerStudy*/
  .bodyRulerStudy{
    width:100%;
  }
  .bodyRulerStudy .rulerStudy{
    width:1000px;
    margin:0 auto;
    overflow: hidden;
  }
  .rulerStudy .rulerBox{
    width:56%;
    float: left;
  }
  .rulerStudy .studyBox{
    width:43%;
    float: right;
    padding-top: 2px;
  }
</style>
