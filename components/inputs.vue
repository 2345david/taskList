<template>
  <label class="text-white w-full">{{ textList }}</label>
  <input type="text" class="border border-2 border-emerald-200 bg-emerald-200 outline-none focus-within:border-lime-600 rounded-lg">
  <label class="text-white w-full">{{ textTarea }}</label>
  <textarea class="border border-2 border-emerald-200 bg-emerald-200 outline-none focus-within:border-lime-600 rounded-lg h-40"/>
</template>

<script>
export default {
  name: 'inputs',
  props:{
    textList:{
      type: String,
      default: ""
      },
    textTarea:{
      type: String,
      default: ""
    }
  },
}


</script>