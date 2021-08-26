import { AppProvider } from '@components/app/context';
import '../styles/index.css';
// ..

function MyApp({ Component, pageProps }) {
  return <AppProvider data={pageProps}>
    <Component {...pageProps} />
  </AppProvider>
}


export default MyApp
