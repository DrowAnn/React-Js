import { Provider } from "react-redux";
import "./App.css";
import AppRouting from "./components/Routing/Routing";
import Store from "./components/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <AppRouting />
      </Provider>
    </>
  );
}

export default App;
