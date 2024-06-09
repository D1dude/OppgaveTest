import CustomerService from '../services/CustomerService';

const CustomerServiceProxy = new Proxy(CustomerService, {
    apply(target, thisArg, argumentsList) {
        console.log(`Calling ${argumentsList[0]} function with arguments: ${argumentsList.slice(1)}`);
        return target(...argumentsList);
    }
});

export default CustomerServiceProxy;