import HeaderSection from "./components/HeaderSection";
import DataSection from "./components/DataSection";
import CapabilitySection from "./components/CapabilitySection";
import Navbar from "./components/Navbar";
import BestSection from "./components/BestSection";
import CategorySection from "./components/CategorySection";
import NewsLetterSection from "./components/NewsletterSection";
import FooterSection from "./components/FooterSection";
import AllProductSection from "./components/AllProductSection";
import TestimonySection from "./components/TestimonySection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeaderSection />
        <DataSection />
        <CapabilitySection />
        <CategorySection />
        <BestSection />
        <AllProductSection />
        <TestimonySection />
        <NewsLetterSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
