import { useGetDataApp } from '@components/app/context'
import Image from '@components/common/Image'
import Layout from '@components/common/Layout'
import { Container } from '@components/ui'
import Link from '@components/ui/Link'
import { Hero } from '@sections/Hero'
import { Slider } from "@sections/Slider"
import "keen-slider/keen-slider.min.css"
import React from 'react'
function Portfolio() {
  const get = useGetDataApp()
  return (
    <Layout >
      <section >
        <Hero {...{
          banner: get('current.banner', get('global.banner')),
          title: get('current.hero_title')
        }} >
          <p style={{ animationDelay: '500ms' }} className="custom-breadcrumbs aos-init aos-animate text-lg animate__animated animate__fadeInUp " data-aos="fade-up" data-aos-delay="100">
            <Link href="/" className="underline">Home</Link> <span className="mx-3">/</span> Portfolio</p>
        </Hero>
      </section>
      <section>
        <Container className="py-28 space-y-8 flex  flex-col items-center text-center">
          <h2 className="text-4xl font-semibold font-heading">{get('homepage.feature_project_heading', 'Selected Work')}</h2>
          <p className="max-w-prose">{get('homepage.feature_project_body', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus perferendis libero accusantium nisi.')}</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
            {
              get('homepage.feature_projects', []).map((item, i) => {
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
    </Layout>
  )
}

export default Portfolio
