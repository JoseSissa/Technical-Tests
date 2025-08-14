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
  <section class="w-full p-4">
    <h2 class="py-4 text-2xl font-bold">Lista de Tareas:</h2>
    <div class="flex justify-center items-center w-full my-4">
      <button
        class="w-full max-w-1/3 py-1 px-2 border rounded-l-sm cursor-pointer"
        :class="{
          'bg-blue-500': taskStatus === 'all',
          'bg-blue-200': taskStatus !== 'all',
        }"
        @click="taskStatus = 'all'"
      >
        Todas
      </button>
      <button
        class="w-full max-w-1/3 py-1 px-2 border cursor-pointer"
        :class="{
          'bg-blue-500': taskStatus === 'pending',
          'bg-blue-200': taskStatus !== 'pending',
        }"
        @click="taskStatus = 'pending'"
      >
        Pendientes
      </button>
      <button
        class="w-full max-w-1/3 py-1 px-2 border rounded-r-sm cursor-pointer"
        :class="{
          'bg-blue-500': taskStatus === 'completed',
          'bg-blue-200': taskStatus !== 'completed',
        }"
        @click="taskStatus = 'completed'"
      >
        Completadas
      </button>
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="task in filteredTasks" :key="task.id">
        <div class="flex flex-col rounded-sm shadow-lg p-2 bg-white">
          <h4 class="text-lg font-bold">{{ task.title }}</h4>
          <p class="py-4 text-sm">{{ task.description }}</p>
          <div class="flex justify-between items-center">
            <button
              class="py-1 px-2 border border-black rounded-sm bg-blue-500 text-white cursor-pointer"
              @click="handleState(task)"
            >
              Cambiar estado
            </button>
            <button
              class="py-1 px-2 border border-black rounded-sm bg-red-500 text-white cursor-pointer"
              @click="removeTask(task.id)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
