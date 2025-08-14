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
  <form @submit.prevent="submitForm">
    <input v-model="title" placeholder="Título" />
    <input v-model="description" placeholder="Descripción" />
    <select v-model="status">
      <option value="pending">Pendiente</option>
      <option value="completed">Completada</option>
    </select>
    <button type="submit">Crear</button>
  </form>
</template>
