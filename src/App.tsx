import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Global } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Global />
    </>
  );
}

export default App;
