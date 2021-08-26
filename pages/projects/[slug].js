import ProjectDetail from '@templates/ProjectDetail'
export async function getStaticProps(config) {
  const global = await fetch('https://strapi.merakicommerce.com/global').then(res => res.json())
  const homepage = await fetch('https://strapi.merakicommerce.com/homepage').then(res => res.json())
  const projects = await fetch('https://strapi.merakicommerce.com/projects').then(res => res.json())
  return {
    props: {
      global,
      homepage,
      projects,
      current: {
        ...global,
        ...projects.find(item => item.slug === config.params.slug)
      }
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default ProjectDetail
