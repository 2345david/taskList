<template>
  <div class="bg-teal-950 flex h-screen w-screen items-center justify-center overflow-hidden ">
    <div class=" max-w-[800px] w-full shadow-lg flex flex-col items-end gap-4">
        <NuxtLink to="addTask">
          <buttons
              button-img="add.svg"
          />
        </NuxtLink>
      <div class="flex flex-col p-2 gap-2 bg-emerald-200 border-4 border-emerald-500 rounded overflow-y-scroll scrollbar max-h-[500px] min-h-[500px]">
        <task/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>
<style scoped lang="scss">
.scrollbar {
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c7cbce;
    border-radius: 10px;
    border: 0 solid transparent;
    cursor: pointer;
  }
}
</style>