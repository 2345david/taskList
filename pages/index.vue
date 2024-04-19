<template>
  <div class="bg-teal-950 flex h-screen w-screen items-center justify-center overflow-hidden ">
    <div class=" max-w-[800px] w-full shadow-lg flex flex-col items-end gap-4">
      <NuxtLink to="addTask">
        <buttons
            button-img="add.svg"
        />
      </NuxtLink>
      <div
          class="flex flex-col p-2 gap-2 bg-emerald-200 border-4 border-emerald-500 rounded overflow-y-scroll scrollbar min-w-[800px] max-w-[800px] max-h-[500px] min-h-[500px]">


        <taskItem
            v-for="task in tasks"
            :key="task.id"
            :title="task.title"
            :date="task.date"
            :description="task.description"
            :id="task.id"


        />
      </div>
    </div>
  </div>
</template>

<script>

import createTask from '../composables/addArrayContent.js'
export default {
  name: "index",
  methods: {
    createTask

  },


}
</script>
<style scoped lang="scss">
.scrollbar {
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    border: 0 solid transparent;
    cursor: pointer;
  }
}
</style>

