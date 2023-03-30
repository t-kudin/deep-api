const { collection, getDocs, addDoc } = require('firebase/firestore');
const db = require('../db');

const messagesRef = collection(db, 'messages')

const getAllMessages = async (req, res) => {
  try {
    getDocs(messagesRef).then((snapshot) => {
      let messages = []
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      res.send(messages)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postSendMessage = async (req, res) => {
  try {
    await addDoc(messagesRef, {
      ...req.body,
      createdAt: new Date().getTime(),
    })
    res.status(200).send({ message: "OK" })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getAllMessages,
  postSendMessage
}