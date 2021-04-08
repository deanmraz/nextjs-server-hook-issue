import Head from 'next/head';
import Link from 'next/link';
import TestComponent from 'react-component-library/build/src/TestComponent';
import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css'

const styles = {
  container: '',
};

export default function Home() {
  const router = useRouter();
  console.log('will render component', router.query?.render!! || false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
        {router.query?.render ? (
          <>
            <TestComponent />
            <div style={{marginTop: '25px'}}>
              <button onClick={() => window.location.reload()}>Refresh, will still work</button>
            </div>
          </>
        ) : (
          <Link href="/?render=true"><button>Render Component</button></Link>
        )}

        <div style={{marginTop: '100px'}}>
          <Link href="/failing"><button>Try rendering component server side...</button></Link>
        </div>
      </div>
    </div>
  )
}
