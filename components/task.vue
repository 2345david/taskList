<template>
  <div class="border-b-2 border-emerald-500 ">
    <div class="text-2xl font-bold">

    </div>
    <div>

    </div>
    <div class="flex flex-row items-center justify-between gap-2  pb-2">
      <div class="text-lg italic ">

      </div>
      <div class="flex flex-row gap-2">
        <NuxtLink to="editTask">
          <buttons
              button-img="edit.svg"
          />
        </NuxtLink>
        <buttons
            button-img="delete.svg"
        />
      </div>

    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import {tasks} from "nitropack/runtime/virtual/tasks";

export default defineComponent({
  name: "task",
  computed: {
    tasks() {
      return tasks
    }
  }
})
</script>