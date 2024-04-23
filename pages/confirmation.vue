<template>
  <div class="bg-teal-950 h-screen flex flex-col gap-4 justify-center items-center">
    <div class="flex flex-col max-w-[500px] w-full gap-2 items-center bg-emerald-200 rounded-xl text-2xl">
      <h1>¿Deseas borrar la tarea ?</h1>
        <NuxtLink to="/">
         <button @click="deleteTask(id)">Si</button>
        </NuxtLink>
        <NuxtLink to="/">
          <button>No</button>
        </NuxtLink>
    </div>
  </div>
</template>


<script>
export default {
  name:"confirmation"
}

</script>