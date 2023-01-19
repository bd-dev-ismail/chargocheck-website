import AboutIndex from '@/components/About/AboutIndex';
import Head from 'next/head';


const index = () => {
    return (
      <div>
        <Head>
          <title>Chargocheck -About</title>
        </Head>
        <div>
            <AboutIndex/>
        </div>
      </div>
    );
};

export default index;