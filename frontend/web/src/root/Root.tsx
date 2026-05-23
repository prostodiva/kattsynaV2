import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

function Root() {
  return (
     <div className="min-h-full flex flex-col">
      <Header />
      <main className="grow overflow-hidden" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


export default Root;