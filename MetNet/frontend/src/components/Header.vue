<script setup lang="ts">
import { ref } from "vue";
import { createTask } from "../services/taskService";

const title = ref("");
const description = ref("");
const status = ref<"pending" | "completed">("pending");

const emit = defineEmits(["task-created"]);

async function submitForm() {
  if (!title.value || !description.value) return;
  await createTask({
    title: title.value,
    description: description.value,
    status: status.value,
  });
  title.value = "";
  description.value = "";
  status.value = "pending";
  emit("task-created");
}
</script>

<template>
  <header class="flex items-center w-full max-w-2xl mx-auto px-4">
    <h1 class="py-4 text-2xl font-bold">To-Do App</h1>
    <!-- <div class="w-full p-4">
      <form @submit.prevent="submitForm">
        <label for="title" class="flex flex-col mb-3"
          >Título
          <input
            id="title"
            v-model="title"
            placeholder="Título"
            class="py-1 px-2 border rounded-sm bg-white"
          />
        </label>
        <label for="description" class="flex flex-col mb-5"
          >Descripción
          <input
            id="description"
            v-model="description"
            placeholder="Descripción"
            class="py-1 px-2 border rounded-sm bg-white"
          />
        </label>
        <div class="flex justify-between items-center">
          <select
            v-model="status"
            id="status"
            class="py-1 px-2 border rounded-sm bg-white cursor-pointer"
          >
            <option value="pending">Pendiente</option>
            <option value="completed">Completada</option>
          </select>
          <button
            type="submit"
            class="py-1 px-2 border border-black rounded-sm bg-green-600 text-white cursor-pointer"
          >
            Crear
          </button>
        </div>
      </form>
    </div> -->
  </header>
</template>
