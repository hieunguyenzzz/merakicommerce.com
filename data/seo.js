
const url = 'https://merakiweddingplanner.com'
const name = 'Meraki Wedding Planner'
const title = 'Meraki Wedding Planner | Destination Wedding Planner in Vietnam'
const description = `DESTINATION WEDDING IN VIETNAM Meraki [may-rah-kee]: in Greek means doing something with soul, creativity and love; to put something of yourself into your work.`

const defaultSeo = {
  title: title,
  titleTemplate:
    'Meraki Wedding Planner | Destination Wedding Planner in Vietnam | %s',
  description: description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'vi_VN',
    url: 'https://merakiweddingplanner.com',
    site_name: title,
    images: [
      {
        url: 'https://merakiweddingplanner.com/image2.jpg',
        width: 800,
        height: 600,
        alt: title,
      },
    ],
  },
}


export default defaultSeo
