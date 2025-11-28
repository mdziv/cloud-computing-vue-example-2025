<script setup lang="ts">
</script>

<template>
  <UApp>
    <div class="mt-4 text-center font-thin text-xl">
      <RouterLink to="/">Home</RouterLink> ~ <RouterLink to="/about">About</RouterLink>
    </div>
    <router-view></router-view>
  </UApp>
</template>


<!---
<style>
  * {
    font-family: monospace;
    background-color: black;
    text-align: center;
    color: white;
  }
</style>
-->