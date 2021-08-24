import Image from '@components/common/Image'
import Layout from '@components/common/Layout'
import { Search } from '@components/icons'
import { Container } from '@components/ui'
import heroImage from 'assets/images/hero.webp'
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import React, { cloneElement, useEffect, useRef, useState } from 'react'

function Index() {
  return (
    <Layout >
      <section >
        {
          (function Hero({ } = {}) {
            const [backgrounHeight, setBackgrounHeight] = useState('100%')
            const containerRef = useRef()
            const backgroundRef = useRef()
            useEffect(() => {
              const handleScroll = (e) => {
                const containerClientRect = containerRef.current.getBoundingClientRect()
                const backgrounHeight = Math.max(Math.min(containerClientRect.height + containerClientRect.top, containerClientRect.height), 0)
                setBackgrounHeight(backgrounHeight + 'px')
              }
              window.addEventListener('scroll', handleScroll);
              return () => {
                window.removeEventListener('scroll', handleScroll);
              }
            }, [])
            return <div
              style={{
                "--backgroundHeight": backgrounHeight
              }}
              ref={containerRef} className="h-screen -mt-header relative  overflow-hidden">
              <div ref={backgroundRef} className='absolute bottom-0 h-[var(--backgroundHeight)] left-0 w-full flex items-center z-[-1]'>
                <div className='relative w-full h-screen'>
                  <Image className="z-[-1] bg-gray-200 brightness-75 object-cover" src={heroImage} />
                </div>
              </div>
              <Container className="w-full min-h-full container mx-auto flex justify-center items-center ">
                <h1 className="text-6xl lg:text-8xl font-bold text-center leading-snug text-white font-heading animate__animated animate__fadeInUp">
                  We are innova we create great stuff.
                </h1>
              </Container>
            </div>
          })()
        }
      </section>
      <section >
        <Container className="container px-5 py-28 mx-auto">
          {
            (function Featered({ } = {}) {
              const [visible, setVisible] = useState()
              const containerRef = useRef()
              useEffect(() => {
                const node = containerRef.current
                if (!node) return
                const handleIntersection = (entries, observer) => {
                  if (!entries[0].isIntersecting)
                    return;

                  observer.unobserve(node);
                  setVisible(true)
                }
                const observer = new IntersectionObserver(handleIntersection, {
                  rootMargin: '0px 0px 0px 0px'
                })
                observer.observe(node);
                return () => {
                  observer.unobserve(node);
                }
              })
              return <div ref={containerRef}>
                <div style={visible ? {
                  "--opacity": "1",
                  "--translate-y": "0px"
                } : {
                  "--opacity": "0",
                  "--translate-y": "80px"
                }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -m-4">
                  <div className=" lg:mb-0 p-4 transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out delay-0">
                    <div className="h-full text-center flex flex-col items-center">
                      <span className="mb-3 text-[70px] text-primary">
                        <Search />
                      </span>
                      <h2 className="text-xl font-heading mb-3">Email Design</h2>
                      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                    </div>
                  </div>
                  <div style={{
                    animationDelay: "200ms"
                  }} className=" lg:mb-0 p-4 transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out delay-100">
                    <div className="h-full text-center flex flex-col items-center">
                      <span className="mb-3 text-[70px] text-primary">
                        <Search />
                      </span>
                      <h2 className="text-xl font-heading mb-3">Email Design</h2>
                      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                    </div>
                  </div>
                  <div style={{
                    animationDelay: "400ms"
                  }} className=" lg:mb-0 p-4 transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out delay-200">
                    <div className="h-full text-center flex flex-col items-center">
                      <span className="mb-3 text-[70px] text-primary">
                        <Search />
                      </span>
                      <h2 className="text-xl font-heading mb-3">Email Design</h2>
                      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                    </div>
                  </div>
                  <div style={{
                    animationDelay: "600ms"
                  }} className=" lg:mb-0 p-4 transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out delay-300">
                    <div className="h-full text-center flex flex-col items-center">
                      <span className="mb-3 text-[70px] text-primary">
                        <Search />
                      </span>
                      <h2 className="text-xl font-heading mb-3">Email Design</h2>
                      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            })()
          }

        </Container>
      </section>
      <section>
        <Container className="py-28 space-y-8 flex  flex-col items-center text-center">
          <h2 className="text-4xl font-semibold font-heading">Selected Work</h2>
          <p className="max-w-prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus perferendis libero accusantium nisi.</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
            <a href="#" className="w-full h-[400px] relative group">
              <Image src={heroImage} className="brightness-50 lg:brightness-100 lg:group-hover:brightness-50 transition-all z-[-1] object-cover" />
              <div className="h-full flex justify-center items-center flex-col lg:opacity-0 lg:m-6 transition-all group-hover:opacity-100 group-hover:mt-0 duration-500">
                <h3 className="text-2xl font-heading mb-2 text-white">Project Name Here</h3>
                <p className="text-white text-opacity-50">Business</p>
              </div>
            </a>
            <a href="#" className="w-full h-[400px] relative group">
              <Image src={heroImage} className="brightness-50 lg:brightness-100 lg:group-hover:brightness-50 transition-all z-[-1] object-cover" />
              <div className="h-full flex justify-center items-center flex-col lg:opacity-0 lg:m-6 transition-all group-hover:opacity-100 group-hover:mt-0 duration-500">
                <h3 className="text-2xl font-heading mb-2 text-white">Project Name Here</h3>
                <p className="text-white text-opacity-50">Business</p>
              </div>
            </a>
            <a href="#" className="w-full h-[400px] relative group">
              <Image src={heroImage} className="brightness-50 lg:brightness-100 lg:group-hover:brightness-50 transition-all z-[-1] object-cover" />
              <div className="h-full flex justify-center items-center flex-col lg:opacity-0 lg:m-6 transition-all group-hover:opacity-100 group-hover:mt-0 duration-500">
                <h3 className="text-2xl font-heading mb-2 text-white">Project Name Here</h3>
                <p className="text-white text-opacity-50">Business</p>
              </div>
            </a>
            <a href="#" className="w-full h-[400px] relative group">
              <Image src={heroImage} className="brightness-50 lg:brightness-100 lg:group-hover:brightness-50 transition-all z-[-1] object-cover" />
              <div className="h-full flex justify-center items-center flex-col lg:opacity-0 lg:m-6 transition-all group-hover:opacity-100 group-hover:mt-0 duration-500">
                <h3 className="text-2xl font-heading mb-2 text-white">Project Name Here</h3>
                <p className="text-white text-opacity-50">Business</p>
              </div>
            </a>
          </div>
        </Container>
      </section>
      <section className="bg-gray-100">
        <Container className="py-28 space-y-8 flex  flex-col items-center ">
          <h2 className="text-4xl font-semibold font-heading text-center">Selected Work</h2>
          {
            (
              function Slider() {
                const [currentSlide, setCurrentSlide] = React.useState(0)
                const [pause, setPause] = React.useState(false)
                const timer = React.useRef()
                const [sliderRef, slider] = useKeenSlider({
                  spacing: 10,
                  duration: 2000,
                  slidesPerView: 1,
                  loop: true,
                  breakpoints: {
                    "(min-width: 768px)": {
                      slidesPerView: 2,
                    },
                  },
                  slideChanged(s) {
                    setCurrentSlide(s.details().relativeSlide)
                  },
                })
                React.useEffect(() => {
                  sliderRef.current.addEventListener("mouseover", () => {
                    setPause(true)
                  })
                  sliderRef.current.addEventListener("mouseout", () => {
                    setPause(false)
                  })
                }, [sliderRef])

                React.useEffect(() => {
                  timer.current = setInterval(() => {
                    if (!pause && slider) {
                      slider.next()
                    }
                  }, 2000)
                  return () => {
                    clearInterval(timer.current)
                  }
                }, [pause, slider])
                return (
                  <>
                    <style>
                      {
                        `
                      [class^="number-slide"],
                      [class*=" number-slide"] {
                        background: grey;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 50px;
                        color: #fff;
                        font-weight: 500;
                        height: 300px;
                        max-height: 100vh;
                      }

                      .number-slide1 {
                        background: rgb(64, 175, 255);
                        background: linear-gradient(
                          128deg,
                          rgba(64, 175, 255, 1) 0%,
                          rgba(63, 97, 255, 1) 100%
                        );
                      }

                      .number-slide2 {
                        background: rgb(255, 75, 64);
                        background: linear-gradient(
                          128deg,
                          rgba(255, 154, 63, 1) 0%,
                          rgba(255, 75, 64, 1) 100%
                        );
                      }

                      .number-slide3 {
                        background: rgb(182, 255, 64);
                        background: linear-gradient(
                          128deg,
                          rgba(182, 255, 64, 1) 0%,
                          rgba(63, 255, 71, 1) 100%
                        );
                        background: linear-gradient(
                          128deg,
                          rgba(189, 255, 83, 1) 0%,
                          rgba(43, 250, 82, 1) 100%
                        );
                      }

                      .number-slide4 {
                        background: rgb(64, 255, 242);
                        background: linear-gradient(
                          128deg,
                          rgba(64, 255, 242, 1) 0%,
                          rgba(63, 188, 255, 1) 100%
                        );
                      }

                      .number-slide5 {
                        background: rgb(255, 64, 156);
                        background: linear-gradient(
                          128deg,
                          rgba(255, 64, 156, 1) 0%,
                          rgba(255, 63, 63, 1) 100%
                        );
                      }
                      .number-slide6 {
                        background: rgb(64, 76, 255);
                        background: linear-gradient(
                          128deg,
                          rgba(64, 76, 255, 1) 0%,
                          rgba(174, 63, 255, 1) 100%
                        );
                      }
                      `
                      }
                    </style>
                    <div ref={sliderRef} className="keen-slider w-full py-12 relative">
                      {
                        new Array(5).fill(
                          <div className="keen-slider__slide p-3">
                            <div className="flex flex-col space-y-6">
                              <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                                  <Image className="" src={heroImage} />
                                </div>
                                <div className="">
                                  <h3 className="font-heading text-lg">Craig Darren</h3>
                                  <span className="meta">Customer Corp.</span>
                                </div>
                              </div>
                              <div className="text">
                                <blockquote>
                                  <p>” Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ut enim error molestias maxime
                                    deserunt voluptate doloribus nihil nesciunt id perferendis, doloremque earum architecto ab incidunt
                                    sunt
                                    corrupti. Consequuntur qui ullam voluptates sapiente quod esse eum. “</p>
                                </blockquote>
                              </div>
                            </div>
                          </div>
                        ).map((item, i) => cloneElement(item, {
                          key: i,
                          ...item.props
                        }))
                      }

                    </div>
                    {slider && (
                      <div className="flex justify-center left-0 w-full ">
                        {[...Array(slider.details().size).keys()].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                slider.moveToSlideRelative(idx)
                              }}
                              className={"p-2" + (currentSlide === idx ? " text-primary" : " text-gray-200")}
                            >
                              <div className="w-2 h-2 bg-current rounded-full transition-all"></div>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </>
                )
              })()
          }
        </Container>
      </section>
    </Layout>
  )
}

export default Index
