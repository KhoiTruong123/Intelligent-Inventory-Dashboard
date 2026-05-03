<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="vehicle in props.vehicles" :key="vehicle.id">
      <div class="col-span-1">
        <VehicleCard :vehicle="vehicle" @open-log-modal="handleOpenLogModal" />
      </div>
      <ActionModal
        v-if="isModalOpen"
        :vehicle="selectedVehicle"
        @close="isModalOpen = false"
        @save="updateVehicleAction"
      />
    </div>
  </div>
</template>

<script setup>
import VehicleCard from "./VehicleCard.vue";
import ActionModal from "./ActionModal.vue";
import { useVehicleStore } from "@/stores/vehicleStore";
import { ref } from "vue";

const props = defineProps(["vehicles"]);
const vehicleStore = useVehicleStore();

const isModalOpen = ref(false);
const selectedVehicle = ref(null);
const handleOpenLogModal = (vehicle) => {
  selectedVehicle.value = vehicle; 
  isModalOpen.value = true; 
};
const updateVehicleAction = (newNote) => {
  if (selectedVehicle.value) {
    const car = props.vehicles.find(v => v.id === selectedVehicle.value.id);
    if (car) {
        car.proposedAction = newNote;
        vehicleStore.updateData(car.id, newNote);
    }
  }
  isModalOpen.value = false;
};
</script>
