
import Footer from "@/shared/components/layout/footer/Footer";
import Header from "@/shared/components/layout/navbar/Header";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className='flex flex-col min-h-screen overflow-hidden  text-black '>
      <Header />
      <main className='flex-1'>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
