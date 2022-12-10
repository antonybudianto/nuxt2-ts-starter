<template>
  <HelloWorld title="Welcome to Nuxt 2" @onClick="handleClick"
    >HelloChild</HelloWorld
  >
</template>
<script setup lang="ts">
const handleClick = (value: string) => {
  console.log('>> emit from HelloWorld: ', value)
}
</script>
