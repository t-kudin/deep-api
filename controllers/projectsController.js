const { collection, getDocs } = require('firebase/firestore');
const db = require('../db');

const projectsRef = collection(db, 'project');

const getAllProjects = async (req, res) => {
  try {
    getDocs(projectsRef).then((snapshot) => {
      let projects = []
      snapshot.docs.forEach((doc) => {
        projects.push({ ...doc.data(), id: doc.id })
      })
      res.send(projects)
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getAllProjects
}