import Image from '@components/common/Image'
import Layout from '@components/common/Layout'
import heroImage from 'assets/images/hero.webp'
import React from 'react'
function Index() {
  return (
    <Layout >
      <section>
        <div class="h-screen -mt-header  relative">
          <Image class="z-[-1] bg-gray-200 brightness-75 object-cover" src={heroImage} />
          <div class="w-full min-h-full container mx-auto flex justify-center items-center">
            <h1 class="text-6xl lg:text-8xl font-bold text-center leading-snug text-white font-heading">
              We are innova we create great stuff.
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
