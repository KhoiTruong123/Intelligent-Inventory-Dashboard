<template>
  <TopBar />
 <InventoryDashboard />
 <FooterBar />
</template>

<script>
import TopBar from "./views/TopBar.vue";
import InventoryDashboard from "./views/InventoryDashboard.vue";
import FooterBar from "./views/FooterBar.vue";

export default {
  name: 'App',
  components: {
    InventoryDashboard,
    TopBar,
    FooterBar,
  }
}
</script>
