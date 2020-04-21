<template>
  <div>
    page1 {{ msg }}
    <br />
    <a-button v-auth="['admin']">button</a-button>
    <img :src="logo" />
  </div>
</template>

<script>
import logo from "@/assets/home.svg";
export default {
  data() {
    return {
      msg: "test",
      logo: logo
    };
  }
};
</script>
<style scoped></style>
