const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const testMoviesRef = collection(db, 'testMovies');

const getAllTestMovies = async (req, res) => {
  try {
    getDocs(testMoviesRef).then((snapshot) => {
      let movies = []
      snapshot.docs.forEach((doc) => {
        movies.push({ ...doc.data(), id: doc.id })
      })
      res.send(movies)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getAllTestMovies
}