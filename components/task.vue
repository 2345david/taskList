<template>
  <div class="border-b-2 border-black flex flex-col gap-2 p-2">
    <div>
      <h1 class="text-2xl"><strong>Titulo tarea</strong></h1>
    </div>

    <div>
      <h3>Descripcion de la tarea</h3>
    </div>
    <div class="flex flex-row gap-2 ">
      <buttons
          button-img="delete.svg"
      />
      <buttons
          button-img="edit.svg"
      />
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "task"
})
</script>