
import Index from '@templates/Index';

export default Index

export async function getStaticProps(config) {
  return {
    props: {

    },
    revalidate: 300
  }
}
