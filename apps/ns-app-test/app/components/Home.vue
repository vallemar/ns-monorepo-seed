<template>
  <Page>
    <StackLayout style="padding: 15px">
      <Btn @tap="callCommonCode()"></Btn>
      <label :text="exampleCommon" />
      <label :text="exampleCommonByPlatform" />
      <label :text="exampleCommonByPlatformWithCommon" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import Btn from "@native/components/Btn.vue";
import { exampleCommonCode } from "@core-common/example-common-code/example-common-code";
import { authenticate } from "@core-common/example-code-by-platform/authentication";
import { commonCodeAndByPlatform } from "@core-common/example-code-by-platform-with-common/example-common";
export default Vue.extend({
  components: { Btn },
  data() {
    return {
      exampleCommon: "",
      exampleCommonByPlatform: "",
      exampleCommonByPlatformWithCommon: "",
    };
  },
  methods: {
    callCommonCode() {
      console.log("CALL");
      console.log(exampleCommonCode());
      this.exampleCommon = exampleCommonCode();
      this.exampleCommonByPlatform = authenticate("xxx@xxx.com", "123456");
      this.exampleCommonByPlatformWithCommon = commonCodeAndByPlatform();
    },
  },
});
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
