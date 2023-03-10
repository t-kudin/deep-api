const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const deliveryMethodsRef = collection(db, 'deliveryMethods');

const getDeliveryMethods = async (req, res) => {
  try {
    getDocs(deliveryMethodsRef).then((snapshot) => {
      let deliveryMethods = []
      snapshot.docs.forEach((doc) => {
        deliveryMethods.push({ ...doc.data(), id: doc.id })
      })
      res.send(deliveryMethods)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getDeliveryMethods
}