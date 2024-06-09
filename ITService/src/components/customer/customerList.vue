<script>
import CustomerService from '../../services/CustomerService';

export default {
  name: 'customerList',
  data() {
    return {
      customers: "",
      filteredCustomers: "",
      searchQuery: '',
      loading: false,
      error: null,
      selectedCustomer: null,
    };
  },
  methods: {
    async loadCustomers() {
      this.loading = true;
      this.error = null;
      try {
        const data = await CustomerService.getAll();
        this.customers = data;
        this.filteredCustomers = data;
      } catch (err) {
        this.error = 'Error loading customers: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
    async filterCustomers() {
      this.loading = true;
      this.error = null;
      try {
        if (this.searchQuery.trim() === "") {
          this.error = 'Please enter a valid search term';
          this.loading = false;
          return;
        }
        const result = await CustomerService.getByName(this.searchQuery);
        this.filteredCustomers = result.filter(customer => 
          customer.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } catch (err) {
        this.error = 'Error filtering customers: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
    resetFilter() {
      this.searchQuery = '';
      this.loadCustomers();
      this.filteredCustomers = this.customers;
    },
    selectCustomer(customer) {
      localStorage.setItem('selectedCustomerId', customer.id);
      localStorage.setItem('selectedCustomerName', customer.name);
      this.selectedCustomer = customer;
    }
  },
  mounted() {
    this.loadCustomers();
  }
};
</script>

<template>
  <div class="modal-container">
    <h1 class="text-xl font-bold mb-4">Customer List</h1>
    <div class="filters mb-4">
      <input class="border p-2 rounded mr-2" v-model="searchQuery" placeholder="Search by name" />
      <button class="bg-blue-500 text-white p-2 rounded mr-2" @click="filterCustomers">Search</button>
      <button class="bg-gray-500 text-white p-2 rounded" @click="resetFilter">Show All</button>
    </div>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else class="customer-list">
      <div v-if="filteredCustomers.length">
        <div class="customer-box border p-2 mb-2 rounded cursor-pointer" v-for="customer in filteredCustomers" :key="customer.id" @click="selectCustomer(customer)">
          <h3 class="text-lg font-semibold">{{ customer.name }}</h3>
          <p>ID: {{ customer.id }}</p>
          <p>Organization Number: {{ customer.orgnr }}</p>
          <p>Phone Number: {{ customer.tlf }}</p>
          <p>Address: {{ customer.address }}</p>
        </div>
      </div>
      <div v-else>
        No customers found.
      </div>
    </div>
    <div v-if="error" class="error text-red-500 mt-4">
      {{ error }}
    </div>
    <div v-if="selectedCustomer" class="mt-4">
      <h2 class="text-xl font-bold">Selected Customer:</h2>
      <p>Name: {{ selectedCustomer.name }}</p>
      <p>ID: {{ selectedCustomer.id }}</p>
      <p>Organization Number: {{ selectedCustomer.orgnr }}</p>
      <p>Phone Number: {{ selectedCustomer.tlf }}</p>
      <p>Address: {{ selectedCustomer.address }}</p>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  background: rgb(49, 49, 49);
  width: 90%; /* Adjust as needed */
  height: 80%; /* Adjust as needed */
  max-width: 600px; /* Adjust as needed */
  max-height: 80vh; /* Adjust as needed */
  overflow-y: scroll;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.customer-list {
  max-height: 50vh; /* Adjust as needed */
  overflow-y: scroll;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
