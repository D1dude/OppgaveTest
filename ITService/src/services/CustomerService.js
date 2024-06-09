import axios from 'axios';

const CustomerService = (() =>{

    const customerURL = "http://localhost:8080/customers";
    
    const getAll = async () => {
        try 
        {
            const response = await axios.get(`${customerURL}`);
            return response.data;
        }
        catch (error)
        {
            console.error("Error fetching customers:", error);
            throw error;
        }
    };
    
    
    
    const postCustomer = async (customer) => {
        try
        {
            const response = await axios.post(`${customerURL}`, customer);
            return response.data;
        }
        catch (error)
        {
            console.error("Error creating customer:", error);
            throw error;
        }
    };
    
    
    const putCustomer = async (id, customer) => {
        try
        {
            const response = await axios.put(`${customerURL}/${id}`, customer);
            return response.data;
        }
        catch (error)
        {
            console.error("Error updating customer:", error);
            throw error;
        }
    };
    
    const deleteCustomer = async (id) => {
        try
        {
            await axios.delete(`${customerURL}/${id}`);
        }
        catch (error)
        {
            console.error("Error deleting customer:", error);
            throw error;
        }
    };

    const getByName = async (name) => {
        try {
            const response = await axios.get(`${customerURL}?name=${name}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching customer by name:", error);
            throw error;
        }
    };

    const getById = async (id) => {
        try {
            const response = await axios.get(`${customerURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching customer by ID:", error);
            throw error;
        }
    };

    const saveSelectedCustomer = (customerId, customerName) => {
        try {
            localStorage.setItem('selectedCustomerId', customerId);
            localStorage.setItem('selectedCustomerName', customerName);
        } catch (error) {
            console.error('Error saving selected customer to LocalStorage:', error);
            throw error;
        }
    };

    const getSelectedCustomer = () => {
        try {
            const customerId = localStorage.getItem('selectedCustomerId');
            const customerName = localStorage.getItem('selectedCustomerName');
            return { customerId, customerName };
        } catch (error) {
            console.error('Error fetching selected customer from LocalStorage:', error);
            throw error;
        }
    };
    
    return{
        getAll,
        postCustomer,
        putCustomer,
        deleteCustomer,
        getByName,
        getById,
        saveSelectedCustomer,
        getSelectedCustomer
    };

})();

export default CustomerService;