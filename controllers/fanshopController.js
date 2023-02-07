const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const fanshopRef = collection(db, 'fanshop');

const getAllFanshop = async (req, res) => {
  try {
    getDocs(fanshopRef).then((snapshot) => {
      let fanshop = []
      snapshot.docs.forEach((doc) => {
        fanshop.push({ ...doc.data(), id: doc.id })
      })
      res.send(fanshop)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getAllFanshop
}