const { initializeApp } = require('firebase/app');
const { firebaseConfig } = require('./config');
const { getFirestore } = require('firebase/firestore');

initializeApp(firebaseConfig);

const db = getFirestore();

module.exports = db;