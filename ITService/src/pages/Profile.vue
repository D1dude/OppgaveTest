<script>
import ShowProfile from '../components/customer/ShowProfile.vue';
import CustomerOrderModal from '../components/customer/CustomerOrder.vue';
import EditCustomerModal from '../components/customer/EditCustomer.vue';
import DeleteCustomerModal from '../components/customer/DeleteCustomer.vue'; // Importert DeleteCustomerModal

export default {
  components: {
    ShowProfile,
    CustomerOrderModal,
    EditCustomerModal,
    DeleteCustomerModal // Lagt til komponent for sletting av kundeinformasjon
  },
  data() {
    return {
      showModal: false,
      modalComponent: null
    };
  },
  methods: {
    openModal(componentName) {
      this.modalComponent = componentName;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<template>
  <div class="col-span-1"></div>
  <div class="profile-container col-span-10">
    <h1 class="text-3xl font-bold mb-6">User Profile</h1>
    <div class="mb-8 profile-container">
      <ShowProfile />
    </div>
    <div class="order-list flex-container">
      <div class="circle col-span-1" @click="openModal('CustomerOrderModal')">
        <span class="circle-link">Orders</span>
      </div>
      <div class="circle col-span-1" @click="openModal('EditCustomerModal')"> <!-- Endret til å åpne EditCustomerModal -->
        <span class="circle-link">Update profil</span>
      </div>
      <div class="circle col-span-1" @click="openModal('DeleteCustomerModal')">
        <span class="circle-link">Delete Profile</span>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
      <!-- Bruker modalComponent for å vise riktig modal -->
      <component :is="modalComponent" />
    </div>
  </div>
</template>


<style scoped>
.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px; /* Juster etter behov */
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  width: 80%;
  height: 80%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: scroll;
  padding: 20px;
  border-radius: 8px;
  position: relative;
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
