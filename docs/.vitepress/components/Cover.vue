<template>
  <p>
    <img :src="props.src" style="height: 100px" />
  </p>
</template>

<script setup>
const props = defineProps(['src']);
</script>
