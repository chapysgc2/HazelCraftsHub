import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "hazel/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <>
        <Head>
          <title>Hazel Alain García López - Desarrollador iOS</title>
          <meta
              name="description"
              content="Página profesional de Hazel Alain García López, desarrollador iOS e inversor en criptomonedas."
          />
          <meta
              name="keywords"
              content="Hazel Alain García López, iOS Developer, Swift, Criptomonedas, Grupo Salinas"
          />
          <meta name="author" content="Hazel Alain García López" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>
  );
};

export default MyApp;
