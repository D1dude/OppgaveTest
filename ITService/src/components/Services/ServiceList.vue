<template>
  <div class="service-list-container col-span-12">
    <h1>IT Services</h1>
    <div v-if="services.length > 0">
      <h2>Services List</h2>
      <ul class="service-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="service in services" :key="service.id" class="service-item border bg-white p-4 rounded shadow">
          <p>Description: {{ service.description }}</p>
          <p>Date: {{ service.date }}</p>
          <p>Duration: {{ service.duration }} hours</p>
          <p>Price: {{ service.price }}</p>
          <button @click="$emit('add-to-cart', service)" class="add-to-cart-btn">Add to Cart</button> <!-- Emit event -->
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No services available</p>
    </div>
  </div>
</template>

<script>
import ITServicsService from '../../services/ITServicsService';

export default {
  data() {
    return {
      services: []
    };
  },
  methods: {
    async loadServices() {
      try {
        // Hent alle tjenester fra API-et
        this.services = await ITServicsService.getAll();
      } catch (error) {
        console.error("Error fetching services:", error);
        alert('Failed to load services. Please try again.');
      }
    }
  },
  created() {
    // Last tjenestene når komponenten blir opprettet
    this.loadServices();
  }
};
</script>


<style scoped>
.service-list-container {
  padding: 20px;
  overflow: hidden;
  height: 100vh; /* Gjør beholderen til full høyde av visningsporten */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.service-list {
  display: grid;
  gap: 20px;
}

.service-item {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-to-cart-btn {
  margin-top: 10px;
  background-color: rgb(21, 157, 167);
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-btn:hover {
  background-color: rgb(21, 157, 167);
}
</style>