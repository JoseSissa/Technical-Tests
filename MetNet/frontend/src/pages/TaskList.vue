<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import type { Task } from "../types/types";
import { updateTask, deleteTask } from "../services/taskService";

const props = defineProps<{
  tasks: Task[];
}>();

const taskStatus = ref<"all" | "completed" | "pending">("all");

const emit = defineEmits(["task-updated"]);

async function handleState(task: Task) {
  const newState = task.status === "completed" ? "pending" : "completed";
  await updateTask(task.id, {
    title: task.title,
    description: task.description,
    status: newState,
  });
  emit("task-updated");
}

async function removeTask(id: number) {
  await deleteTask(id);
  emit("task-updated");
}

const filteredTasks = computed(() => {
  if (taskStatus.value === "all") return props.tasks;
  return props.tasks.filter((t) => t.status === taskStatus.value);
});
</script>

<template>
  <div>
    <div>
      <button @click="taskStatus = 'all'">Todas</button>
      <button @click="taskStatus = 'completed'">Completadas</button>
      <button @click="taskStatus = 'pending'">Pendientes</button>
    </div>

    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <span>{{ task.title }} - {{ task.status }}</span>
        <button @click="handleState(task)">Cambiar estado</button>
        <button @click="removeTask(task.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>
