import { useGetDataApp } from '@components/app/context'
import Container from '@components/common/Container'
import Layout from '@components/common/Layout'
import Link from '@components/common/Link'
import { Featered } from "@sections/Featered"
import { Hero } from '@sections/Hero'
import { Slider } from "@sections/Slider"
import "keen-slider/keen-slider.min.css"
import React from 'react'
function Services() {
  const get = useGetDataApp()
  return (
    <Layout >
      <section >
        <Hero {...{
          banner: get('current.banner', get('global.banner')),
          title: get('current.hero_title')
        }} >
          <p style={{ animationDelay: '500ms' }} className="custom-breadcrumbs aos-init aos-animate text-lg animate__animated animate__fadeInUp " data-aos="fade-up" data-aos-delay="100">
            <Link href="/" className="underline">Home</Link> <span className="mx-3">/</span> Services</p>
        </Hero>
      </section>
      <section >
        <Container className="container px-5 py-28 mx-auto">
          <Featered column={3} {...{
            services: get('current.Services.service_item')
          }} />
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

export default Services
