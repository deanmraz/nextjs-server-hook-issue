import Head from 'next/head';
import TestComponent from 'react-component-library/build/src/TestComponent';
import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css'

const styles = {
  container: '',
};

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Failing</div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
         <TestComponent />

        <div style={{marginTop: '100px'}}>
          <button onClick={() => window.location.reload()}>Refresh, Note: this will work on browser, so try refreshing and server will fail</button>
        </div>
      </div>

    </div>
  )
}
