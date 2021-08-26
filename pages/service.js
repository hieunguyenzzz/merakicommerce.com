
import Services from '@templates/Services';

export default Services

export async function getStaticProps(config) {
  const global = await fetch(process.env.API_URL + '/global').then(res => res.json())
  const services = await fetch(process.env.API_URL + '/services').then(res => res.json())
  const homepage = await fetch(process.env.API_URL + '/homepage').then(res => res.json())
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
