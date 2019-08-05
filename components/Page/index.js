import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BaseStyle } from './styles';

// @TODO: learn the correct place to do these setup tasks
library.add(faCheck, faCoffee);

const Page = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <BaseStyle />
    {children}
  </>
);

export default Page;
