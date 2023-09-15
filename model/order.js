const connection = require('../db/conn');

const Order = {};

Order.insertcheckoutDetails = (details , callback) => {
    connection.query('INSERT INTO checkout SET ?',details,(error,results) => {
        callback(error,results); 
    });  
};

Order.checkoutDetails = (order_id , callback) => {
    connection.query('SELECT * FROM checkout WHERE order_id = ?',order_id,(error,results) => {
        callback(error,results[0]);
       
    });  
};

Order.paymentSuccess = (payment , callback) => {
    connection.query('INSERT INTO payment SET ?',payment,(error,results) => {
        callback(error,results);
    });  
};


Order.getAllOrder = (callback) => {
    connection.query('SELECT * FROM payment JOIN checkout ON payment.order_id = checkout.order_id JOIN product ON product.sno = checkout.product;',(error,results) => {
        callback(error,results);
    });  
};


module.exports = Order;