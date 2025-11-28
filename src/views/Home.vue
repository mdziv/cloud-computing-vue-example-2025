<template>
  <div class="mt-6 mb-4">
    <h1 class="font-mono font-bold text-3xl text-center">Home Page</h1>
  </div>

  <div class="ml-auto mr-auto w-400">
    <UTable :data="apiData.content" :columns="columns" class="flex-1" @select="onSelect"/>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue';
  import type {TableColumn, TableRow} from '@nuxt/ui'
  import { h, resolveComponent } from 'vue'
  import {useRouter} from "vue-router";

  const UAvatar = resolveComponent('UAvatar')
  const router = useRouter();

  type ApiData = {
    id: number,
    name: string,
    uuid: string,
    discordId: string,
    tag: string,
    avatar: {src: string},
    guildId: number,
    createdAt: string
  }

  const apiData = ref();

  const columns: TableColumn<ApiData>[] = [
    {
      accessorKey: 'id',
      header: 'ID'
    },
    {
      accessorKey: 'name',
      header: 'NAME',
      cell: ({ row }) => {
        return h('div', { class: 'flex items-center gap-3' }, [
            h(UAvatar, { src: row.original.avatar, size: 'lg' }),
          h('div', undefined, [
              h('p', { class: 'font-medium text-highlighted' }, row.original.name),
              h('p', { class: '' }, `Discord: ${row.original.discordId}`)
          ])
        ])
      }
    },
    {
      accessorKey: 'tag',
      header: 'TAG'
    },
    {
      accessorKey: 'createdAt',
      header: 'CREATED AT',
      cell: ({ row }) => {
        return new Date(row.getValue('createdAt').toLocaleString('en-US', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }))
      }
    }
  ]

  fetch (`${import.meta.env.VITE_APP_API_BASE}/data?sort=id,desc&size=30`)
  .then(rsp=>rsp.json())
  .then(data=>apiData.value = data)

  function onSelect(e: Event, row: TableRow<ApiData>) {
    const detail = row.getValue('id');
    router.push(`/details/${detail}`);
  }
</script>

<!---
<style scoped>
  table {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
-->
