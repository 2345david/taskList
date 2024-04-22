<template>
  <div class="border-b-2 border-emerald-500 ">
    <div class="text-2xl font-bold">
      {{ title }}
    </div>
    <div>
      {{ description }}
    </div>
    <div class="flex flex-row items-center justify-between gap-2  pb-2">
      <div class="text-lg italic ">
        {{ date }}
      </div>
      <div class="flex flex-row gap-2">
        <NuxtLink to="editTask">
          <buttons
              button-img="edit.svg"
          />
        </NuxtLink>
        <buttons
            @click="editTask(id)"
            button-img="delete.svg"
        />
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import editTask from '../composables/editArrayContent.js'

export default defineComponent({
  name: "taskItem",
  methods: {
    editTask
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  }

})
</script>