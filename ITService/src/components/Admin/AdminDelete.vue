<template>
    <div class="admin-delete-container">
      <h2>Delete Customer</h2>
      <div>
        <label for="customerId">Customer ID:</label>
        <input type="text" id="customerId" v-model="customerId" @change="resetConfirm" required>
      </div>
      <button @click="confirmDelete">Delete Customer</button>
      <!-- Sjekk og bekreftelse før sletting -->
      <div v-if="confirmDeleteModal" class="confirm-modal">
        <p>Are you sure you want to delete the profile?</p>
        <button @click="deleteCustomer">Yes</button>
        <button @click="cancelDelete">No</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        customerId: '',
        confirmDeleteModal: false // Variabel for å vise/skjule bekreftelsesmodalen
      };
    },
    methods: {
      confirmDelete() {
        // Sett bekreftelsesmodalen til synlig
        if (this.customerId) {
          this.confirmDeleteModal = true;
        } else {
          alert('Please enter a Customer ID');
        }
      },
      async deleteCustomer() {
        try {
          // Send DELETE-requesten til serveren hvis brukeren bekrefter
          await axios.delete(`http://localhost:8080/customers/${this.customerId}`);
          // Skjul bekreftelsesmodalen
          this.confirmDeleteModal = false;
          // Tilbakestill kunde-ID feltet
          this.customerId = '';
          alert('Customer deleted successfully!');
        } catch (error) {
          console.error("Error deleting customer:", error);
          alert('Failed to delete customer. Please try again.');
        }
      },
      cancelDelete() {
        // Lukk bekreftelsesmodalen hvis brukeren velger å ikke slette
        this.confirmDeleteModal = false;
      },
      resetConfirm() {
        // Tilbakestill bekreftelsesmodalen når kunde-ID endres
        this.confirmDeleteModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-delete-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid rgb(21, 157, 167);
    border-radius: 8px;
  }
  
  .admin-delete-container h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .admin-delete-container form div {
    margin-bottom: 1rem;
  }
  
  .admin-delete-container label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .admin-delete-container input[type="text"],
  .admin-delete-container button {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgb(21, 157, 167);
    border-radius: 0.25rem;
  }
  
  .admin-delete-container button {
    background-color: rgb(21, 157, 167);
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .admin-delete-container button:hover {
    background-color: rgb(21, 150, 167);
  }
  
  .confirm-modal {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 8px;
  }
  
  .confirm-modal p {
    color: white;
    margin-bottom: 10px;
  }
  
  .confirm-modal button {
    margin-right: 10px;
  }
  </style>
  