import { Facebook, Instagram, Linkin, Menu, Twitter } from '@components/icons'
import { Container } from '@components/ui'
import Link from '@components/ui/Link'
import React from 'react'
function Header() {
  return <header role="banner" className="z-40 relative">
    <nav className="bg-black text-white lg:bg-transparent group">
      <Container fluid className="container mx-auto flex flex-wrap justify-between py-3 lg:space-x-6 lg:h-header text-white">
        <Link className="font-heading  py-2 text-2xl tracking-[.2em] flex items-center uppercase" href="index.html">Innova</Link>
        <button className="lg:hidden text-4xl" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
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
      </Container>
    </nav>
  </header>
}
function Footer() {
  return <footer className="text-black" role="contentinfo">
    <Container className="py-28 flex flex-col space-y-12">
      <div className="lg:grid gap-12 grid-cols-12">
        <div className="col-span-4 mb-12">
          <h3 className="mb-4 font-heading font-bold">About Us</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nihil numquam aspernatur
            inventore sint eligendi nostrum!</p>
        </div>
        <div className="mx-auto col-span-5 mb-12">
          <h3 className="mb-4 font-heading font-bold">Navigation</h3>
          <ul className="list-unstyled space-y-3">
            <li><a className="underline" href="#">About</a></li>
            <li><a className="underline" href="#">Services</a></li>
            <li><a className="underline" href="#">Portfolio</a></li>
            <li><a className="underline" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-span-2 flex  mb-12">
          <ul className="list-unstyled flex w-full space-x-3 items-baseline">
            <li><a href="#" className="p-2 flex items-center">
              <Twitter />
            </a></li>
            <li><a href="#" className="p-2 flex items-center">
              <Facebook />
            </a></li>
            <li><a href="#" className="p-2 flex items-center">
              <Linkin />
            </a></li>
            <li><a href="#" className="p-2 flex items-center">
              <Instagram />
            </a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="text-left md:text-center">
          <p>
            Copyright ©2021 All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
        </div>
      </div>
    </Container>
  </footer>

}
function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main className="min-h-fit">{children}</main>
      <Footer>
      </Footer>
    </div>
  )
}

export default Layout
