import { useGetDataApp } from '@components/app/context'
import Image from '@components/common/Image'
import Layout from '@components/common/Layout'
import { Container } from '@components/ui'
import { Featered } from "@sections/Featered"
import { Hero } from '@sections/Hero'
import { Slider } from "@sections/Slider"
import "keen-slider/keen-slider.min.css"
import React from 'react'
function Index() {
  const get = useGetDataApp()
  return (
    <Layout >
      <section >
        <Hero {...{
          banner: get('current.banner', get('global.banner')),
          title: get('current.hero_title')
        }} />
      </section>
      <section >
        <Container className="container px-5 py-28 mx-auto">
          <Featered {...{
            services: get('current.services.service_item')
          }} />
        </Container>
      </section>
      <section>
        <Container className="py-28 space-y-8 flex  flex-col items-center text-center">
          <h2 className="text-4xl font-semibold font-heading">{get('current.feature_project_heading', 'Selected Work')}</h2>
          <p className="max-w-prose">{get('current.feature_project_body', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus perferendis libero accusantium nisi.')}</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
            {
              get('current.feature_projects', []).map((item, i) => {
                return <a key={i} href="#" className="w-full h-[400px] relative group">
                  <Image provider="strapi" image={item.thumbnail} className="brightness-50 lg:brightness-100 lg:group-hover:brightness-50 transition-all z-[-1] object-cover" />
                  <div className="h-full flex justify-center items-center flex-col lg:opacity-0 lg:m-6 transition-all group-hover:opacity-100 group-hover:mt-0 duration-500">
                    <h3 className="text-2xl font-heading mb-2 text-white">{item.name}</h3>
                    <p className="text-white text-opacity-50">{item.detail}</p>
                  </div>
                </a>
              })
            }
          </div>
        </Container>
      </section>
      <section className="bg-gray-100">
        <Container className="py-28 space-y-8 flex  flex-col items-center ">
          <h2 className="text-4xl font-semibold font-heading text-center">Happy Client</h2>
          <Slider {...{
            items: get('current.happy_clients.client', [])
          }} />
        </Container>
      </section>
      <section className="section">
        <Container className="py-28">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="flex-1 mb-10 md:mb-0">
              <div className="img-dotted-bg">
                <Image width="540" height="682" provider="strapi" image={get('current.about_us.big_image')} layout="responsive" className="object-cover" />
              </div>
            </div>
            <div className="flex-1 ml-auto mb-5 flex flex-col">
              <Image width="531" height="265" provider="strapi" image={get('current.about_us.small_image')} layout="responsive" className="object-cover" />
              <span className="block mt-10 uppercase text-primary">About US</span>
              <h2 className="font-thin text-3xl font-heading mb-10">Creative We Grow</h2>
              <p className="mb-5">{get('current.about_us.about_us')}</p>
              <div className="flex-1" />
              <p className="mt-10"><a href="/about_us" className="border-2 border-black font-bold text-black truncate text-center uppercase px-5 py-3 hover:text-white hover:bg-black transition-colors">Learn More</a></p>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-primary py-5">
        <Container className="container text-center py-12">
          <div className="flex justify-center">
            <div className="max-w-prose ">
              <h3 className="text-white text-3xl font-heading mb-2">Get Started</h3>
              <div className="text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="block" >
                <a href="/contact" className="inline-block border-2 bg-transparent hover:border-white hover:bg-white font-bold hover:text-black truncate text-center uppercase px-8 py-3 text-white bg-black transition-colors">Get In Touch!</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Index
