import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import OurGallery from "@/scenes/ourGallery";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer"
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY != 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // When component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <OurGallery setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
