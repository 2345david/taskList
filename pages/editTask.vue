<template>
  <div class="bg-teal-950 h-screen flex flex-col gap-4 justify-center items-center">
    <div class="flex flex-col max-w-[500px] w-full gap-2 ">
      <inputs
          text-list="Titulo de la tarea"
          text-tarea="Descripcion"
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
<script setup lang="ts">
</script>