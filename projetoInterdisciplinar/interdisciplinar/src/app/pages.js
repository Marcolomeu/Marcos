// pages/_app.js
import '../styles/globals.css';
import Header from './componentes/header/Header.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;