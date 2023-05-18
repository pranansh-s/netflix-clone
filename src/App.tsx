import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen">
      <Navbar/>
      <Header/>
      <div className="h-40 w-screen absolute -mt-40 z-10 bg-gradient-to-b from-transparent to-primary"/>
      <div className="top-[91%] absolute z-30"><Carousel title="Action Movies For You" get="ACTION" type="movies"/></div>
      <ul className="flex flex-col bg-primary space-y-6 pt-40">
        <Carousel title="Crime Based Movies" get="CRIME" type="movies"/>
        <Carousel title="Light Hearted Comedies" get="COMEDY" type="tv"/>
        <Carousel title="Real-Life Incidents" get="DOCUMENTARY" type="tv"/>
      </ul>
      <div className="h-1/4 bg-primary"></div>
      <Footer/>
    </div>
  );
}

export default App;
