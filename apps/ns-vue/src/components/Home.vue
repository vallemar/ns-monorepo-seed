<script lang="ts" setup>
import { exampleCommonCode, authenticate, commonCodeAndByPlatform } from "@core-common";

</script>

<template>
  <Frame>

    <Page>
      <StackLayout style="padding: 15px">
        <Label>
          exampleCommonCode: {{ exampleCommonCode() }}
        </Label>
        <Label>
          commonCodeAndByPlatform: {{ commonCodeAndByPlatform() }}
        </Label>
        <Label>
          authenticate: {{ authenticate("email@test.com", "asdfasdf") }}
        </Label>
      </StackLayout>
    </Page>

  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
