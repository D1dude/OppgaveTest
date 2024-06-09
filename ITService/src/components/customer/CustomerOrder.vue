<script>
import OrderService from '../../services/OrderService';
import ITServicsService from '../../services/ITServicsService';



export default {
  data() {
    return {
      serviceDetails: [], // Endret til å være et tomt array
      orders: [], 
      customerName: ''
    };
  },
  async created() {
    try {


      const customerId = localStorage.getItem('selectedCustomerId');

      const customerName = localStorage.getItem('selectedCustomerName');
      this.customerName = customerName;
      if (!customerId || !customerName) {
        console.error('Customer information is missing');
        return;
      }

      const orders = await OrderService.getByCustomerId(customerId);
      console.log('dette er et array', orders);
      this.orders = orders; // Oppdaterer orders datafeltet

      for (let i = 0; i < orders.length; i++) {
        const serviceId = orders[i].serviceId;
        console.log(serviceId);
        if (serviceId) {
          try {
            const serviceDetails = await ITServicsService.getById(serviceId);
            console.log('dette er et objekt', serviceDetails);

            // Legg til detaljene i serviceDetails-arrayet
            this.serviceDetails.push(serviceDetails);

          } catch (error) {
            console.error('Error fetching service details for order', orders[i].id, ':', error);
          }
        } else {
          console.warn(`Service ID for order ${orders[i].id} is missing`);
        }
      }
    } catch (error) {
      console.error('Error fetching orders or service details for customer:', error);
    }
  }
};
</script>




<template>
  <div class="orders-container">
    <!-- Legg til klassen "text-white" for å sette hvit farge på teksten -->
    <h1 class="text-2xl font-bold mb-4 text-white">Orders for Customer: {{ customerName }}</h1>
    <ul class="orders-list">
      <li v-for="(detail, index) in orders" :key="index" class="order-item">
        <h2 class="text-lg font-semibold">Order {{ index + 1 }}</h2>
        <p><span class="font-semibold">Order ID:</span> {{ detail.id }}</p>
        <p><span class="font-semibold">Order Date:</span> {{ detail.createdAt }}</p>
        <p><span class="font-semibold">Service ID:</span> {{ detail.serviceId }}</p>
        <!-- Check if service details exist for the order -->
        <template v-if="serviceDetails[index]">
          <p v-for="(value, key) in serviceDetails[index]" :key="key">
            <span class="font-semibold">{{ key }}:</span> {{ value }}
          </p>
        </template>
        <template v-else>
          <p><span class="font-semibold">Service Details:</span> Not available</p>
        </template>
      </li>
    </ul>
  </div>
</template>





<style>
.orders-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.orders-list {
  list-style-type: none;
  padding: 0;
}

.order-item {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  color: rgb(0, 0, 0);
}

.order-item h2 {
  margin-bottom: 10px;
}
</style>
