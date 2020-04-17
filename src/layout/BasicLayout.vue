<template>
  <div>
    <Header />
    <Footer />
    <router-view></router-view>
    <SiderMenu />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
export default {
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>
<style scoped></style>
