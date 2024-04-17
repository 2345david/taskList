<template>
  <div class="bg-teal-950 flex h-screen w-screen items-center justify-center">
    <div class=" max-w-[800px] w-full shadow-lg flex flex-col gap-4">
      <div class="flex justify-end">
        <NuxtLink to="addTask">
          <buttons
              button-img="add.svg"
          />
        </NuxtLink>
      </div>
      <div class="flex flex-col p-2 gap-2 bg-emerald-200 border-4 border-white rounded "> <!-- Contenedor tareas-->
        <task/>

      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>

