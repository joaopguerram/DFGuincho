import "./App.css";
import About from "./components/About";
import Button from "./components/ButtonFC";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Contact />
      <About />
      <Comments />
      <Button />
      <Services />
      <Button />
      <Footer />
    </>
  );
}

export default App;
