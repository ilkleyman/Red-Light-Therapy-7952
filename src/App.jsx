import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsRedLight from './components/WhatIsRedLight';
import TherapyBenefits from './components/TherapyBenefits';
import Categories from './components/Categories';
import Bestsellers from './components/Bestsellers';
import ScienceFacts from './components/ScienceFacts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import TherapyGuide from './pages/TherapyGuide';
import Benefits from './pages/Benefits';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Admin Routes - These will work with HashRouter */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          
          {/* Public Routes with Layout */}
          <Route path="/" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Hero />
                <WhatIsRedLight />
                <TherapyBenefits />
                <Categories />
                <Bestsellers />
                <ScienceFacts />
                <Testimonials />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/shop" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Shop />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/product/:id" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <ProductDetail />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/cart" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Cart />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/checkout" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Checkout />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/about" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <About />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/contact" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Contact />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/therapy-guide" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <TherapyGuide />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
          
          <Route path="/benefits" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Benefits />
              </main>
              <Footer />
              <Chatbot />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;