import express from "express"
import http from "http"
import bodyParser from "body-parser"
import yaml from "node-yaml-config"
import path from "path"

import Manager from "./controller/manager"

const port = 8081
const env = process.env.NODE_ENV

const initApp = () => {
  const app = express()
  app.use(express.static(path.join(__dirname, "config.yml")))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json({ type: "*/*" }))
  if (env === "production") {
    app.use(express.static(path.join(__dirname, "..", "..", "build")))
    app.get("*", (req, res) =>
      res.sendFile(path.join(__dirname, "..", "..", "build/index.html"))
    )
  }
  return http.createServer(app)
}

const initEngine = io => {
  let manager = new Manager(io)
}

const wrapIOApp = server => {
  const io = require("socket.io")(server)
  return io
}

export const initServer = () => {
  const server = initApp()
  const io = wrapIOApp(server)
  server.listen(port, () => {
    initEngine(io)
    console.log("Server is running on localhost:" + port)
  })
}
