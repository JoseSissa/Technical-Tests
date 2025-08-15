<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import { updateTask, deleteTask } from "../services/taskService";
import type { Task } from "../types/types";

const filterButtons = [
  {
    value: "all" as const,
    label: "Todas",
    isFirst: true,
    isLast: false,
  },
  {
    value: "pending" as const,
    label: "Pendientes",
    isFirst: false,
    isLast: false,
  },
  {
    value: "completed" as const,
    label: "Completadas",
    isFirst: false,
    isLast: true,
  },
];

const props = defineProps<{
  tasks: Task[];
}>();

const taskStatus = ref<"all" | "completed" | "pending">("all");

const emit = defineEmits(["task-updated"]);

function getButtonClasses(button: (typeof filterButtons)[0]) {
  const baseClasses = "w-full max-w-1/3 py-1 px-2 cursor-pointer";
  const roundingClasses = button.isFirst
    ? "rounded-l"
    : button.isLast
    ? "rounded-r"
    : "";
  const stateClasses =
    taskStatus.value === button.value
      ? "bg-[#377DFF]/20 border border-[#377DFF] text-[#377DFF]"
      : "bg-[#377DFF] border border-[#377DFF] text-white";

  return `${baseClasses} ${roundingClasses} ${stateClasses}`;
}

async function handleState(task: Task) {
  if (task.status === "completed") return;
  const newState = task.status === "pending" ? "completed" : task.status;
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
    <div class="flex justify-center items-center w-full max-w-xl mx-auto my-4">
      <button
        v-for="button in filterButtons"
        :key="button.value"
        :class="getButtonClasses(button)"
        @click="taskStatus = button.value"
      >
        {{ button.label }}
      </button>
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="task in filteredTasks" :key="task.id">
        <div
          class="flex flex-col rounded-sm shadow-xl p-4"
          :class="{
            'border-l-5 border-[#9EE493] bg-[#9EE493]/50':
              task.status === 'completed',
            'border-l-5 border-[#FFF4C2] bg-[#FFF4C2]/50':
              task.status === 'pending',
          }"
        >
          <h4 class="text-lg font-bold capitalize">{{ task.title }}</h4>
          <p class="py-4 text-sm">{{ task.description }}</p>
          <div class="flex justify-between items-center">
            <button
              class="py-1 px-2 rounded-sm cursor-pointer"
              :class="{
                'border border-[#0066ff] bg-[#0066ff]/20 text-[#0066ff]':
                  task.status === 'pending',
              }"
              @click="handleState(task)"
            >
              {{ task.status === "completed" ? "" : "Completar" }}
            </button>
            <button
              class="py-1 px-2 rounded-sm border border-red-400 bg-red-500/30 cursor-pointer"
              @click="removeTask(task.id)"
            >
              <img
                src="../assets/icons/trash.svg"
                alt="Icon to delete a task"
              />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
