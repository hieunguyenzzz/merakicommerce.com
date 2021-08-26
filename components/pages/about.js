
import About from '@templates/About';

export default About

export async function getStaticProps(config) {
  const global = await fetch(process.env.API_URL + '/global').then(res => res.json())
  const about = await fetch(process.env.API_URL + '/about-us').then(res => res.json())
  const homepage = await fetch(process.env.API_URL + '/homepage').then(res => res.json())
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
