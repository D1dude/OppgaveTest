<script>
import CustomerService from '../../services/CustomerService';
/*
export default {
  data() {
    return {
      customerId: null,
      customerName: null,
      customer: null,
      loading: false,
      error: null,
    };
  },
  created() {
    const { customerId, customerName } = CustomerService.getSelectedCustomer();
    if (customerId && customerName) {
      this.customerId = customerId;
      this.customerName = customerName;
      this.loadCustomer();
    } else {
      this.error = 'No customer selected';
    }
  },
  methods: {
    async loadCustomer() {
      this.loading = true;
      try {
        // Hent kundens detaljer basert på ID
        this.customer = await CustomerService.getById(this.customerId);
      } catch (err) {
        this.error = 'Error loading customer profile: ' + err.message;
      } finally {
        this.loading = false;
      }
    }
  }
};

*/




export default {
  data() {
    return {
      customerId: localStorage.getItem('selectedCustomerId'),
      customerName: localStorage.getItem('selectedCustomerName'),
      customer: null,
      loading: false,
      error: null,
    };
  },
  created() {
    if (this.customerId && this.customerName) {
      this.loadCustomer();
    } else {
      this.error = 'No customer selected';
    }
  },
  methods: {
    async loadCustomer() {
      this.loading = true;
      try {
        // Hent kundens detaljer basert på ID
        this.customer = await CustomerService.getById(this.customerId);
      } catch (err) {
        this.error = 'Error loading customer profile: ' + err.message;
      } finally {
        this.loading = false;
      }
    }
  }
};

</script>


<template>
  <div class="profile bg-white">
    <h1 class="text-2xl font-bold mb-4">Customer Profile</h1>
    
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="customer">
      <h2 class="text-xl font-semibold">{{ customer.name }}</h2>
      <p><span class="font-semibold">ID:</span> {{ customer.id }}</p>
      <p><span class="font-semibold">Organization Number:</span> {{ customer.orgnr }}</p>
      <p><span class="font-semibold">Phone Number:</span> {{ customer.tlf }}</p>
      <p><span class="font-semibold">Address:</span> {{ customer.address }}</p>
      <!-- Add other customer details here -->
    </div>
    <div v-else>
      <p>No customer selected</p>
    </div>
  </div>
</template>

<style>
.profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.loading {
  margin-top: 20px;
  font-weight: bold;
  color: #333;
}

.error {
  margin-top: 20px;
  color: #ff0000;
}

.profile h1 {
  margin-bottom: 20px;
}

.profile p {
  margin-bottom: 10px;
}
</style>