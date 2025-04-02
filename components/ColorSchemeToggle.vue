<script lang="ts" setup>
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}

addCommands(
  {
    id: 'toggle-color-mode',
    title: colorMode.value === 'light'
      ? 'Switch to dark mode'
      : 'Switch to light mode',
    handler: toggleMode,
    icon: colorMode.value === 'light'
      ? 'i-ph-moon-stars-duotone'
      : 'i-ph-sun-dim-duotone',
  },
)
addCommands(
  {
    id: 'ask_ai',
    title: 'Ask AI for help',
    handler: toggleMode,
    icon: 'i-material-icon-theme-adobe-illustrator',
  },
)
</script>

<template>
  <button
    rounded p-2
    hover="bg-active"
    @click="toggleMode"
  >
    <div i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone text-2xl />
  </button>
</template>
