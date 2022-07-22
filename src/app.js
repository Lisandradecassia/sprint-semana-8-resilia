import express from "express";
import controllerDicas from './controllers/controller.js';

const app = express()
const port = 3000

app.use(express.json())
controllerDicas(app)

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})