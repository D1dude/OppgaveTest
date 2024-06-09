<template>
    <div class="admin-update-container">
      <h2>Edit Customer</h2>
      <form @submit.prevent="editCustomer">
        <div>
          <label for="customerId">Customer ID:</label>
          <input type="text" id="customerId" v-model="customerId" @change="fetchCustomerDetails" required>
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
    }
  };
  </script>
  
  <style scoped>
  .admin-update-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid rgb(21, 157, 167);
    border-radius: 8px;
  }
  
  .admin-update-container h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .admin-update-container form div {
    margin-bottom: 1rem;
  }
  
  .admin-update-container label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .admin-update-container input[type="text"],
  .admin-update-container input[type="tel"],
  .admin-update-container button[type="submit"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgb(21, 157, 167);
    border-radius: 0.25rem;
  }
  
  .admin-update-container button[type="submit"] {
    background-color: rgb(21, 157, 167);
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .admin-update-container button[type="submit"]:hover {
    background-color: rgb(21, 150, 167);
  }
  </style>
  