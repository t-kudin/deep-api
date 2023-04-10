const { collection, getDocs, setDoc, doc } = require('firebase/firestore');
const db = require('../db');

const projectsRef = collection(db, 'projects');


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

const setRequestForProject = async (req, res) => {
  try {
    const docData = {
      chats: [
        {
          attachments: [
            {
              name: "https://iili.io/HNNEXyv.jpg",
              id: "1",
              type: "image",
              date: 1643205110417,
            },
            {
              name: "https://iili.io/HNNEW8J.jpg",
              date: 1642081910417,
              id: "2",
              type: "image",
            },
            {
              date: 1639144310417,
              name: "https://iili.io/HNNEjuR.jpg",
              type: "video",
              id: "3",
            },
            { date: 1639057910417, name: "анимация.gif", id: "4", type: "file" },
            {
              id: "5",
              date: 1589032310417,
              name: "https://iili.io/HNNENZN.jpg",
              type: "image",
            },
            {
              id: "6",
              name: "https://iili.io/HNNEenI.jpg",
              type: "image",
              date: 1589032310417,
            },
            {
              date: 1589032310417,
              id: "7",
              type: "image",
              name: "https://iili.io/HNNEkGt.jpg",
            },
            { name: "сценарий.txt", id: "8", type: "file", date: 1562680310417 },
            {
              name: "https://iili.io/HNNEv6X.jpg",
              date: 1562680310417,
              type: "image",
              id: "9",
            },
          ],
          id: "1",
          users: [
            {
              role: "Сценарист",
              id: "1",
              avatar: "https://iili.io/HNNEM3g.jpg",
              name: { en: "Igor Duban", ru: "Игорь Дубань", cn: "伊戈爾·杜班" },
            },
            {
              avatar: "https://iili.io/HNNEwjp.jpg",
              name: { en: "Igor Duban", cn: "伊戈爾·杜班", ru: "Игорь Дубань" },
              role: "Оператор",
              id: "2",
            },
            {
              id: "3",
              name: { en: "Igor Duban", cn: "伊戈爾·杜班", ru: "Игорь Дубань" },
              role: "Художник–постановщик",
              avatar: "https://iili.io/HNNEwjp.jpg",
            },
          ],
        },
        {
          users: [
            {
              name: { cn: "伊戈爾·杜班", ru: "Игорь Дубань", en: "Igor Duban" },
              avatar: "https://iili.io/HNNEM3g.jpg",
              role: "Художник–постановщик",
              id: "1",
            },
          ],
          id: "2",
        },
        {
          users: [
            {
              avatar: "https://iili.io/HNNEM3g.jpg",
              name: { cn: "伊戈爾·杜班", en: "Igor Duban", ru: "Игорь Дубань" },
              role: "Продюсер",
              id: "1",
            },
          ],
          id: "3",
        },
        {
          id: "4",
          users: [
            {
              name: { en: "Igor Duban", ru: "Игорь Дубань", cn: "伊戈爾·杜班" },
              role: "Продюсер",
              avatar: "https://iili.io/HNNEM3g.jpg",
              id: "1",
            },
          ],
        },
        {
          users: [
            {
              avatar: "https://iili.io/HNNEM3g.jpg",
              role: "Продюсер",
              id: "1",
              name: { en: "Igor Duban", cn: "伊戈爾·杜班", ru: "Игорь Дубань" },
            },
          ],
          id: "5",
        },
        {
          users: [
            {
              id: "1",
              avatar: "https://iili.io/HNNEM3g.jpg",
              role: "Продюсер",
              name: { cn: "伊戈爾·杜班", en: "Igor Duban", ru: "Игорь Дубань" },
            },
            {
              avatar: "https://iili.io/HNNEwjp.jpg",
              role: "Композитор",
              id: "2",
              name: { en: "Igor Duban", cn: "伊戈爾·杜班", ru: "Игорь Дубань" },
            },
          ],
          id: "6",
        },
      ],
      team: [
        {
          id: "1",
          role: "Администратор",
          avatar: "https://iili.io/HNNEM3g.jpg",
          name: { cn: "克里斯汀·沃森", en: "Kristin Watson", ru: "Кристин Уотсон" },
        },
        {
          avatar: "https://iili.io/HNNEwjp.jpg",
          id: "2",
          role: "Оператор",
          name: { cn: "阿爾伯特弗洛雷斯", en: "Albert Flores", ru: "Альберт Флорес" },
        },
        {
          avatar: "https://iili.io/HNNEwjp.jpg",
          role: "Режиссёр",
          name: { cn: "阿爾伯特弗洛雷斯", en: "Albert Flores", ru: "Альберт Флорес" },
          id: "3",
        },
        {
          id: "4",
          avatar: "https://iili.io/HNNEwjp.jpg",
          role: "Модератор",
          name: { en: "Kristin Watson", cn: "克里斯汀·沃森", ru: "Кристин Уотсон" },
        },
      ],
      teamRequests: [
        {
          coveringLetter:
            "Добрый день! Меня зовут Кристин Уотсон, я бы хотела предложить свою кандидатуру в качестве Модератора в Ваш проект.",
          id: "5",
          name: { cn: "克里斯汀·沃森", en: "Kristin Watson", ru: "Кристин Уотсон" },
          avatar: "https://iili.io/HNNEwjp.jpg",
          role: "Модератор",
        },
        {
          id: "6",
          role: "Концепт-художник",
          name: { en: "Kristin Watson", ru: "Кристин Уотсон", cn: "克里斯汀·沃森" },
          avatar: "https://iili.io/HNNEwjp.jpg",
          coveringLetter:
            "Добрый день! Меня зовут Кристин Уотсон, я бы хотела предложить свою кандидатуру в качестве Концепт-художника в Ваш проект.",
        },
        {
          name: {
            en: "Vladimir Pushkarev",
            cn: "弗拉基米爾·普什卡廖夫",
            ru: "Владимир Пушкарёв",
          },
          role: "CGI",
          coveringLetter:
            "Добрый день! Меня зовут Владимир Пушкарёв, я бы хотел предложить свою кандидатуру в качестве CGI в Ваш проект.",
          id: "7",
          avatar: "https://iili.io/HNNEwjp.jpg",
        },
        {
          id: "8",
          coveringLetter:
            "Добрый день! Меня зовут Альберт Флорес, я бы хотел предложить свою кандидатуру в качестве Оператора в Ваш проект.",
          name: { en: "Albert Flores", cn: "阿爾伯特弗洛雷斯", ru: "Альберт Флорес" },
          role: "Оператор",
          avatar: "https://iili.io/HNNEwjp.jpg",
        },
      ]
    }
    await setDoc(doc(db, "projects", "12"), docData, { merge: true })
    res.status(200).send("ok")
  } catch (error) {
    res.status(400).send(error.message)
  }
}
module.exports = {
  getAllProjects,
  setRequestForProject
}