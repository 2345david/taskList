<template>
  <label class="text-white w-full">{{ textList }}</label>
  <input type="text" placeholder="Inserte titulo"
         class="border  border-emerald-200 bg-emerald-200 outline-none focus-within:border-emerald-500 border-4 rounded-lg">
  <label class="text-white w-full">{{ textFecha }}</label>
  <input type="text" placeholder="DD/MM/YY"
         class="border border-emerald-200 bg-emerald-200 outline-none focus-within:border-emerald-500 border-4 rounded-lg"/>
  <label class="text-white w-full">{{ textTarea }}</label>
  <textarea placeholder="Inserte texto"
            class=" border  border-emerald-200 bg-emerald-200 outline-none focus-within:border-emerald-500 border-4 rounded-lg min-h-40 max-h-40"/>
</template>

<script>

export default {
  name: 'inputs',
  props: {
    textList: {
      type: String,
      default: ""
    },
    textTarea: {
      type: String,
      default: ""
    },
    textFecha: {
      type: String,
      default: "",
    }
  }
}
</script>