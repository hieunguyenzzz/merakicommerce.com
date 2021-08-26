import { useGetDataApp } from '@components/app/context'
import Container from '@components/common/Container'
import Image from '@components/common/Image'
import Layout from '@components/common/Layout'
import Link from '@components/common/Link'
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
                    title: get('current.name'),
                }} >
                    <p style={{ animationDelay: '500ms' }} className="custom-breadcrumbs aos-init aos-animate text-lg animate__animated animate__fadeInUp " data-aos="fade-up" data-aos-delay="100">
                        <Link href="/" className="underline">Home</Link> <span className="mx-3">/</span> {get('current.name')}</p>
                </Hero>
            </section>
            <section className="section">
                <Container className="py-28">
                    <div className="flex flex-col md:flex-row md:space-x-28">
                        <div className="md:w-7/12 mb-10 md:mb-0 space-y-8">
                            {
                                get('current.images', []).map((image, i) => (
                                    <div key={i} >
                                        <Image width={image.width} height={image.height} provider="strapi" image={image} layout="responsive" className="object-cover" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex-1 ml-auto mb-5 flex flex-col">
                            <h2 className="font-thin text-3xl font-heading mb-10">{get('current.name')}</h2>
                            <div className="whitespace-pre-line mb-5" dangerouslySetInnerHTML={{ __html: get('current.detail') }} ></div>
                            <div className="mt-10">
                                <a target="_blank" href={get('current.website')} className="border-2 border-black font-bold text-black truncate text-center uppercase px-5 py-3 hover:text-white hover:bg-black transition-colors">Visit Website</a>
                            </div>
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

export default Portfolio
