import "./App.css";
import Header from "./components/header/Header.tsx";
import TrustBar from "./components/trustBar/TrustBar.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <div className="w-full h-full">
      {/* header part  */}
      <Header />

      {/*  middle part   */}
      <TrustBar />

      {/*  footer part   */}
      <Footer />
    </div>
  );
}

export default App;
