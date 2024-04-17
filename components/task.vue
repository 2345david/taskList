<template>
  <div class="border-b-2 ">
    <div class="text-2xl font-bold">
      <h1> Titulo tarea</h1>
    </div>

    <div>
      Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la
      tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion
      de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea
      Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la
      tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion
      de la tarea Descripcion de la tarea Descripcion de la tarea Descripcion de la tarea
    </div>
    <div class="flex flex-row items-center justify-between gap-2  pb-2">
      <div class="text-lg italic " >17/05/2024 </div>
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

export default defineComponent({
  name: "task"
})
</script>