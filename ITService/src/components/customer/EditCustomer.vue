<template>
  <div>
    <h2>Edit Customer</h2>
    <form @submit.prevent="editCustomer">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="customer.name" required>
      </div>
      <div>
        <label for="orgNumber">Organization Number:</label>
        <input type="text" id="orgNumber" v-model="customer.orgNumber" required>
      </div>
      <div>
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" v-model="customer.phoneNumber" required>
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="customer.address" required>
      </div>
      <button type="submit">Edit Customer</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      customerId: '', // Legg til customerId her
      customer: {
        name: '',
        orgNumber: '',
        phoneNumber: '',
        address: ''
      }
    };
  },
  methods: {
    async editCustomer() {
  try {
    // Sjekk om customerId er satt
    if (!this.customerId) {
      alert('Customer ID is required');
      return;
    }

    // Perform validation if needed
    // Example: check if fields are not empty
    if (!this.customer.name || !this.customer.orgNumber || !this.customer.phoneNumber || !this.customer.address) {
      alert('Please fill in all fields');
      return;
    }

    // Send the updated customer data to the server
    await axios.put(`http://localhost:8080/customers/${this.customerId}`, this.customer);
    
    // Reset the form after successful update
    this.customer = {
      name: '',
      orgNumber: '',
      phoneNumber: '',
      address: ''
    };

    alert('Customer updated successfully!');
    this.$emit('close'); // Lukk modal etter at kunden er oppdatert
  } catch (error) {
    console.error("Error updating customer:", error);
    alert('Failed to update customer. Please try again.');
  }
},

    async fetchCustomerDetails() {
      try {
        // Fetch customer details based on the provided customer ID
        const response = await axios.get(`http://localhost:8080/customers/${this.customerId}`);
        
        // Populate the input fields with the fetched customer details
        this.customer = response.data;
      } catch (error) {
        console.error("Error fetching customer details:", error);
        alert('Failed to fetch customer details. Please try again.');
      }
    }
  },
  mounted() {
  // Hent customerId fra localStorage
  this.customerId = localStorage.getItem('selectedCustomerId');
  
  // Sjekk om customerId er tilgjengelig
  if (this.customerId) {
    // Hvis customerId er tilgjengelig, hent kundedetaljer
    this.fetchCustomerDetails();
  } else {
    // Hvis customerId ikke er tilgjengelig, vis en feilmelding eller utfør en annen handling
    console.error("Customer ID is required");
    alert('Customer ID is required');
  }
}
};
</script>

<style scoped>
/* Stiler for EditCustomerModal.vue */
</style>
