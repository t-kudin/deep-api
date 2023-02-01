const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const fanlabRef = collection(db, 'fanlab');

const getAllFanlab = async (req, res) => {
  try {
    getDocs(fanlabRef).then((snapshot) => {
      let fanlab = []
      snapshot.docs.forEach((doc) => {
        fanlab.push({ ...doc.data(), id: doc.id })
      })
      res.send(fanlab)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getAllFanlab
}