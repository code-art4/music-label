import Image from 'next/image';
import NewRelease from './newRelease';

const NewSingles = [
  'release-single-image.png',
  'release-single-image-2.png',
  'release-single-image-3.png',
];

const Features = () => {
  return (
    <div className='mx-auto w-[90%] lg:w-[55%] text-center h-max'>
      <div className='flex flex-col space-y-4'>
        <p className='text-red text-4xl font-MVBoli uppercase'>Featured</p>

        <div className='font-Lora flex flex-col space-y-2 !mb-[4rem]'>
          <h3 className='text-3xl'>NEW RELEASES</h3>

          <p className='text-xl'>
            This week&apos;s must-know single is a biggie; being the return of
            the one and only pop princess, Ms. Britney Spears. Following an
            extended professional break
          </p>
        </div>

        <div className='flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-8'>
          {NewSingles.map((image, index) => {
              return <NewRelease image={"/" + image} key={index} />;
          })}              
        </div>
      </div>
    </div>
  );
};

export default Features;
