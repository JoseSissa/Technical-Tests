<script setup lang="ts">
import { ref, inject } from "vue";
import { createTask } from "../services/taskService";

const title = ref("");
const description = ref("");
const status = ref<"pending" | "completed">("pending");

const emit = defineEmits(["task-created"]);

// Inyectar las funciones para manejar el estado de la modal
const isModalOpen = inject("isModalOpen") as any;
const closeModal = inject("closeModal") as any;

async function submitForm() {
  if (!title.value || !description.value) return;

  await createTask({
    title: title.value,
    description: description.value,
    status: status.value,
  });

  // Limpiar el formulario
  title.value = "";
  description.value = "";
  status.value = "pending";

  // Emitir evento y cerrar modal
  emit("task-created");
  closeModal();
}

function handleCloseModal() {
  // Limpiar formulario al cerrar
  title.value = "";
  description.value = "";
  status.value = "pending";
  closeModal();
}
</script>

<template>
  <!-- Modal backdrop -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 backdrop-blur-[4px] drop-shadow-2xl bg-opacity-50 flex justify-center items-end lg:items-center z-50 bg-[#FFFFFF]/50"
    @click="handleCloseModal"
  >
    <!-- Modal content -->
    <div
      class="bg-white w-full max-w-2xl max-h-[90vh] rounded-t-2xl lg:rounded-b-2xl shadow-lg overflow-y-auto animate-slide-up"
      @click.stop
    >
      <!-- Header con botón de cerrar -->
      <div
        class="flex justify-between items-center p-6 pb-4 border-b border-gray-200"
      >
        <h2 class="text-xl font-semibold text-gray-900">Crear Nueva Tarea</h2>
        <button
          @click="handleCloseModal"
          class="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-xl transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
      </div>

      <!-- Formulario -->
      <form @submit.prevent="submitForm" class="p-6">
        <label
          for="modal-title"
          class="flex flex-col mb-5 font-medium text-gray-700"
        >
          Título
          <input
            id="modal-title"
            v-model="title"
            placeholder="Título de la tarea"
            class="mt-2 p-3 border border-gray-300 rounded-lg bg-white text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all"
            required
          />
        </label>

        <label
          for="modal-description"
          class="flex flex-col mb-5 font-medium text-gray-700"
        >
          Descripción
          <textarea
            id="modal-description"
            v-model="description"
            placeholder="Descripción de la tarea"
            class="mt-2 p-3 border border-gray-300 rounded-lg bg-white text-base resize-y min-h-[80px] focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all"
            rows="3"
            required
          />
        </label>

        <div class="flex flex-col gap-5">
          <select
            v-model="status"
            id="modal-status"
            class="p-3 border border-gray-300 rounded-lg bg-white text-base cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all"
          >
            <option value="pending">Pendiente</option>
            <option value="completed">Completada</option>
          </select>

          <div class="flex gap-3 justify-end">
            <button
              type="button"
              @click="handleCloseModal"
              class="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors cursor-pointer"
              :disabled="!title || !description"
            >
              Crear Tarea
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
