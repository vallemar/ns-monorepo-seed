<template>
  <button @tap="$emit('tap')" :text="text" />
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
  },
};
</script>
