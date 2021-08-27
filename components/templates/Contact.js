import { useGetDataApp } from '@components/app/context'
import { AnimationGroup } from '@components/common/AnimationGroup'
import Container from '@components/common/Container'
import Layout from '@components/common/Layout'
import Link from '@components/common/Link'
import { Location } from '@components/icons'
import { Hero } from '@sections/Hero'
import { Slider } from "@sections/Slider"
import "keen-slider/keen-slider.min.css"
import React from 'react'
function Contact() {
  const get = useGetDataApp()
  return (
    <Layout >
      <section >
        <Hero {...{
          banner: get('current.banner', get('global.banner')),
          title: get('current.hero_title')
        }} >
          <p style={{ animationDelay: '500ms' }} className="custom-breadcrumbs aos-init aos-animate text-lg animate__animated animate__fadeInUp " data-aos="fade-up" data-aos-delay="100">
            <Link href="/" className="underline">Home</Link> <span className="mx-3">/</span> Contact</p>
        </Hero>
      </section>
      <section >
        <Container className="py-28">
          <AnimationGroup className="flex flex-col md:flex-row md:space-x-28">
            {
              getProps => {
                return <>
                  <from {...getProps(0, "md:w-7/12 mb-10 md:mb-0  grid grid-cols-2 gap-8")} >
                    <fieldset className="grid-cols-1 flex flex-col space-y-2">
                      <label>Name</label>
                      <input type='text' className="py-3 px-5 border-2" />
                    </fieldset>
                    <fieldset className="grid-cols-1 flex flex-col space-y-2">
                      <label>Phone</label>
                      <input type='text' className="py-3 px-5 border-2" />
                    </fieldset>
                    <fieldset className="col-span-2 flex flex-col space-y-2">
                      <label>Email</label>
                      <input type='email' className="py-3 px-5 border-2" />
                    </fieldset>
                    <fieldset className="col-span-2 flex flex-col space-y-2">
                      <label>Write Message</label>
                      <textarea rows="5" type='text' className="py-3 px-5 border-2" />
                    </fieldset>
                    <div>

                    </div>

                  </from>

                  <div className="flex-1 ml-auto mb-5 flex flex-col space-y-6">
                    <div  {...getProps(1, "flex items-start space-x-6")} >
                      <div className="text-primary text-icon w-10 h-10 flex justify-center items-center flex-shrink-0"><Location /></div>
                      <div className="text-xl leading-10">34 Street Name, City Name Here, United States</div>
                    </div>
                    <div  {...getProps(2, "flex items-start space-x-6")} >
                      <div className="text-primary text-icon w-10 h-10 flex justify-center items-center flex-shrink-0">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                      </div>
                      <div className="text-xl leading-10">+1 242 4942 290</div>
                    </div>
                    <div  {...getProps(3, "flex items-start space-x-6")} >
                      <div className="text-primary text-icon w-10 h-10 flex justify-center items-center flex-shrink-0">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                      </div>
                      <div className="text-xl leading-10">info@yourdomain.coms</div>
                    </div>
                  </div>
                </>
              }
            }
          </AnimationGroup>
        </Container>
      </section>
      <section className="bg-gray-100">
        <Container className="py-28 space-y-8 flex  flex-col items-center ">
          <h2 className="text-4xl font-semibold font-heading text-center">Happy Client</h2>
          <Slider {...{
            items: get('homepage.happy_clients.client', [])
          }} />
        </Container>
      </section>
    </Layout>
  )
}

export default Contact
