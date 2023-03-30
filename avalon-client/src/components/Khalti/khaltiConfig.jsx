import axios from "axios";
import myKey from "./khaltiKey";

export const verifyPayment = async (payload) => {
    // Create the order object
    
    // let data = {
    //   "token": payload.token,
    //   "amount": payload.amount
    // };
    const data = {
        token: payload.token,
        // payment_id: payload.token,
        payment_method: 'KHALTI',
      };
  
    let config = {
      headers: {'Authorization': myKey.secretKey}
    };
  
    // Send the order to the endpoint
   
    // const response = await axios.post("http://127.0.0.1:8000/api/order/payment/", data, config);
    const response = await axios.post("http://your-django-backend.com/api/v1/payments/", data, config);
    console.log(response.data);
  };
  

let config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey ,
    "productIdentity": "123454321",
    "productName": "Avalon e-Comm",
    "productUrl": "http://localhost:3000",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log('Payment Sucessful!')
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config;
