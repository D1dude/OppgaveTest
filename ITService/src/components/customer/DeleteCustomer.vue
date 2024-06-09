<template>
  <div>
    <h2>Delete Customer</h2>
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
      confirmDeleteModal: false // Variabel for å vise/skjule bekreftelsesmodalen
    };
  },
  methods: {
    async confirmDelete() {
      // Sett bekreftelsesmodalen til synlig
      this.confirmDeleteModal = true;
    },
    async deleteCustomer() {
      try {
        // Hent customerId fra localStorage
        const customerId = localStorage.getItem('selectedCustomerId');
        // Send DELETE-requesten til serveren hvis brukeren bekrefter
        await axios.delete(`http://localhost:8080/customers/${customerId}`);
        // Skjul bekreftelsesmodalen
        this.confirmDeleteModal = false;
        alert('Customer deleted successfully!');
      } catch (error) {
        console.error("Error deleting customer:", error);
        alert('Failed to delete customer. Please try again.');
      }
    },
    cancelDelete() {
      // Lukk bekreftelsesmodalen hvis brukeren velger å ikke slette
      this.confirmDeleteModal = false;
    }
  },
  mounted() {
    // Hent customerId fra localStorage når komponenten er montert
    const customerId = localStorage.getItem('selectedCustomerId');
    // Sjekk om customerId er tilgjengelig
    if (customerId) {
      // Hvis customerId er tilgjengelig, vis bekreftelsesmodalen
      this.confirmDeleteModal = true;
    } else {
      // Hvis customerId ikke er tilgjengelig, gi brukerfeilmelding
      alert('No Customer ID found. Please select a customer.');
    }
  }
};
</script>
