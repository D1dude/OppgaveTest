<script>
import customerList from '../components/customer/customerList.vue';
import AddService from '../components/Services/AddService.vue';
import AdminUpdate from '../components/Admin/AdminUpdate.vue';
import AdminDelete from '../components/Admin/AdminDelete.vue';
import AdminUpdateService from '../components/Admin/AdminUpdateService.vue';

export default {
  components: {
    AdminUpdate,
    customerList,
    AddService,
    AdminUpdate,
    AdminDelete,
    AdminUpdateService
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

    <div class="order-list flex-container">
      <div class="circle col-span-1" @click="openModal('customerList')">
        <span class="circle-link">Customer List</span>
      </div>

      <div class="circle col-span-1" @click="openModal('AdminUpdate')">
        <span class="circle-link">Admin Customer Update</span>
      </div>

      <div class="circle col-span-1" @click="openModal('AdminDelete')">
        <span class="circle-link">Delete Profile</span>
      </div>
      
    </div>

    <div class="order-list flex-container">
      <div class="circle col-span-1" @click="openModal('AddService')">
        <span class="circle-link">Add Service</span>
      </div>

      <div class="circle col-span-1" @click="openModal('AdminUpdateService')">
        <span class="circle-link">Update Service</span>
      </div>
      
    </div>


  </div>

  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
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
