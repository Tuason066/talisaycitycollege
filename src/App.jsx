import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* context */
import { useGlobalContext } from './context';
/* animations */
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
/* components */
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Contacts from './pages/Contacts';
import Developers from './pages/Developers';
import Home from './pages/Home';
import Login from './pages/Login';
import PreviewNews from './components/PreviewNews';
import LatestNewsAndUpdates from './pages/LatestNewsAndUpdates';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Courses from './pages/Courses';

export function App() {
  const { isPreview } = useGlobalContext();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* home */}
          <Route path='/' element={<Home />} />
          {/* about */}
          <Route path='/about' element={<About />} />
          {/* courses */}
          <Route path='/courses' element={<Courses />} />
          {/* contacts */}
          <Route path='/contacts' element={<Contacts />} />
          {/* login */}
          <Route path='/login' element={<Login />} />
          {/* developers */}
          <Route path='/developers' element={<Developers />} />
          {/* news */}
          <Route path='/news' element={<LatestNewsAndUpdates />} />
          {/* not found */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* footer */}
        <Footer />
        {/* floating components */}
        {isPreview.state && <PreviewNews {...isPreview} />}
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
