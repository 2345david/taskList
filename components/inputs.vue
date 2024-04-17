<template>
  <label class="text-white w-full">{{ textList }}</label>
  <input type="text" placeholder="Inserte titulo" class="border border-2 border-emerald-200 bg-emerald-200 outline-none focus-within:border-lime-600 rounded-lg">
  <label class="text-white w-full">{{ textFecha }}</label>
  <input type="text" placeholder="Inserte fecha" class="border border-2 border-emerald-200 bg-emerald-200 outline-none focus-within:border-lime-600 rounded-lg" />
  <label class="text-white w-full">{{ textTarea }}</label>
  <textarea placeholder="Inserte texto" class="border border-2 border-emerald-200 bg-emerald-200 outline-none focus-within:border-lime-600 rounded-lg h-40"/>
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
    },
    textFecha:{
      type: String,
      default: "",
    }
  },
}


</script>