import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header"
import { About } from "./components/about/About";
import { Experience } from "./components/experience/Experience";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
