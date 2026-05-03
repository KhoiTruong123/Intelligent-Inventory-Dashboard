import { defineStore } from "pinia";
import axios from "axios";
const API_URL = "http://localhost:3000";

export const useVehicleStore = defineStore("vehicleStore", {
  state: () => ({
    vehicles: [],
  }),

  actions: {
    async fetchVehicles() {
      try {
        const response = await axios.get(`${API_URL}/vehicles`);
        this.vehicles = response.data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách xe:", error);
      }
    },

    async updateData(vehicleId, action) {
      try {
        await axios.patch(`${API_URL}/vehicles/${vehicleId}`, {
          proposedAction: action,
          status: "Action Logged",
        });

        // Update the local state to reflect the changes immediately
        await this.fetchVehicles();
      } catch (error) {
        console.error("Error logging action:", error);
      }
    },
  },
});
