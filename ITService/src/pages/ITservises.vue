<template>
  <div class="service-container col-span-12 grid grid-cols-12 gap-4">
    <h1 class="col-span-12 text-center">IT Services</h1>
    <div class="service-list-wrapper col-span-8">
      <ServiceList :services="services" @add-to-cart="addToCart" />
    </div>
    <div class="selected-services-container col-span-4">
      <div class="bg-white p-4 rounded shadow">
        <div v-if="selectedServices.length > 0">
          <h2>Selected Services</h2>
          <div v-for="(service, index) in selectedServices" :key="index" class="selected-service border p-4 rounded mb-4">
            <p>Description: {{ service.description }}</p>
            <p>Duration: {{ service.duration }} hours</p>
            <p>Price: {{ service.price }}</p>
          </div>
          <p>Total: {{ calculateTotal() }}</p>
          <button @click="buy" class="buy-button">Buy</button>
        </div>
        <div v-else>
          <p>No services selected</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceList from '../components/Services/ServiceList.vue';
import OrderService from '../services/OrderService';

export default {
  components: {
    ServiceList
  },
  data() {
    return {
      services: [], // Anta at du laster inn tjenester fra en API eller lignende
      selectedServices: []
    };
  },
  methods: {
    addToCart(service) {
      this.selectedServices.push(service); 
      console.log("Selected Services after adding:", this.selectedServices);
    },
    calculateTotal() {
      return this.selectedServices.reduce((total, service) => total + service.price, 0);
    },
    async buy() {
      try {
        const customerId = localStorage.getItem('selectedCustomerId');

        if (!customerId) {
          throw new Error('Customer information is missing');
        }

        for (let service of this.selectedServices) {
          const order = {
            customerId,
            serviceId: service.id
          };

          console.log('Order to be placed:', order);

          const newOrder = await OrderService.postOrder(order);
          console.log('Order placed:', newOrder);
        }

        this.selectedServices = [];
      } catch (error) {
        console.error('Error placing order:', error);
      }
    }
  },
  async mounted() {
    // Anta at du henter tjenester fra en API og setter `services`
    // this.services = await fetchServices();
  }
};
</script>

<style scoped>
.service-container {
  padding: 20px;
}

.service-list-wrapper {
  grid-column: span 8 / span 8;
}

.selected-services-container {
  grid-column: span 4 / span 4;
  
}

.bg-white {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.selected-service {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.buy-button {
  margin-top: 20px;
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

.buy-button:hover {
  background-color: rgb(21, 157, 167);
}
</style>
