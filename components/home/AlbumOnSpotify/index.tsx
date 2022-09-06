import Image from 'next/image';

const NewSingles = [
  'release-single-image.png',
  'release-single-image-2.png',
  'release-single-image-3.png',
];

const AlbumOnSpotify = () => {
  return (
    <div className='mx-auto w-[90%] lg:w-[55%] text-center h-max'>
      <div className='flex flex-col space-y-4'>
        <p className='text-red text-4xl font-MVBoli uppercase'>NEW ALBUM</p>

        <div className='font-Lora flex flex-col space-y-2 !mb-[4rem]'>
          <h3 className='text-3xl'>NOW ON SPOTIFY</h3>

          <p className='text-xl'>
            This week&apos;s must-know single is a biggie; being the return of
            the one and only pop princess, Ms. Britney Spears.
          </p>
        </div>

        <div className='flex'>
          <Image
            src='/newAlbum.png'
            width='1000'
            height='400'
            alt='new album'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  );
};

export default AlbumOnSpotify;
