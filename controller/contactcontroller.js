const Contact = require('../model/contact')

const insertContact = (req, res) => {
const contact = {
    Name: req.body.Name,
    Phone: req.body.Phone,
    Email: req.body.Email,
    Message: req.body.Message
}

Contact.createContact(contact,(err,results)=>{
    if(!err){
        console.log(req.body);
        res.render("contact")
    }
});
};


module.exports = {insertContact};