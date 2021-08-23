
import Index from '@templates/index';

export default Index

export async function getStaticProps(config) {
  return {
    props: {

    },
    revalidate: 300
  }
}
