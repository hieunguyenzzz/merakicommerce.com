import { AppProvider } from '@components/app/context';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  // const { isReady, isPreview } = useRouter()
  // if ( Component.builderFormConfig) {
  //   const C = withBuilderForm(Component.builderFormConfig)(Component)
  //   return <C {...pageProps} />
  // }
  return <AppProvider data={pageProps}>
    <Component {...pageProps} />
  </AppProvider>
}


export default MyApp
