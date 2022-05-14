import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div
      className="App w-full font-beVietnam text-secondary flex flex-col items-center justify-start
      overflow-x-hidden"
    >
      <div className="w-full">
        <Main />
        <Services />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
