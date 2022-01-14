import '../styles/globals.css';
import NextApp from 'next/app';
import { request as gqlRequest } from 'graphql-request';
import GET_CATEGORY_BY_URL_ID from '../queries/getProduct.graphql';
import { ProductContextProvider } from '../context';

export default function MyApp({ Component, pageProps, products }) {
  return (
    <ProductContextProvider
      product={products}
    >
      <Component {...pageProps} />
    </ProductContextProvider>
  );
}

 MyApp.getInitialProps = async (appCtx) => {
  const context = appCtx?.ctx;
  const appProps = await NextApp.getInitialProps(appCtx);

  const { GRAPHQL_URL } = process.env;

  const productResp = await gqlRequest(GRAPHQL_URL, GET_CATEGORY_BY_URL_ID);

  const product = productResp?.products?.items;

  return {
    ...appProps,
    products: product || []
  };
 }
