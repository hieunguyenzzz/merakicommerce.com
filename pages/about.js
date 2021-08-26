
import About from '@templates/About';

export default About

export async function getStaticProps(config) {
  const global = await fetch('https://strapi.merakicommerce.com/global').then(res => res.json())
  const about = await fetch('https://strapi.merakicommerce.com/about-us').then(res => res.json())
  const homepage = await fetch('https://strapi.merakicommerce.com/homepage').then(res => res.json())
  return {
    props: {
      global,
      about,
      homepage,
      current: about
    },
    revalidate: false
  }
}
