import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Containers
import Connection from "../containers/Connection"

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Connection} />
    </div>
  </Router>
)

export default AppRouter
