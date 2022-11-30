
let config = {
  "publicKey": "test_public_key_e52761c0d5744de7b38fbdc647e83ed0",
  "productIdentity": "1234567890",
  "productName": "Almighty",
  "productUrl": "http://localhost:3000",
  "eventHandler": {
    onSuccess (payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
    },
    // onError handler is optional
    onError (error) {
      // handle errors
      console.log(error);
    }
  },
  // one can set the order of payment options and also the payment options based on the order and items in the array
  paymentPreference: [
    "MOBILE_BANKING",
    "KHALTI",
    "EBANKING",
  ],
};

export default config;

// let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
// 	checkout.show({amount: 1000});
// }