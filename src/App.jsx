import HeaderSection from "./components/HeaderSection";
import DataSection from "./components/DataSection";
import CapabilitySection from "./components/CapabilitySection";
import Navbar from "./components/Navbar";
import BestSection from "./components/BestSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeaderSection />
        <DataSection />
        <CapabilitySection />
        {/* Categories */}
        <BestSection />
      </main>
    </>
  );
}

export default App;
