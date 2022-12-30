<template>
  <HelloWorld title="Welcome to Nuxt 2" @onClick="handleClick"
    >HelloChild</HelloWorld
  >
</template>
<script setup lang="ts">
// Auto import also supported, but no intellisense
import HelloWorld from '@/components/HelloWorld.vue'
const handleClick = (value: string) => {
  console.log('>> emit from HelloWorld: ', value)
}
</script>
