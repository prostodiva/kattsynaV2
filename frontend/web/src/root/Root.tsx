import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import ScrollToTop from '../components/ScrollToTop.tsx';

function Root() {
  return (
    <div className="min-h-dvh flex flex-col bg-surface-page text-text-primary">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-sm focus:bg-surface-yellow focus:px-4 focus:py-2 focus:font-goorm focus:text-text-ternary"
      >
        Skip to main content
      </a>
      <Header />
      <main className="grow overflow-hidden" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
