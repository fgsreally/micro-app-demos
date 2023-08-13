<template>
  <a-row>
    <a-col>
      <a-typography-title>主应用(style scope)</a-typography-title>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12" class="first-col"
      >class="first-col"<br />background-color: red;<br />font-size:
      50px;</a-col
    >
    <a-col :span="12" class="second-col"
      >class="second-col"<br />background-color: green;<br />font-size:
      50px;</a-col
    >
  </a-row>
  <merak-vue2 routePath="/css-isolation"></merak-vue2>
  <merak-react routePath="/css-isolation"></merak-react>
  <merak-vite routePath="/css-isolation"></merak-vite>
</template>

<script lang="ts" setup>
import MerakVue2 from './merak/Vue2.vue'
import MerakReact from './merak/React.vue'
import MerakVite from './merak/Vite.vue'
</script>

<script lang="ts">
export default {
  name: 'CssIsolation'
}
</script>

<style lang="less" scoped>
.first-col {
  color: #ffffff;
  background-color: red;
  font-size: 50px;
}

.second-col {
  color: #ffffff;
  background-color: green;
  font-size: 50px;
}

.app {
  margin-top: 20px;
}
</style>
