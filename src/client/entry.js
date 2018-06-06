import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { HashRouter as Router } from "react-router-dom"

import store from "./store/initStore"
import App from "./components/App"

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

render(App)

if (module.hot) {
  module.hot.accept()
}

if (process.env.NODE_ENV !== "production") {
  console.log("[entry.js] Looks like we are in development mode!")
} else {
  console.log("[entry.js] Looks like we are in prod mode!")
}
