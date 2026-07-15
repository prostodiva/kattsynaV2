import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import ScrollToTop from '../components/ScrollToTop.tsx';

function Root() {
  return (
    <div className="min-h-dvh flex flex-col bg-surface-page text-text-primary">
      <ScrollToTop />
      <Header />
      <main className="grow overflow-hidden" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
