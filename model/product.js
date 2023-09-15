const connection = require('../db/conn');

const Product = {};

Product.allProduct = (callback) => {
    connection.query('SELECT * FROM product',(error,results) => {
        callback(error,results);
    });
};
Product.getProduct = (sno,callback) => {
    connection.query('SELECT * FROM product WHERE sno = ?',sno,(error,results) => {
        callback(error,results[0]);
    });
};
Product.getProduct = (sno,callback) => {
    connection.query('SELECT * FROM product WHERE sno = ?',sno,(error,results) => {
        callback(error,results[0]);
    });
};

// Product.searchProduct = (search,callback) => {
//     connection.query("SELECT * FROM `product` WHERE `product_name` LIKE '%"+search+"%'",(error,results) => {
//         callback(error,results);
//     });
// };

module.exports = Product;

