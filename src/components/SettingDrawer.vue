<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      :afterVisibleChange="afterVisibleChange"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <div>
          <h2>主题</h2>
          <a-radio-group v-model="navTheme">
            <a-radio value="dark">黑色</a-radio>
            <a-radio value="light">白色</a-radio>
          </a-radio-group>
          <h2>菜单</h2>
          <a-radio-group v-model="navLayout">
            <a-radio value="left">左侧</a-radio>
            <a-radio value="top">顶部</a-radio>
          </a-radio-group>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navTheme: "dark",
      navLayout: "left"
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style scope>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  background: rgb(41, 180, 235);
  height: 48px;
  width: 48px;
  line-height: 48px;
  font-size: 20px;
  text-align: center;
  color: white;
  border-radius: 8px 0 0 8px;
}
</style>
