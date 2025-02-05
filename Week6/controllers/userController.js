const jwt = require("jsonwebtoken")
const users = []

const SECRET_KEY = process.env.JWT_SECRET
const signup = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.json({ status: 400, message: "Enter Credentials" })
  }

  users.push({ username, password })
  return res.json({ status: 200, message: "Welcome" })
}

const signin = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.send({ status: 400, message: "Enter Credentials" })
  }
  const user = users.find(
    (u) => u.username === username && u.password === password,
  )

  if (user) {
    const token = jwt.sign({ username: username }, SECRET_KEY)
    return res.json({ token, message: "Logged in" })
  }
}

const getMyInfo = async (req, res) => {
  const token = req.headers.token
  if (!token) {
    return res.json({ message: "Unauthorized Access" })
  } else {
    const decodedInformation = jwt.verify(token, SECRET_KEY)
    const username = decodedInformation.username
    return res.json({
      message: `Hello ${username}`,
    })
  }
}
module.exports = { signin, signup, getMyInfo }
