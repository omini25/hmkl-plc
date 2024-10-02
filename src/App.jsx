import {Header} from "./components/Header.jsx";
import {Section1} from "./components/Section1.jsx";
import {Hero} from "./components/Hero.jsx";
import {BrandLogo} from "./components/BrandLogo.jsx";
import {Blog} from "./components/Blog.jsx";
import {Footer} from "./components/Footer.jsx";
import {Section2} from "./components/Section2.jsx";
import {Section3} from "./components/Section3.jsx";


function App() {

  return (
    <>
      <Header />
        <Hero />
        <BrandLogo />
        <div className="bg-gray-100 ">
            <Section1 />
            <Section2 />
        </div>
        <Section3 />
        <Blog />
        <Footer />


    </>
  )
}

export default App
