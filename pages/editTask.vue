<template>
  <div class="bg-teal-950 h-screen flex flex-col gap-4 justify-center items-center">
    <div class="flex flex-col max-w-[500px] w-full gap-2">
      <inputs
          text-list="Titulo"
          type-input="text"
          text-placeholder="Inserte un titulo"
          v-model="selectTask.title"
      />
      <inputs
          text-list="Fecha"
          type-input="text"
          text-placeholder="DD/MM/YY"
          v-model="selectTask.date"
      />
      <textArea
          v-model="selectTask.description"
      />
    </div>
    <div class="flex flex-row justify-between gap-6">
      <NuxtLink to="/" class="w-fit h-fit">
        <buttons
            button-img="return.svg"
        />
      </NuxtLink>

      <NuxtLink to="/" class="w-fit h-fit">
        <buttons
            button-img="save.svg"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<script>

import {selectTask} from "~/composables/tasksComposables.js";

export default {
  name: 'editTask',
  computed: {
    selectTask() {
      return selectTask
    }
  },
  data: () => ({
    title: "",
    description: "",
    date: "",
  }),
  methods: {}

}


</script>