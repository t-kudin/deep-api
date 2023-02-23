const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const userRef = collection(db, 'user');

const getUser = async (req, res) => {
  try {
    getDocs(userRef).then((snapshot) => {
      let user = []
      snapshot.docs.forEach((doc) => {
        user.push({ ...doc.data(), id: doc.id })
      })
      res.send(user)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getUser
}