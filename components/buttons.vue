<template>
  <div class="flex gap-4">
    <button id="edit" class="hover:bg-emerald-500 flex justify-center items-center border border-2 border-emerald-500 bg-emerald-200 w-12 h-12 rounded-full">
        <NuxtImg :src="buttonImg" class="h-6"/>
    </button>
  </div>

</template>
<script>
  export default {
    name: 'buttons',
    props:{
      buttonImg:{
        type: String,
        default: ""
      }
    },
  }
</script>