const mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'admin',
    database : 'mistral'
});

/**
 * Get the list of calls from the database, ordered by favourite and date
 * @return {Promise<JSON>} json containing the list of calls
 */
function getCardList () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Calls ORDER BY Favourite DESC, Date DESC', (err, data) => {
            if(err) { reject(err); }
            resolve(data);
        });
    })
}

/**
 * Inserts a call in the database based on the parameters given
 * @param title {string} the card title
 * @param type {string} the card type
 * @param customer {string | null} the card customer
 * @param favourite {boolean} whether the card is set as favourite or not
 * @return {Promise<string>} success or error message
 */
function addCard(title, type, customer, favourite) {
    let sql = 'INSERT INTO Calls (Title, Type, Customer, Favourite) VALUES (?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
        connection.query(sql, [title, type, customer, favourite], (err) => {
            if(err) { reject("Error adding new card"); }
            resolve("New card added successfully");
        });
    });
}

/**
 * Switch the Favourite flag of the card corresponding the id given as parameter
 * @param cardId {number} the card id
 * @return {Promise<string>} success or error message
 */
function toggleFavourite(cardId) {
    let sql = 'UPDATE Calls SET Favourite=!Favourite WHERE Id=?';

    return new Promise((resolve, reject) => {
        connection.query(sql, [cardId], (err) => {
            if (err) { reject("Error updating card"); }
            resolve("Card updated successfully");
        });
    });
}

exports.getCardList = getCardList;
exports.addCard = addCard;
exports.toggleFavourite = toggleFavourite;