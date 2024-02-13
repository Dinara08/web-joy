import { render } from "react";
import { App } from "./app.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { BrowserRouter } from "react-router-dom";

render(
 <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
 </BrowserRouter>,
  document.getElementById("app")!
);
