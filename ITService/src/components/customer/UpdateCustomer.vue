<template>
    <div>
      <h2>Update Customer</h2>
      <form @submit.prevent="updateCustomer">
        <div>
          <label for="customerId">Customer ID:</label>
          <input type="text" id="customerId" v-model="customerId" required>
        </div>
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
        <button type="submit">Update Customer</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        customerId: '',
        customer: {
          name: '',
          orgNumber: '',
          phoneNumber: '',
          address: ''
        }
      };
    },
    methods: {
      async updateCustomer() {
        try {
          // Perform validation if needed
          // Example: check if fields are not empty
          if (!this.customerId || !this.customer.name || !this.customer.orgNumber || !this.customer.phoneNumber || !this.customer.address) {
            alert('Please fill in all fields');
            return;
          }
  
          // Send the updated customer data to the server
          await axios.put(`http://localhost:8080/customers/${this.customerId}`, this.customer);
          
          // Reset the form after successful update
          this.customerId = '';
          this.customer = {
            name: '',
            orgNumber: '',
            phoneNumber: '',
            address: ''
          };
  
          alert('Customer updated successfully!');
        } catch (error) {
          console.error("Error updating customer:", error);
          alert('Failed to update customer. Please try again.');
        }
      }
    }
  };
  </script>
  