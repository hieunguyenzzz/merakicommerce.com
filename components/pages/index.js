
import Index from '@templates/Index';

export default Index

export async function getStaticProps(config) {
  const global = await fetch('https://strapi.merakicommerce.com/global').then(res => res.json())
  const homepage = await fetch('https://strapi.merakicommerce.com/homepage').then(res => res.json())
  return {
    props: {
      global,
      homepage,
      current: homepage
    },
    revalidate: false
  }
}
