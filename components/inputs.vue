<template>
  <label class="text-white w-full">{{ textList }}</label>
  <input
      :value="modelValue"
      :placeholder="textPlaceholder"
      :type="typeInput"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border border-4 border-emerald-200 bg-emerald-200 outline-none focus-within:border-emerald-500 rounded-lg ">
</template>

<script>
export default {
  name: 'inputs',
  props: {
    textList: {
      type: String,
      default: ""
    },
    typeInput: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: String,
      default: ""
    },
    textPlaceholder: {
      type: String,
      default: ""
    }
  },
}
</script>