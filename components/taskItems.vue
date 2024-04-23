<template>
  <div class="border-b-2 border-emerald-500 ">
    <div class="text-2xl font-bold">
      <h1> {{ title }} </h1>
    </div>

    <div>
      {{ description }}
    </div>
    <div class="flex flex-row items-center justify-between gap-2  pb-2">
      <div class="text-lg italic"> {{ date }}</div>
      <div class="flex flex-row gap-2">
        <NuxtLink to="editTask">
          <buttons
              @click="modifyTask(id)"
              button-img="edit.svg"
          />
        </NuxtLink>
        <buttons
            @click="deleteTask(id)"
            button-img="delete.svg"
        />
      </div>

    </div>
  </div>

</template>

<script>


export default{
  name: "task",
  methods: {
    deleteTask,
    modifyTask
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
}
</script>