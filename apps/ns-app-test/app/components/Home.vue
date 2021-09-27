<template>
  <Page>
    <GridLayout>
      <TestComponentImport></TestComponentImport>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import TestComponentImport from "native-components/src/components/TestComponentImport.vue";
import { exportFunctionImportWork } from "native-components/src/code/TestTsFileImport";
console.log(exportFunctionImportWork());
export default Vue.extend({
  components: { TestComponentImport },
  computed: {
    message() {
      return "Blank {N}-Vue app";
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
