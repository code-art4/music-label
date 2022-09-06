import { NextPage } from 'next';
import Image from 'next/image';

const NewRelease: NextPage<{ image: string }> = ({ image }) => {
  return (
    <div>
      <Image
        src={image}
        width='500'
        height='500'
        alt={image}
        objectFit='cover'
      />
      <div className='flex justify-between w-full'>
        <Image
          src='/articons_spotify.svg'
          width='100'
          height='90'
          objectFit='contain'
          alt='Spotify'
        />
        <Image
          src='/articons_deezer.svg'
          width='100'
          height='90'
          objectFit='contain'
          alt='Deezer'
        />
      </div>
    </div>
  );
};

export default NewRelease;
