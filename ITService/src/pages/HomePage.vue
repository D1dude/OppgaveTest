<template>
  <div class="Title col-span-12">
    <h1>Home</h1>
  </div>

  <div class="col-span-2"></div>
  <div class="col-span-8 grid grid-cols-8">
    <article class="col-span-4 grid grid-cols-3">
      <div class="circle col-span-1">
        <router-link to="/profile" class="circle-link">
          Profile
        </router-link>
      </div>

      <div class="col-span-1"></div>

      <div class="circle col-span-1">
        <router-link to="/Admin" class="circle-link">
          Admin
        </router-link>
      </div>

      <div class="col-span-1"></div>

      <div class="circle col-span-1 center">
        <router-link to="/service" class="circle-link">
          service
        </router-link>
      </div>

      <div class="col-span-1"></div>

      <div class="circle col-span-1" @click="openCustomerListModal">
        <!-- Bruk denne div som knappen for å åpne customerList.vue som modal -->
        <span class="circle-link">Open Customer List</span>
      </div>

      <div class="col-span-1"></div>

      <div class="circle col-span-1" @click="openAddCustomerModal"> <!-- Legg til klikkfunksjonalitet for å åpne AddCustomer.vue -->
        <span class="circle-link">New Customer</span>
      </div>

      
    </article>

    <div class="col-span-1"></div>

    <article class="col-span-3">
      <div class="main_circle"></div>
    </article>
  </div>

  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
      <!-- Bruk en conditional rendering for å vise riktig modal basert på showModal-verdien -->
      <customerList v-if="showModal && activeModal === 'customerList'" />
      <AddCustomer v-if="showModal && activeModal === 'addCustomer'" />
    </div>
  </div>
</template>

<script>
import customerList from '../components/customer/customerList.vue';
import AddCustomer from '../components/customer/AddCustomer.vue'; // Importer AddCustomer

export default {
  components: {
    customerList,
    AddCustomer
  },
  data() {
    return {
      showModal: false,
      activeModal: '' // Legg til en variabel for å spore hvilken modal som skal vises
    };
  },
  methods: {
    openCustomerListModal() {
      this.showModal = true;
      this.activeModal = 'customerList'; // Sett activeModal til 'customerList' når customerList.vue skal vises
    },
    openAddCustomerModal() {
      this.showModal = true;
      this.activeModal = 'addCustomer'; // Sett activeModal til 'addCustomer' når AddCustomer.vue skal vises
    },
    closeModal() {
      this.showModal = false;
      this.activeModal = ''; // Tilbakestill activeModal når modalen lukkes
    }
  }
};
</script>

<style scoped>
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
  background: rgb(49, 49, 49);
  color: aqua;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  border: none;
  font-size: 1.5em;
}
</style>
