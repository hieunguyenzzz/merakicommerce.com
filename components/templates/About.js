import { useGetDataApp } from '@components/app/context'
import Container from '@components/common/Container'
import Image from '@components/common/Image'
import Layout from '@components/common/Layout'
import Link from '@components/common/Link'
import { Hero } from '@sections/Hero'
import { Slider } from "@sections/Slider"
import { Team } from '@sections/Team'
import "keen-slider/keen-slider.min.css"
import React from 'react'
function About() {
  const get = useGetDataApp()
  return (
    <Layout >
      <section >
        <Hero {...{
          banner: get('current.banner', get('global.banner')),
          title: get('current.hero_title')
        }} >
          <p style={{ animationDelay: '500ms' }} className="custom-breadcrumbs aos-init aos-animate text-lg animate__animated animate__fadeInUp " data-aos="fade-up" data-aos-delay="100"><Link href="/" className="underline">Home</Link> <span className="mx-3">/</span> About</p>
        </Hero>
      </section>
      <section className="section">
        <Container className="py-28">
          <div className="flex flex-col md:items-center md:flex-row md:space-x-20 md:space-x-reverse">
            <div className="flex-1 md:mb-0 md:order-1  py-12 md:px-12">
              <div className="relative">
                <div className="absolute -top-14 h-[400px] -left-14 w-52 z-[-1]">
                  <Image className="object-cover" />
                </div>
                <Image width="450" height="300" provider="strapi" image={get('current.about_us_media[0]')} layout="responsive" className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/5 ml-auto mb-5 flex flex-col justify-center">
              <h2 className="font-thin text-3xl font-heading mb-10">{get('current.about_us_heading')}</h2>
              <p className="whitespace-pre-line">{get('current.about_us_body')}</p>
            </div>
          </div>
        </Container>
      </section>
      <section >
        <Container className="container px-5 py-28 mx-auto">
          <Team {...{
            members: get('current.leadership.member')
          }} />
        </Container>
      </section>
      <section className="section">
        <Container className="py-28">
          <div className="flex flex-col md:items-center md:flex-row md:space-x-14">
            <div className="flex-1 md:mb-0  py-12 md:px-12">
              <div className="relative">
                <div className="absolute -top-14 h-[400px] -left-14 w-52 z-[-1]">
                  <Image className="object-cover" />
                </div>
                <Image width="450" height="300" provider="strapi" image={get('current.about_us_media[0]')} layout="responsive" className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/5 ml-auto mb-5 flex flex-col justify-center">
              <h2 className="font-thin text-3xl font-heading mb-10">{get('current.about_us_heading')}</h2>
              <p className="whitespace-pre-line">{get('current.about_us_body')}</p>
            </div>
          </div>
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

export default About
