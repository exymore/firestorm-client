import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
