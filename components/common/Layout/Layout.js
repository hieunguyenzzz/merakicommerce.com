import { Menu } from '@components/icons'
import Link from '@components/ui/Link'
import React from 'react'
function Header() {
  return <header role="banner" className="z-40 relative">
    <nav className="bg-black lg:bg-transparent group">
      <div className="container mx-auto flex flex-wrap justify-between py-3 lg:space-x-6 lg:h-header text-white">
        <Link className="font-heading h-header text-2xl tracking-[.2em] flex items-center uppercase" href="index.html">Innova</Link>
        <button className="lg:hidden text-icon" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <Menu />
        </button>
        <div className="flex  w-full lg:w-auto" id="navbarsExample05" >
          <ul className="flex-col w-full lg:space-x-6 hidden group-hover:flex bg-black 
             lg:bg-transparent lg:relative lg:top-0 lg:flex-row lg:flex">
            <li className="py-3 uppercase text-[0.9rem] flex tracking-widest">
              <Link className="flex items-center" href="index.html">Home</Link>
            </li>
            <li className="py-3 uppercase text-[0.9rem] flex tracking-widest" >
              <Link className="flex items-center" href="about.html">About</Link>
            </li>
            <li className="py-3 uppercase text-[0.9rem] flex tracking-widest" >
              <Link className="flex items-center" href="services.html" aria-expanded="false">Services</Link>
            </li>
            <li className="py-3 uppercase text-[0.9rem] flex tracking-widest" >
              <Link className="flex items-center" href="portfolio.html">Projects</Link>
            </li>
            <li className="py-3 uppercase text-[0.9rem] flex tracking-widest" >
              <Link className="flex items-center" href="contact.html">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
}
function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main className="min-h-fit">{children}</main>
      <footer>
        <div class="h-52"></div>
      </footer>
    </div>
  )
}

export default Layout
