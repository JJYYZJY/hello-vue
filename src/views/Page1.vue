<template>
  <div>
    page1 {{ msg }}
    <br />
    <a-date-picker />
    <br />
    <a-button v-auth="['admin']">button</a-button>
    <Logo />
  </div>
</template>

<script>
import Logo from "@/assets/home.svg";
export default {
  data() {
    return {
      msg: "test"
    };
  },
  components: {
    Logo
  }
};
</script>
<style scoped></style>
