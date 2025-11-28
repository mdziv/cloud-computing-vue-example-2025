<template>
  <div class="mt-24">
    <div class="grid grid-flow-col grid-rows-3 gap-6 mr-auto ml-auto w-250 content-center border-y-6 rounded-xl border-white p-8">
      <div class="row-span-3 flex place-content-center border-x-3 border-dotted rounded-2xl border-zinc-800">
        <UAvatar :src="`${apiData.avatar}`" size="4xl" class="p-8 bg-black"/>
      </div>
      <div class="col-span-2 row-span-1">
        <p class="font-mono text-2xl font-bold">Details of <span class="font-sans font-normal text-purple-500">{{apiData.name}}</span></p>
      </div>
      <div class="col-span-2 row-span-2 divide-y-1 divide-zinc-800">
        <p class="font-mono font-semibold p-1 indent-19">ID: <span class="font-sans font-normal text-blue-300">{{apiData.id}}</span></p>
        <p class="font-mono font-semibold p-1 indent-14.5">UUID: <span class="font-sans font-normal text-blue-300">{{apiData.uuid}}</span></p>
        <p class="font-mono font-semibold p-1">Discord ID: <span class="font-sans font-normal text-blue-300">{{apiData.discordId}}</span></p>
        <p class="font-mono font-semibold p-1 indent-17">Tag: <span class="font-sans font-normal text-blue-300">{{apiData.tag}}</span></p>
        <p class="font-mono font-semibold p-1 indent-5">Guild ID: <span class="font-sans font-normal text-blue-300">{{apiData.guildId}}</span></p>
        <p class="font-mono font-semibold p-1 indent-0">Created at: <span class="font-sans font-normal text-blue-300">{{apiData.createdAt}}</span></p>
      </div>
    </div>
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