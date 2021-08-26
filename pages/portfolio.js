
import Portfolio from '@templates/Portfolio';

export default Portfolio

export async function getStaticProps(config) {
  const global = await fetch(process.env.API_URL + '/global').then(res => res.json())
  const homepage = await fetch(process.env.API_URL + '/homepage').then(res => res.json())
  const portfolio = await fetch(process.env.API_URL + '/portfolio').then(res => res.json())
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
