import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* context */
import { useGlobalContext } from './context';
/* components */
import Footer from './GlobalComponents/Footer';
import Navbar from './components/Navbar';
import PageNotFound from './GlobalComponents/PageNotFound';
import Contacts from './pages/Contacts';
import Developers from './pages/Developers';
import Home from './pages/Home';
import Login from './pages/Login';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Goals from './pages/Goals';
import CoreValues from './pages/CoreValues';
import History from './pages/History';
import Beed from './pages/Beed';
import Bsed from './pages/Bsed';
import Bshm from './pages/Bshm';
import Bsit from './pages/Bsit';
import SpecialProgram from './pages/SpecialProgram';
import PreviewNews from './components/PreviewNews';

export function App() {
  const { isPreview } = useGlobalContext();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about'>
            <Route path='vision' element={<Vision />} />
            <Route path='mission' element={<Mission />} />
            <Route path='goals' element={<Goals />} />
            <Route path='core-values' element={<CoreValues />} />
            <Route path='history' element={<History />} />
          </Route>
          <Route path='courses'>
            <Route path='beed' element={<Beed />} />
            <Route path='bsed' element={<Bsed />} />
            <Route path='bshm' element={<Bshm />} />
            <Route path='bsit' element={<Bsit />} />
            <Route path='dpe' element={<SpecialProgram />} />
          </Route>
          <Route path='contacts' element={<Contacts />} />
          <Route path='login' element={<Login />} />
          <Route path='developers' element={<Developers />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
        {isPreview.state && <PreviewNews {...isPreview} />}
      </BrowserRouter>
    </>
  );
}

export default App;
