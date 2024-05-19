import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="josefin-sans-font">
      <h1 className="page_title">SpaceX Launches</h1>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
