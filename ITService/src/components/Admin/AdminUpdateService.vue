<template>
    <div class="admin-update-container">
      <h2>Edit Service</h2>
      <form @submit.prevent="editService">
        <div>
          <label for="serviceId">Service ID:</label>
          <input type="text" id="serviceId" v-model="serviceId" @change="fetchServiceDetails" required>
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="service.name" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <input type="text" id="description" v-model="service.description" required>
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="service.price" required>
        </div>
        <button type="submit">Edit Service</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  const serviceURL = 'http://localhost:8080/services'; // Erstatt med riktig URL
  
  export default {
    data() {
      return {
        serviceId: '', // Legg til serviceId her
        service: {
          name: '',
          description: '',
          price: ''
        }
      };
    },
    methods: {
      async editService() {
        try {
          // Sjekk om serviceId er satt
          if (!this.serviceId) {
            alert('Service ID is required');
            return;
          }
  
          // Perform validation if needed
          // Example: check if fields are not empty
          if (!this.service.name || !this.service.description || !this.service.price) {
            alert('Please fill in all fields');
            return;
          }
  
          // Send the updated service data to the server
          await axios.put(`${serviceURL}/${this.serviceId}`, this.service);
  
          // Reset the form after successful update
          this.service = {
            name: '',
            description: '',
            price: ''
          };
  
          alert('Service updated successfully!');
          this.$emit('close'); // Lukk modal etter at tjenesten er oppdatert
        } catch (error) {
          console.error("Error updating service:", error);
          alert('Failed to update service. Please try again.');
        }
      },
  
      async fetchServiceDetails() {
        try {
          // Fetch service details based on the provided service ID
          const response = await axios.get(`${serviceURL}/${this.serviceId}`);
          
          // Populate the input fields with the fetched service details
          this.service = response.data;
        } catch (error) {
          console.error("Error fetching service details:", error);
          alert('Failed to fetch service details. Please try again.');
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
  .admin-update-container input[type="number"],
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
  