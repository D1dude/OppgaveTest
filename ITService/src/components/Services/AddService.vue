<template>
  <div class="modal-content">
    <h2 class="modal-title">Add Service</h2>
    <form @submit.prevent="submitForm" class="service-form">
      <div class="form-group">
        <label for="description" class="form-label">Description:</label>
        <input type="text" id="description" class="form-input" v-model="service.description" required>
      </div>
      <div class="form-group">
        <label for="date" class="form-label">Date:</label>
        <input type="date" id="date" class="form-input" v-model="service.date" required>
      </div>
      <div class="form-group">
        <label for="duration" class="form-label">Duration (hours):</label>
        <input type="number" id="duration" class="form-input" v-model="service.duration" required>
      </div>
      <div class="form-group">
        <label for="price" class="form-label">Price:</label>
        <input type="number" id="price" class="form-input" v-model="service.price" required>
      </div>
      <button type="submit" class="btn-submit">Add Service</button>
    </form>
  </div>
</template>

<script>
import ITServicesService from '../../services/ITServicsService';

export default {
  data() {
    return {
      isOpen: true,
      service: {
        description: '',
        date: '',
        duration: null,
        price: null
      }
    };
  },
  methods: {
    onClose() {
      this.isOpen = false;
    },
    async submitForm() {
      try {
        if (!this.service.description || !this.service.date || !this.service.duration || !this.service.price) {
          alert('Please fill in all fields');
          return;
        }
        
        const response = await ITServicesService.postService(this.service);
        
        this.service = {
          description: '',
          date: '',
          duration: null,
          price: null
        };
        
        alert('Service added successfully!');
      } catch (error) {
        console.error("Error adding service:", error);
        alert('Failed to add service. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.service-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
