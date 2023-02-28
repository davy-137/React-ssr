import path from 'path'
import express from 'express'

const PORT = 8080
const app = express()

const router = express.Router()

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use(router)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})