<script setup lang="ts"></script>

<template>
  <RouterLink to="/">Home</RouterLink> ~ <RouterLink to="/about">About</RouterLink>
  <router-view></router-view>
</template>

<style>
  * {
    font-family: monospace;
    background-color: black;
    text-align: center;
    color: white;
  }
</style>
