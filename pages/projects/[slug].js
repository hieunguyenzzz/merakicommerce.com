import ProjectDetail from '@templates/ProjectDetail'
export async function getStaticProps(config) {
  const global = await fetch(process.env.API_URL + '/global').then(res => res.json())
  const homepage = await fetch(process.env.API_URL + '/homepage').then(res => res.json())
  const projects = await fetch(process.env.API_URL + '/projects').then(res => res.json())
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
  const projects = await fetch(process.env.API_URL + '/projects').then(res => res.json())
  return {
    paths: projects.map(item => '/projects/' + item.slug),
    fallback: 'blocking',
  }
}

export default ProjectDetail
