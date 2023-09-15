const Order = require('../model/order');
const Product = require('../model/product')

function generateOrderId(){
    var Orderid = 'ORDS';
    const min = 10000;
    const max = 99999;
    Orderid = Orderid + Math.floor(Math.random()*(max-min + 1));
    return Orderid;
}

const userCheckout=(req,res)=>{
    const id = req.params.id;
    Product.getProduct(id,(err,results)=>{
        if(!err){
            res.render('checkout',{result:results});
        }else{
            res.send("invalid page");
        }
    });
}

const getallorder=(req,res)=>{
    Order.getAllOrder((err,results)=>{
        if(!err){
            res.render("order",{order:results});
        }else{
            res.send("invalid page");
        }
    });
}

const userCheckoutSubmit=(req,res)=>{
    const orderid = generateOrderId();
    const details = { 
     name :  req.body.name,
     email :   req.body.email,
     address :   req.body.address,
     city :  req.body.city,
     state :   req.body.state,
     country :   req.body.country,
     product :   req.body.product_id,
     order_id: orderid
    };

    const payment = {
        name :  req.body.name,
        email :   req.body.email,
        // phone: '',
        product_id : req.body.product_id,
        amount: req.body.amount * 100,
        order_id: orderid
    };

    Order.checkoutDetails(orderid,(err,results)=>{
        if(results){
            res.redirect('/checkout/'+req.body.product_id);
        }else{
            Order.insertcheckoutDetails(details,(err,results)=>{
                if(!err){
                    res.render("payment",{payment:payment});
                }else{
                    res.send(err);
                }
            }); 
        }
    });
}

const savePayment = (req,res) => {
    const payment = {
        product_id : req.body.product_id,
        order_id : req.body.order_id,
        amount : req.body.amount/100,
        txn : req.body.razorpay_payment_id
    };

    Order.paymentSuccess(payment,(err,results)=>{
        if(!err){
            res.send("Order is success");
        }else{
            console.log(err);
        }
    })

};

module.exports = {userCheckout,userCheckoutSubmit,savePayment, getallorder};