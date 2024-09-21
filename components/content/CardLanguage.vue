<script setup lang="ts">
defineProps<{
  to: string
  icon?: string
  language: string
  description: string
}>()
</script>

<template>
  <div
    border="~ base rounded-lg
     hover:primary" mx-0 h20vh w20vw of-hidden border-rd-md py-5 text-align-center bg-base
  >
    <span>
      <NuxtLink :to="to" hover="scale-130" transition="duration-300">
        {{ language }}
      </NuxtLink>
    </span>

    <div flex-auto />
    <div line-clamp-2 text-sm opacity="50">
      {{ description }}
    </div>
  </div>
</template>

<style scoped></style>
