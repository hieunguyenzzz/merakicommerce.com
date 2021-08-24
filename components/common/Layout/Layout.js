import { useGetDataApp } from '@components/app/context'
import { Facebook, Heart, Instagram, Linkin, Menu, Twitter } from '@components/icons'
import { Container } from '@components/ui'
import Link from '@components/ui/Link'
import React from 'react'
function Header() {
  const get = useGetDataApp()
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
            <li className="py-3 uppercase text-[0.9rem] flex tracking-widest hover:text-primary">
              <Link className="flex items-center" href={"/"}>Home</Link>
            </li>
            {
              get('global.menu.link', []).map((item, i) => {
                return <li key={i} className="py-3 uppercase text-[0.9rem] flex tracking-widest hover:text-primary">
                  <Link className="flex items-center" href={item.location || "#"}>{item.title}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </Container>
    </nav>
  </header>
}
function Footer() {
  const get = useGetDataApp()
  return <footer className="text-black" role="contentinfo">
    <Container className="py-28 flex flex-col space-y-12">
      <div className="lg:grid gap-12 grid-cols-12">
        <div className="col-span-4 mb-12">
          <h3 className="mb-4 font-heading font-bold">About Us</h3>
          <p className="mb-5">{get('global.about_us')}</p>
        </div>
        <div className="mx-auto col-span-5 mb-12">
          <h3 className="mb-4 font-heading font-bold">Navigation</h3>
          <ul className="list-unstyled space-y-3">
            {
              get('global.menu.link', []).map((item, i) => {
                return <li key={i}><a className="underline hover:text-primary" href={item.location || "#"}>{item.title}</a></li>
              })
            }
          </ul>
        </div>
        <div className="col-span-2 flex  mb-12">
          <ul className="list-unstyled flex w-full space-x-3 items-baseline">
            <li><a href="#" className="p-2 flex items-center hover:text-primary">
              <Twitter />
            </a></li>
            <li><a href="#" className="p-2 flex items-center hover:text-primary">
              <Facebook />
            </a></li>
            <li><a href="#" className="p-2 flex items-center hover:text-primary">
              <Linkin />
            </a></li>
            <li><a href="#" className="p-2 flex items-center hover:text-primary">
              <Instagram />
            </a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="text-left md:text-center">
          <p>
            Copyright ©2021 All rights reserved | This template is made with <span className="text-pink-400 text-xl"><Heart className="inline" /></span> by <a class="underline" href="https://colorlib.com" target="_blank">Colorlib</a>
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
