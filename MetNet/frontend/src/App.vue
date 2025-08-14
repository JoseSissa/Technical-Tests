<script setup lang="ts">
import { ref, onMounted } from "vue";
import TaskList from "./pages/TaskList.vue";
import Header from "./components/Header.vue";
import { getTasks } from "./services/taskService";
import type { Task } from "./types/types";

const tasks = ref<Task[]>([]);

async function loadTasks() {
  tasks.value = await getTasks();
}

onMounted(() => loadTasks());
</script>

<template>
  <main class="w-full max-w-2xl lg:max-w-7xl mx-auto">
    <Header @task-created="loadTasks" />
    <TaskList :tasks="tasks" @task-updated="loadTasks" />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
