// pages/_app.tsx

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '../contexts/UserContext';
import { TreeProvider } from '../contexts/TreeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <TreeProvider>
        <Component {...pageProps} />
      </TreeProvider>
    </UserProvider>
  );
}

export default MyApp;
