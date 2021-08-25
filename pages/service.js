
import Services from '@templates/Services';

export default Services

export async function getStaticProps(config) {
  const global = await fetch('https://strapi.merakicommerce.com/global').then(res => res.json())
  const services = await fetch('https://strapi.merakicommerce.com/services').then(res => res.json())
  const homepage = await fetch('https://strapi.merakicommerce.com/homepage').then(res => res.json())
  return {
    props: {
      global,
      services,
      homepage,
      current: services
    },
    revalidate: false
  }
}
