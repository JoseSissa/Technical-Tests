<script setup lang="ts">
import { ref, onMounted, provide } from "vue";
import TaskList from "./pages/TaskList.vue";
import Header from "./components/Header.vue";
import ButtonCreateTask from "./components/ButtonCreateTask.vue";
import ModalCreateTask from "./components/ModalCreateTask.vue";
import { getTasks } from "./services/taskService";
import type { Task } from "./types/types";

const tasks = ref<Task[]>([]);
const isModalOpen = ref(false);

async function loadTasks() {
  tasks.value = await getTasks();
}

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

// Proporcionar el estado y funciones de la modal a los componentes hijos
provide("isModalOpen", isModalOpen);
provide("openModal", openModal);
provide("closeModal", closeModal);

onMounted(() => loadTasks());
</script>

<template>
  <main class="relative w-full max-w-2xl lg:max-w-7xl mx-auto">
    <Header @task-created="loadTasks" />
    <TaskList :tasks="tasks" @task-updated="loadTasks" />
    <ButtonCreateTask @open-modal="openModal" />
    <ModalCreateTask @task-created="loadTasks" />
  </main>
</template>
