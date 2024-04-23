<template>
  <div class="flex gap-4">
    <button class=" hover:bg-emerald-500 flex justify-center items-center border border-2 border-emerald-200 bg-emerald-200 w-12 h-12 rounded-full border-2 border-emerald-500">
      <NuxtImg :src="buttonImg" class="h-8"/>
    </button>
  </div>

</template>
<script>
export default {
    name: 'buttons',
    props:{
      buttonImg:{
        type: String,
        default: "",
        required: false
      }
    },
  }
</script>