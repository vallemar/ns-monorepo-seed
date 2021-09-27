<template>
  <StackLayout>
    <label text="TestComponentImport"></label>
    <Btn></Btn>
  </StackLayout>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import Btn from "@native/components/Btn.vue";

// @ts-ignore
export default Vue.extend({
  components: { Btn },
});
</script>
