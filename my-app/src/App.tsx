import "./App.css";
import Header from "./components/header/Header.tsx";
import TrustBar from "./components/trustBar/TrustBar.tsx";

function App() {
  return (
    <div className="w-full h-full">
      {/* header part  */}
      <Header />

      {/*  middle part   */}
      <TrustBar />

      {/*  footer part   */}
    </div>
  );
}

export default App;
