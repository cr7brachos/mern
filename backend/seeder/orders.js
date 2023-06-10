import mongoose from "mongoose";


const orders = Array.from({length:22}).map((_,idx)=>{
    let day = 20;
   // let subtotal = 0;
    
    if (idx < 10) {
        var hour = "0" + idx;
        var subtotal = 100;
    } else if (idx > 16 && idx < 21) {
        var hour = idx;
        var subtotal = 100 + 12*idx;
    } else {
        var hour = idx;
        var subtotal = 100;
    }

    return {
        user: new mongoose.Types.ObjectId(),
        orderTotal: {
            itemsCount:3,
            cartSubTotal: subtotal,
            cartItems: [
                {
                    name: "product name",
                    price: 34,
                    image: {path: "/images"},
                    quantity: 532,
                    count: 65,

                }
            ],
            paymentMethod: "PayPal",
            isPaid: false,
            isDelivered: false,
            createdAt: `2022-02-${day}${hour}:12:36.490+00:00`
        }
    }
});

export default orders;