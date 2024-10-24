import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Hero from "./Pages/Hero"
import About from './Pages/About';
import Services from './Pages/Services';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Whatsapp from './Components/Whatsapp/whatsapp';
import TermsAndCondition from "./Pages/TermsAndCondition"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Whatsapp/>
       <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path='/about' element={<About/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/termsandcondition" element={<TermsAndCondition/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
