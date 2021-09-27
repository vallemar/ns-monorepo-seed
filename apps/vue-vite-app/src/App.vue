<script setup lang="ts">
import { exampleCommonCode } from "@core-common/example-common-code/example-common-code";
import { authenticate } from "@core-common/example-code-by-platform/authentication";
import { commonCodeAndByPlatform } from "@core-common/example-code-by-platform-with-common/example-common";
import { ref } from "@vue/reactivity";

const exampleCommon = ref("");
const exampleCommonByPlatform = ref("");
const exampleCommonByPlatformWithCommon = ref("");

const callCommonCode = () => {
  exampleCommon.value = exampleCommonCode();
  exampleCommonByPlatform.value = authenticate("xxx@xxx.com", "123456");
  exampleCommonByPlatformWithCommon.value = commonCodeAndByPlatform();
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Vue + Vite + NativeScript</h1>
  <button @click="callCommonCode">BTN RUN SHARED CODE</button>
  <p>{{ exampleCommon }}</p>
  <p>{{ exampleCommonByPlatform }}</p>
  <p>{{ exampleCommonByPlatformWithCommon }}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
