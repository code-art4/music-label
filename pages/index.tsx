import type { NextPage } from 'next';
import Head from 'next/head';
import {
  HeroContainer,
  Features,
  Quote,
  AlbumOnSpotify,
  Quote2,
  Footer,
} from '../components/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock label</title>
      </Head>
      <div className='flex flex-col overflow-hidden space-y-8 md:space-y-20 h-max pb-6'>
        <HeroContainer />
        <Features />
        <Quote />
        <AlbumOnSpotify />
        <Quote2 />
      </div>
      <Footer />
    </>
  );
};

export default Home;
