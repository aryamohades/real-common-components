import Head from 'next/head';
import { loadIcons } from '../../util/font-awesome';
import GlobalStyle from './styles';

loadIcons();

const Page = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <GlobalStyle />
    {children}
  </>
);

export default Page;
