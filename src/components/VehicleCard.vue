<template>
    <div
      :class="[
        'h-full rounded-2xl p-4 flex flex-col transition-all duration-300 border-2',
        isAging && !vehicle.proposedAction
          ? 'border-red-500 bg-red-50 shadow-lg'
          : isAging && vehicle.proposedAction
          ? 'border-amber-400 bg-white shadow-md'
          : 'border-gray-100 bg-white hover:shadow-md',
      ]"
    >
      <div
        class="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100 shrink-0"
      >
        <img :src="vehicle.imageUrl" class="w-full h-full object-cover" />
        <div class="absolute top-2 right-2 flex flex-col gap-1">
          <span
            v-if="isAging"
            class="px-2 py-0.5 bg-red-600 text-white text-[9px] font-black rounded uppercase"
            >Aging</span
          >
        </div>
      </div>

      <div class="mt-3 h-7">
        <h3
          class="text-base font-extrabold text-gray-900 truncate"
          :title="fullTitle"
        >
          {{ fullTitle }}
        </h3>
      </div>

      <div class="mb-3">
        <p class="text-xl font-black text-blue-600">
          ${{ vehicle.price?.toLocaleString() }}
        </p>
        <div
          class="flex justify-between text-[10px] mt-1 text-gray-400 font-bold uppercase"
        >
          <span>Age: {{ vehicle.age }} days</span>
          <span class="font-mono">{{ vehicle.vin }}</span>
        </div>
      </div>

      <div
        class="mt-auto pt-3 border-t border-gray-100 flex flex-col gap-2 min-h-[110px]"
      >
        <template v-if="isAging">
          <div class="h-12 overflow-hidden">
            <div
              v-if="vehicle.proposedAction"
              class="bg-amber-50 p-2 rounded-lg border border-amber-100 h-full"
            >
              <p
                class="text-[11px] text-amber-800 leading-tight line-clamp-2 italic"
              >
                "{{ vehicle.proposedAction }}"
              </p>
            </div>
            <p v-else class="text-[11px] text-red-500 font-medium italic p-2">
              No action logged yet. Action required.
            </p>
          </div>

          <button
            @click="$emit('open-log-modal', vehicle)"
            :class="[
              'w-full py-2 rounded-lg font-bold text-xs transition-all active:scale-95 border-2',
              vehicle.proposedAction
                ? 'border-amber-400 text-amber-600 bg-white hover:bg-amber-50'
                : 'bg-red-600 border-red-600 text-white hover:bg-red-700',
            ]"
          >
            {{ vehicle.proposedAction ? "Edit Action" : "Log Action" }}
          </button>
        </template>

        <template v-else>
          <div class="flex items-center justify-center h-full">
            <div
              class="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100"
            >
              <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              <span
                class="text-[10px] font-bold text-gray-400 uppercase tracking-widest"
                >Healthy Inventory</span
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </template>

<script setup>
import { computed } from "vue";

const props = defineProps(["vehicle"]);
const isAging = computed(() => age.value > 90);

// Tính toán age từ arrivedDate
const age = computed(() => {
  const arrivedDate = new Date(props.vehicle.arrivalDate);
  console.log("Arrived Date:", arrivedDate, props.vehicle.arrivalDate);

  if (isNaN(arrivedDate.getTime())) return 0; // Return 0 if arrivedDate is invalid
  const today = new Date();
  const timeDiff = today - arrivedDate;
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Chuyển đổi từ milliseconds sang days
});
const fullTitle = computed(
  () => `${props.vehicle.year} ${props.vehicle.make} ${props.vehicle.model}`
);
defineEmits(["open-log-modal"]);
</script>
