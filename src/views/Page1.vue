<template>
  <div>
    page1 {{ msg }}
    <br />
    <a-button v-auth="['admin']">button</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "test"
    };
  }
};
</script>
<style scoped></style>
