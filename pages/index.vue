
<template>
  <div class="bg-teal-950 flex flex-col justify-center h-30 p-2">
    <div class="w-20">
      <NuxtImg src="task.svg"/>
    </div>
    <div class="flex gap-6 justify-center">
      <inputs/>
    </div>
    <div class="flex gap-6">
      <buttons
        button-img="delete.svg"
      />
      <buttons
          button-img="edit.svg"
      />
      <buttons
          button-img="add.svg"
      />
    </div>
  </div>
</template>



<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>