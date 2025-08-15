<script setup lang="ts">
const emit = defineEmits(["open-modal"]);
</script>

<template>
  <div class="fixed bottom-5 block w-full px-5 max-w-2xl z-10">
    <button
      @click="emit('open-modal')"
      class="flex justify-center w-12 h-12 p-2 ml-auto items-center bg-[#377DFF] rounded-full"
    >
      <img src="../assets/icons/add.svg" alt="Icon to add a new task" />
    </button>
  </div>
</template>
