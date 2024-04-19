<template>
  <label class="text-white">Descripcion</label>
  <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Inserte su descripcion de la tarea"
      class="min-h-40 max-h-40 border border-4 border-emerald-200 bg-emerald-200 outline-none focus-within:border-emerald-500 rounded-lg "></textarea>


</template>
<script>
export default {
  name: 'inputs',
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  }
}
</script>