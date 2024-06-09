
<script>

import CustomerService from '../../services/CustomerService';

export default {
  data() {
    return {
      customer: {
        name: '',
        orgnr: '',
        tlf: '',
        address: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.customer.name || !this.customer.orgnr || !this.customer.tlf || !this.customer.address) {
          alert('Please fill in all fields');
          return;
        }

        const response = await CustomerService.postCustomer(this.customer);

        this.customer = {
          name: '',
          orgnr: '',
          tlf: '',
          address: ''
        };

        //alert('Customer added successfully!');
      } catch (error) {
        if (error.response && error.response.data) {
          console.error("Error adding customer:", error.response.data);
          alert('Failed to add customer. ' + error.response.data.message);
        } else {
          console.error("Error adding customer:", error);
          alert('Failed to add customer. Please try again.');
        }
      }
    }
  }
};

</script>

<template>
  <div class="addCustomer_Container border p-4">
    <h2 class="text-lg font-semibold mb-4">Add Customer</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block">Name:</label>
        <input type="text" id="name" class="border rounded text-center w-full py-2 px-3" v-model="customer.name" required>
      </div>
      <div>
        <label for="orgNumber" class="block">Organization Number:</label>
        <input type="text" id="orgNumber" class="border rounded text-center w-full py-2 px-3" v-model="customer.orgnr" required>
      </div>
      <div>
        <label for="phoneNumber" class="block">Phone Number:</label>
        <input type="tel" id="phoneNumber" class="border rounded text-center w-full py-2 px-3" v-model="customer.tlf" required>
      </div>
      <div>
        <label for="address" class="block">Address:</label>
        <input type="text" id="address" class="border rounded text-center w-full py-2 px-3" v-model="customer.address" required>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Customer</button>
    </form>
  </div>
</template>

<style scoped>
.addCustomer_Container {
  max-width: 400px;
  margin: 0 auto;
}

.addCustomer_Container h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.addCustomer_Container form div {
  margin-bottom: 1rem;
}

.addCustomer_Container label {
  display: block;
  margin-bottom: 0.5rem;
}

.addCustomer_Container input[type="text"],
.addCustomer_Container input[type="tel"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.addCustomer_Container button[type="submit"] {
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.addCustomer_Container button[type="submit"]:hover {
  background-color: #357ae8;
}
</style>
