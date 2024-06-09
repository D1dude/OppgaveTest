import axios from 'axios';

const ITServicsService = (() => {
    
    const serviceURL = "http://localhost:8080/services";

    const getAll = async () => {
        try {
            const response = await axios.get(`${serviceURL}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching services:", error);
            throw error;
        }
    };

    const postService = async (service) => {
        try {
            const response = await axios.post(`${serviceURL}`, service);
            return response.data;
        } catch (error) {
            console.error("Error creating service:", error);
            throw error;
        }
    };

    const putService = async (id, service) => {
        try {
            const response = await axios.put(`${serviceURL}/${id}`, service);
            return response.data;
        } catch (error) {
            console.error("Error updating service:", error);
            throw error;
        }
    };

    const deleteService = async (id) => {
        try {
            await axios.delete(`${serviceURL}/${id}`);
        } catch (error) {
            console.error("Error deleting service:", error);
            throw error;
        }
    };

    const getByName = async (name) => {
        try {
            const response = await axios.get(`${serviceURL}?name=${name}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching service by name:", error);
            throw error;
        }
    };

    const getById = async (id) => {
        try {
            const response = await axios.get(`${serviceURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching service by ID:", error);
            throw error;
        }
    };

    const saveSelectedService = (serviceId, serviceName) => {
        try {
            localStorage.setItem('selectedServiceId', serviceId);
            localStorage.setItem('selectedServiceName', serviceName);
        } catch (error) {
            console.error('Error saving selected service to LocalStorage:', error);
            throw error;
        }
    };

    const getSelectedService = () => {
        try {
            const serviceId = localStorage.getItem('selectedServiceId');
            const serviceName = localStorage.getItem('selectedServiceName');
            return { serviceId, serviceName };
        } catch (error) {
            console.error('Error fetching selected service from LocalStorage:', error);
            throw error;
        }
    };

    return {
        getAll,
        postService,
        putService,
        deleteService,
        getByName,
        getById,
        saveSelectedService,
        getSelectedService
    };

})();

export default ITServicsService;





/*
import axios from 'axios';

const ITServicsService = (() => {
    // const serviceURL = "http://localhost:8080/service";
    const serviceURL = "http://localhost:8080/services";


    const getAll = async () => {
        try {
            const response = await axios.get(`${serviceURL}`);
            console.log("Response from getAll:", response.data); // Legg til logging her
            return response.data;
        } catch (error) {
            console.error("Error fetching services:", error);
            throw error;
        }
    };
    
    

    const postService = async (service) => {
        try {
            const response = await axios.post(`${serviceURL}`, service);
            return response.data;
        } catch (error) {
            console.error("Error creating service:", error);
            throw error;
        }
    };

    const putService = async (id, service) => {
        try {
            const response = await axios.put(`${serviceURL}/${id}`, service);
            return response.data;
        } catch (error) {
            console.error("Error updating service:", error);
            throw error;
        }
    };

    const deleteService = async (id) => {
        try {
            await axios.delete(`${serviceURL}/${id}`);
        } catch (error) {
            console.error("Error deleting service:", error);
            throw error;
        }
    };

    const getByName = async (name) => {
        try {
            const response = await axios.get(`${serviceURL}?name=${name}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching service by name:", error);
            throw error;
        }
    };

    const getById = async (id) => {
        try {
            const response = await axios.get(`${serviceURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching service by ID:", error);
            throw error;
        }
    };

    const saveSelectedService = (serviceId, serviceName) => {
        try {
            localStorage.setItem('selectedServiceId', serviceId);
            localStorage.setItem('selectedServiceName', serviceName);
        } catch (error) {
            console.error('Error saving selected service to LocalStorage:', error);
            throw error;
        }
    };

    const getSelectedService = () => {
        try {
            const serviceId = localStorage.getItem('selectedServiceId');
            const serviceName = localStorage.getItem('selectedServiceName');
            return { serviceId, serviceName };
        } catch (error) {
            console.error('Error fetching selected service from LocalStorage:', error);
            throw error;
        }
    };

    // Legg til Proxy-funksjonalitet
    const ITServicsServiceProxy = new Proxy({
        getAll,
        postService,
        putService,
        deleteService,
        getByName,
        getById,
        saveSelectedService,
        getSelectedService
    }, {
        apply(target, thisArg, argumentsList) {
            console.log(`Calling ${argumentsList[0]} function with arguments: ${argumentsList.slice(1)}`);
            return target(...argumentsList);
        }
    });

    return ITServicsServiceProxy;
})();

export default ITServicsService;

*/
