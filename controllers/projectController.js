const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const projectRef = collection(db, 'project');

const getAllProject = async (req, res) => {
  try {
    getDocs(projectRef).then((snapshot) => {
      let project = []
      snapshot.docs.forEach((doc) => {
        project.push({ ...doc.data(), id: doc.id })
      })
      res.send(project)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getAllProject
}