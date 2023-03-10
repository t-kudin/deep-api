const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const transactionsRef = collection(db, 'transactions');

const getTransactions = async (req, res) => {
  try {
    getDocs(transactionsRef).then((snapshot) => {
      let transactions = []
      snapshot.docs.forEach((doc) => {
        transactions.push({ ...doc.data(), id: doc.id })
      })
      res.send(transactions)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getTransactions
}