import Conact from '@templates/Contact';

export default Conact

export async function getStaticProps(config) {
    const global = await fetch(process.env.API_URL + '/global').then(res => res.json())
    const homepage = await fetch(process.env.API_URL + '/homepage').then(res => res.json())
    return {
        props: {
            global,
            homepage,
            current: homepage
        },
        revalidate: false
    }
}
