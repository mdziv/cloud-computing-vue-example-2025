<template>
  <h1>Home Page</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>TAG</th>
        <th>CREATED AT</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="obj in apiData.content">
        <td>
          <RouterLink :to="`/details/${obj.id}`">
            {{obj.id}}
          </RouterLink>
        </td>
        <td>{{obj.name}}</td>
        <td>{{obj.tag}}</td>
        <td>{{new Date(obj.createdAt).toLocaleString()}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
  import {ref} from 'vue';

  const apiData = ref();
  fetch (`${import.meta.env.VITE_APP_API_BASE}/data?sort=id,desc&size=30`)
  .then(rsp=>rsp.json())
  .then(data=>apiData.value = data)
</script>

<style scoped>
  table {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
</style>