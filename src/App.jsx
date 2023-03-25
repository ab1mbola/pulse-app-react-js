import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

// page components
import Home from './pages/home/Home';
import Features from './pages/features/Features';
import CustomerStories from './pages/customer-stories/CustomerStories';
import Pricing from './pages/pricing/Pricing';
import Blog from './pages/blog/Blog';
import SignUp from './pages/sign-up/SignUp';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home} />

          <Route path="features" Component={Features} />

          <Route path="customer-stories" Component={CustomerStories} />

          <Route path="pricing" Component={Pricing} />

          <Route path="blog" Component={Blog} />

          <Route path="sign-up" Component={SignUp} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
