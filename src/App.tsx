import "./App.css";
import Header from "./components/Header/Header";
import PageInfo from "./components/PageInfo/PageInfo";
import Sketch from "./components/Sketch/Sketch";

function App() {
  return (
    <div id="container">
    <div className="background">
      <Sketch />
    </div>
    
    <div className="foreground">
      <Header />
      <PageInfo />
    </div>
  </div>
  );
}

export default App;
