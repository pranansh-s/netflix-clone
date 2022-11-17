import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen">
      <Navbar/>
      <Header/>
      <div className="h-40 -mt-40 z-10 relative bg-gradient-to-b from-transparent to-primary"/>
      <div className="h-screen bg-primary"></div>
      <Footer/>
    </div>
  );
}

export default App;
