const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const newsRef = collection(db, 'news');

const getAllNews = async (req, res) => {
  try {
    getDocs(newsRef).then((snapshot) => {
      let news = []
      snapshot.docs.forEach((doc) => {
        news.push({ ...doc.data(), id: doc.id })
      })
      res.send(news)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getAllNews
}