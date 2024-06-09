
import axios from 'axios';

const OrderService = (() => {
    const orderURL = "http://localhost:8080/customerService";

    const getAll = async () => {
        try {
            const response = await axios.get(orderURL);
            return response.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error;
        }
    };

    const getByCustomerId = async (customerId) => {
        try {
            const response = await axios.get(`${orderURL}/customer/${customerId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching orders by customer ID:", error);
            throw error;
        }
    };

    const deleteOrderById = async (orderId) => {
        try {
            await axios.delete(`${orderURL}/${orderId}`);
        } catch (error) {
            console.error("Error deleting order by ID:", error);
            throw error;
        }
    };

    const postOrder = async (order) => {
        try {
            const response = await axios.post(orderURL, {
                customerId: order.customerId,
                serviceId: order.serviceId
            });
            return response.data;
        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    };

    const putOrder = async (orderId, order) => {
        try {
            const response = await axios.put(`${orderURL}/${orderId}`, {
                customerId: order.customerId,
                serviceId: order.serviceId
            });
            return response.data;
        } catch (error) {
            console.error("Error updating order:", error);
            throw error;
        }
    };

    return {
        getAll,
        getByCustomerId,
        deleteOrderById,
        postOrder,
        putOrder
    };
})();

export default OrderService;


/*
import axios from 'axios';

const OrderService = (() => {
    const orderURL = "http://localhost:8080/CustomerService";

    const getAll = async () => {
        try {
            const response = await axios.get(`${orderURL}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error;
        }
    };

    const getByCustomerId = async (customerId) => {
        try {
            const response = await axios.get(`${orderURL}?customerId=${customerId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching orders by customer ID:", error);
            throw error;
        }
    };

    const getByCustomerName = async (customerName) => {
        try {
            const response = await axios.get(`${orderURL}?customerName=${customerName}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching orders by customer name:", error);
            throw error;
        }
    };

    const deleteOrderById = async (orderId) => {
        try {
            await axios.delete(`${orderURL}/${orderId}`);
        } catch (error) {
            console.error("Error deleting order by ID:", error);
            throw error;
        }
    };

    const postOrder = async (order) => {
        try {
            const response = await axios.post(`${orderURL}`, order);
            return response.data;
        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    };

    const putOrder = async (orderId, order) => {
        try {
            const response = await axios.put(`${orderURL}/${orderId}`, order);
            return response.data;
        } catch (error) {
            console.error("Error updating order:", error);
            throw error;
        }
    };

    // Legg til Proxy-funksjonalitet
    const OrderServiceProxy = new Proxy({
        getAll,
        getByCustomerId,
        getByCustomerName,
        deleteOrderById,
        postOrder,
        putOrder
    }, {
        apply(target, thisArg, argumentsList) {
            console.log(`Calling ${argumentsList[0]} function with arguments: ${argumentsList.slice(1)}`);
            return target(...argumentsList);
        }
    });

    return OrderServiceProxy;
})();

export default OrderService;
*/