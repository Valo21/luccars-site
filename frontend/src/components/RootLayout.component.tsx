import { Outlet } from "react-router-dom";
import Header from "./Header.component";
import Footer from "./Footer.component";
import { useState } from "react";

export default function RootLayout() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <main className='flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
