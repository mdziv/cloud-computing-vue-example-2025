<template>
  <h1>Details Page</h1>
  <div id="details">
    <pre>{{apiData}}</pre>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import {useRoute} from "vue-router";

  const route = useRoute();
  const apiData = ref();
  fetch (`${import.meta.env.VITE_APP_API_BASE}/data/${route.params.id}`)
    .then(rsp=>rsp.json())
    .then(data=>apiData.value = data)
</script>

<style scoped>
  #details {
    margin-left: auto;
    margin-right: auto;
    width: 800px;
  }

  pre {
    text-align: left;
  }
</style>