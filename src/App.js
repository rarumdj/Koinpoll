import "./App.css";
import CommunityBanner from "./containers/CommunityBanner";
import Footer from "./containers/Footer";
import HeaderSection from "./containers/HeaderSection";
import Navbar from "./containers/Navbar";
import VoteBanner from "./containers/VoteBanner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="">
        <HeaderSection />
        <VoteBanner />
        <CommunityBanner />
        <Footer />
      </main>
    </div>
  );
}

export default App;
