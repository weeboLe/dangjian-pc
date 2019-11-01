<template>
  <div class="content">
    <index-header></index-header>
    <index-nav></index-nav>
    <index-slider></index-slider>
    <index-quick></index-quick>
    <index-news></index-news>
    <index-banner></index-banner>
    <index-ruler-study></index-ruler-study>
    <index-help></index-help>
    <index-end-banner></index-end-banner>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from "../components/index/IndexHeader";
import IndexNav from "../components/index/IndexNavBox/IndexNav";
import IndexSlider from "../components/index/IndexSlider";
import IndexQuick from "../components/index/IndexQuick";
import IndexNews from "../components/index/IndexNews";
import IndexBanner from "../components/index/IndexBanner";
import IndexRulerStudy from "../components/index/IndexRulerStudy";
import IndexHelp from "../components/index/IndexHelp";
import IndexEndBanner from "../components/index/IndexEndBanner";
import IndexFooter from "../components/index/IndexFooter";

export default {
  name: "Index",
  components: {
    IndexFooter,
    IndexEndBanner,
    IndexHelp,
    IndexRulerStudy,
    IndexBanner,
    IndexNews,
    IndexQuick,
    IndexSlider,
    IndexNav,
    IndexHeader
  }
};
</script>

<style scoped>
.content {
  min-width: 1000px;
  width: 100%;
  height: 100%;
}
</style>
