<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center bg-teal-50 font-mono">
    <div class="bg-white rounded shadow p-6 m-4 w-xl">
      <div class="mb-4">
        <h1 class="text-emerald-700 font-extrabold text-5xl">{{ title }}</h1>
        <p class="text-center text-emerald-600">{{ subtitle }}</p>
        <div class="flex mt-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-500"
            placeholder="Add Todo"
          />
          <button
            class="p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-teal-800 hover:bg-teal-50"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <div class="flex mb-4 items-center">
          <p class="w-full line-through text-green-300">create the Github repository</p>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full line-through text-green-300">init vue project</p>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full line-through text-green-300">install tailwind css 😍</p>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full text-gray-500">be able to add task</p>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full text-gray-500">be able to complete a task</p>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full text-gray-500">be able to add a due date to a task</p>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full text-gray-500">....</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
