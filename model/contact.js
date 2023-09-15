const connection = require('../db/conn');

const Contact = {};

Contact.createContact = (contact , callback) => {
    connection.query('INSERT INTO contact SET ?',contact,(error,results) => {
        callback(error,results);
    });
};

// Contact.getContact = (email , callback) => {
//     connection.query('SELECT * FROM contact WHERE email = ?',email,(error,results) => {
//         callback(error,results);
//     });
// };

module.exports = Contact;