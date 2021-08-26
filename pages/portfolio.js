
import Portfolio from '@templates/Portfolio';

export default Portfolio

export async function getStaticProps(config) {
  const global = await fetch('https://strapi.merakicommerce.com/global').then(res => res.json())
  const homepage = await fetch('https://strapi.merakicommerce.com/homepage').then(res => res.json())
  const portfolio = await fetch('https://strapi.merakicommerce.com/portfolio').then(res => res.json())
  return {
    props: {
      global,
      homepage,
      portfolio,
      current: {
        ...global,
        ...homepage,
        ...portfolio
      }
    },
    revalidate: false
  }
}
