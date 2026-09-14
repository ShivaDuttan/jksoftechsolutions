import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollRestoration } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-[#F7FAFF]">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
}
