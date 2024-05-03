import "./App.css";
import { Provider } from "react-redux";
import Store from "./components/Store/index.js";
import ToDosView from "/src/components/Views/ToDosView.jsx";

function App() {
  return (
    <>
      <Provider store={Store}>
        <ToDosView />
      </Provider>
    </>
  );
}

export default App;
