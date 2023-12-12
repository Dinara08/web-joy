import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")!
);
