<script setup>
import { ref } from 'vue';
const props = defineProps(['vehicle']);
const emit = defineEmits(['save', 'close']);

// Nếu đã có action cũ thì hiện lên, không thì để trống
const note = ref(props.vehicle.proposedAction || '');

const quickOptions = [
  "Price Reduction Planned",
  "Move to Auction",
  "Interior Detailing Required",
  "Re-photograph for Web"
];

const submit = () => {
  emit('save', note.value);
};
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
    <div class="bg-white p-6 rounded-2xl w-full max-w-md shadow-2xl">
      <h2 class="text-xl font-black mb-4">Log Proposed Action</h2>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <button v-for="(opt, i) in quickOptions" :key="i" @click="note = opt" 
                class="text-[10px] bg-gray-100 hover:bg-blue-100 p-2 rounded-lg font-bold transition">
          + {{ opt }}
        </button>
      </div>

      <textarea v-model="note" class="w-full border-2 border-gray-100 rounded-xl p-3 text-sm focus:border-blue-500 outline-none" rows="4" placeholder="Enter your action plan..."></textarea>

      <div class="flex gap-3 mt-6">
        <button @click="$emit('close')" class="flex-1 py-3 font-bold text-gray-500">Cancel</button>
        <button @click="submit" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold">Save Plan</button>
      </div>
    </div>
  </div>
</template>