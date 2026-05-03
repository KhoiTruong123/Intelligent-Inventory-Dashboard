<template>
  <div class="p-20 flex gap-4 flex-col">
    <div class="flex justify-between bg-slate-100 p-6 rounded-2xl">
      <label class="flex flex-col gap-2">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-wider">Search Vehicle</span>
        <input
          v-model="filters.model"
          placeholder="Search Vehicle (VIN, Model...)"
          class="w-full h-12 pl-4 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
        />
      </label>
      <label class="flex flex-col gap-2 relative group min-w-[160px]">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-wider">Select company</span>
        <select
          class="pl-4 h-12 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition appearance-none"
          v-model="filters.make"
        >
          <option v-for="(item, i) in makes" :key="i" :value="item">
            {{ item }}
          </option>
        </select>
        <div
          class="absolute top-[45%] right-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </label>
      <label class="flex flex-col gap-2 relative group min-w-[160px]">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-wider">Select status</span>
        <select
          v-model="filters.status"
          class="pl-4 h-12 pr-4 py-2.5 appearance-none border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
        >
          <option value="">All Statuses</option>
          <option value="Available">Available</option>
          <option value="Sold">Sold</option>
        </select>
        <div
          class="absolute top-[45%] right-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </label>
      <!-- select age of vehicle -->
      <label class="flex flex-col gap-2 relative">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-wider">Select age</span>
        <select
          class="pl-4 h-12 appearance-none pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
          v-model="filters.age"
        >
          <option value="">All Ages</option>
          <option value="0-30">0-30 Days</option>
          <option value="30-60">30-60 Days</option>
          <option value="60-90">60-90 Days</option>
          <option value="90+">More than 90 Days</option>
        </select>
        <div
          class="absolute top-[45%] right-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </label>
      <!-- <div class="flex flex-col p-2 px-4 gap-2">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-wider">
          Aging stock
        </span>

        <div class="text-center flex gap-2">
          <button
            type="button"
            @click="toggleAgingFilter"
            :class="showAgingOnly ? 'bg-red-500' : 'bg-gray-300'"
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2"
          >
            <span
              :class="showAgingOnly ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md"
            ></span>
          </button>
          <div class="text-sm text-gray-500 flex items-center">
            Toggle Switch
          </div>
        </div>
      </div> -->
      <div class="grid grid-col gap-2">
        <button
          @click="applyFilters"
          class="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold rounded-xl shadow-sm transition-all active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Apply Filters
        </button>
        <button
          @click="clearFilters"
          class="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-bold rounded-xl transition-all active:scale-95 border border-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Clear Filters
        </button>
      </div>
    </div>
    <div class="">
      <VehicleList :vehicles="filteredVehicles" @log-action="logAction" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useVehicleStore } from "@/stores/vehicleStore";
import VehicleList from "./../components/VehicleList.vue";

const filters = ref({
  model: "",
  make: "",
  status: "",
  age: "",
});
// const showAgingOnly = ref(false);
const makes = computed(() => {
  const uniqueMakes = new Set(vehicleStore.vehicles.map((v) => v.make));
  return Array.from(uniqueMakes);
});
const vehicleStore = useVehicleStore();

onMounted(() => {
  vehicleStore.fetchVehicles().then(() => {
    filteredVehicles.value = vehicleStore.vehicles; // Hiển thị tất cả xe khi lần đầu tải
  });
});

const filteredVehicles = ref([]);

const applyFilters = () => {
  filteredVehicles.value = filterVehicles(vehicleStore.vehicles, filters.value);
};

function filterVehicles(vehicles, filters) {
  const { model, make, status, age } = filters;

  return vehicles.filter((vehicle) => {
    const matchesModel = model
      ? vehicle.model.toLowerCase().includes(model.toLowerCase())
      : true;
    const matchesMake = make
      ? vehicle.make.toLowerCase().includes(make.toLowerCase())
      : true;
    const matchesStatus = status
      ? vehicle.status.toLowerCase() === status.toLowerCase()
      : true;

    const today = new Date();
    const arrivedDate = new Date(vehicle.arrivalDate);
    const ageInDays = Math.floor((today - arrivedDate) / (1000 * 60 * 60 * 24));
    const matchesAge = age
      ? (age === "0-30" && ageInDays <= 30) ||
        (age === "30-60" && ageInDays > 30 && ageInDays <= 60) ||
        (age === "60-90" && ageInDays > 60 && ageInDays <= 90) ||
        (age === "90+" && ageInDays > 90)
      : true;

    return matchesModel && matchesMake && matchesStatus && matchesAge;
  });
}

const logAction = (vehicleId, action) => {
  vehicleStore.logAction(vehicleId, action);
};
const clearFilters = () => {
  filters.value = {
    model: "",
    make: "",
    status: "",
    age: "",
  };
  filteredVehicles.value = vehicleStore.vehicles; // Hiển thị tất cả xe khi xóa bộ lọc
};

// Hàm xử lý khi click (Optional: nếu bạn muốn log lại hành động của user)
// const toggleAgingFilter = () => {
//   showAgingOnly.value = !showAgingOnly.value;
//   filteredVehicles.value = showAgingOnly.value
//     ? filterVehicles(vehicleStore.vehicles, { ...filters.value, age: "90+" })
//     : filterVehicles(vehicleStore.vehicles, filters.value);
// };
</script>
